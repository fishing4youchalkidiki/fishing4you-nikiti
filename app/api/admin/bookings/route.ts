import { cookies } from "next/headers";
import { ADMIN_COOKIE, cookieIsValid } from "@/lib/admin-auth";
import { getDb } from "@/lib/db";
import { BOAT_CAPACITY, athensDate, isTripId } from "@/lib/capacity";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function authorised() {
  return cookieIsValid((await cookies()).get(ADMIN_COOKIE)?.value);
}

function clean(value: unknown, max = 200) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Same strictness as the booking route: a date must round-trip unchanged. */
function isIsoDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;
  const [, y, m, d] = match;
  const back = new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
  return (
    back.getUTCFullYear() === Number(y) &&
    back.getUTCMonth() === Number(m) - 1 &&
    back.getUTCDate() === Number(d)
  );
}

/** Everything upcoming, so Dimitris can see and correct what he has entered. */
export async function GET() {
  if (!(await authorised())) return Response.json({ ok: false }, { status: 401 });

  try {
    const { db, ready } = getDb();
    await ready;
    const today = athensDate();

    const [bookings, closures] = await Promise.all([
      db.execute({
        sql: `SELECT id, trip_id, date, guests, note FROM bookings
              WHERE date >= ? ORDER BY date, trip_id`,
        args: [today],
      }),
      db.execute({
        sql: `SELECT id, trip_id, from_date, to_date, reason FROM closures
              WHERE to_date >= ? ORDER BY from_date`,
        args: [today],
      }),
    ]);

    return Response.json({
      ok: true,
      bookings: bookings.rows,
      closures: closures.rows,
    });
  } catch (cause) {
    console.error("admin: could not list", cause);
    return Response.json({ ok: false }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await authorised())) return Response.json({ ok: false }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const kind = clean(body.kind);
  const { db, ready } = getDb();

  try {
    await ready;

    if (kind === "booking") {
      const tripId = clean(body.tripId);
      const date = clean(body.date);
      const guests = Number(body.guests);

      if (!isTripId(tripId) || !isIsoDate(date)) {
        return Response.json({ ok: false, error: "invalid" }, { status: 400 });
      }
      // A whole-boat cruise still records how many people came, for his own
      // reference, but it may not exceed what the boat holds.
      if (!Number.isInteger(guests) || guests < 1 || guests > BOAT_CAPACITY) {
        return Response.json({ ok: false, error: "guests" }, { status: 400 });
      }

      await db.execute({
        sql: `INSERT INTO bookings (trip_id, date, guests, note, created_at)
              VALUES (?, ?, ?, ?, ?)`,
        args: [tripId, date, guests, clean(body.note) || null, new Date().toISOString()],
      });

      return Response.json({ ok: true });
    }

    if (kind === "closure") {
      const rawTrip = clean(body.tripId);
      // Empty means the whole day, every departure — the common case for bad
      // weather or a day off.
      const tripId = rawTrip === "" ? null : rawTrip;
      const fromDate = clean(body.fromDate);
      const toDate = clean(body.toDate) || fromDate;

      if (tripId !== null && !isTripId(tripId)) {
        return Response.json({ ok: false, error: "invalid" }, { status: 400 });
      }
      if (!isIsoDate(fromDate) || !isIsoDate(toDate) || toDate < fromDate) {
        return Response.json({ ok: false, error: "dates" }, { status: 400 });
      }

      await db.execute({
        sql: `INSERT INTO closures (trip_id, from_date, to_date, reason, created_at)
              VALUES (?, ?, ?, ?, ?)`,
        args: [tripId, fromDate, toDate, clean(body.reason) || null, new Date().toISOString()],
      });

      return Response.json({ ok: true });
    }

    return Response.json({ ok: false, error: "kind" }, { status: 400 });
  } catch (cause) {
    console.error("admin: could not save", cause);
    return Response.json({ ok: false }, { status: 500 });
  }
}

/** Undo a mistyped entry. */
export async function DELETE(request: Request) {
  if (!(await authorised())) return Response.json({ ok: false }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const kind = clean(body.kind);
  const id = Number(body.id);
  if (!Number.isInteger(id) || id < 1) {
    return Response.json({ ok: false }, { status: 400 });
  }
  // Table name cannot come from the request body.
  const table = kind === "closure" ? "closures" : kind === "booking" ? "bookings" : null;
  if (!table) return Response.json({ ok: false }, { status: 400 });

  try {
    const { db, ready } = getDb();
    await ready;
    await db.execute({ sql: `DELETE FROM ${table} WHERE id = ?`, args: [id] });
    return Response.json({ ok: true });
  } catch (cause) {
    console.error("admin: could not delete", cause);
    return Response.json({ ok: false }, { status: 500 });
  }
}
