import { createClient, type Client } from "@libsql/client";

/**
 * Turso is SQLite, so the same client reads a plain local file. Development
 * points TURSO_DATABASE_URL at file:local.db and never touches the cloud
 * database — test bookings cannot reach the calendar Dimitris relies on.
 * Production gets the real URL and token from Vercel.
 */
let client: Client | null = null;
let schemaReady: Promise<void> | null = null;

function connect() {
  const url = process.env.TURSO_DATABASE_URL;
  if (!url) throw new Error("TURSO_DATABASE_URL is not set");

  return createClient({
    url,
    // A local file needs no token, and passing an empty one is an auth error
    // rather than a no-op, so only send it when there is one.
    ...(process.env.TURSO_AUTH_TOKEN
      ? { authToken: process.env.TURSO_AUTH_TOKEN }
      : {}),
  });
}

/**
 * Two tables, created on first use. At this size a migration tool would be
 * more moving parts than the thing it manages.
 *
 * `closures` carries a date range rather than one row per day so that "we do
 * not sail in winter" is a single entry instead of a hundred and fifty. A
 * NULL trip_id closes every departure that day; a set one closes just that
 * departure, for when the morning is cancelled but the night trip still runs.
 */
async function ensureSchema(db: Client) {
  await db.batch(
    [
      `CREATE TABLE IF NOT EXISTS bookings (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         trip_id TEXT NOT NULL,
         date TEXT NOT NULL,
         guests INTEGER NOT NULL,
         note TEXT,
         created_at TEXT NOT NULL
       )`,
      `CREATE INDEX IF NOT EXISTS bookings_date_idx ON bookings (date)`,
      `CREATE TABLE IF NOT EXISTS closures (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         trip_id TEXT,
         from_date TEXT NOT NULL,
         to_date TEXT NOT NULL,
         reason TEXT,
         created_at TEXT NOT NULL
       )`,
      `CREATE INDEX IF NOT EXISTS closures_range_idx ON closures (from_date, to_date)`,
    ],
    "write",
  );
}

export function getDb() {
  if (!client) client = connect();
  // Kept as a promise so concurrent requests share one schema check rather
  // than each firing their own CREATE TABLE batch.
  if (!schemaReady) {
    schemaReady = ensureSchema(client).catch((error) => {
      // Let the next caller retry instead of caching the failure forever.
      schemaReady = null;
      throw error;
    });
  }
  return { db: client, ready: schemaReady };
}
