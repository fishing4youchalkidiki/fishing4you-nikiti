/**
 * The boat's limits, in one place.
 *
 * Until now the number 10 only existed as prose — "Up to 10 guests", "a
 * maximum of 10 guests per departure", the FAQ answer, the JSON-LD — written
 * out by hand in five languages. That was fine while it was only ever read.
 * An availability calendar has to do arithmetic with it, and copy and
 * arithmetic that disagree would show guests spots that do not exist.
 */

export const BOAT_CAPACITY = 10;

export const TRIP_IDS = ["morning", "cruise", "night"] as const;
export type TripId = (typeof TRIP_IDS)[number];

export function isTripId(value: string): value is TripId {
  return (TRIP_IDS as readonly string[]).includes(value);
}

/**
 * The barbecue cruise is priced per boat (€600) rather than per person, so it
 * is not a counter — one booking takes the whole departure. Showing "3 spots
 * left" there would invite requests Dimitris would then have to turn down.
 * Morning and night sell per seat and do count down.
 */
const WHOLE_BOAT_TRIPS = new Set<TripId>(["cruise"]);

export function isWholeBoat(trip: TripId) {
  return WHOLE_BOAT_TRIPS.has(trip);
}

/**
 * The three departures do not overlap — 07:00–10:30, 11:30–18:30 and
 * 21:00–00:30 — so all three can run on the same day and each is counted on
 * its own. A cruise booking does not consume the morning's seats.
 */
export function capacityFor(trip: TripId) {
  return isWholeBoat(trip) ? 1 : BOAT_CAPACITY;
}

/** How many days ahead the public calendar offers. */
export const CALENDAR_DAYS = 30;

/**
 * Greece is UTC+2/+3, and the server is neither. "Today" has to mean today
 * where the boat is, or a guest in London and Dimitris would disagree about
 * which day is still bookable. en-CA formats as YYYY-MM-DD, which is the
 * shape the rest of the code already uses.
 */
export function athensDate(at: Date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Athens",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(at);
}

/** Adds whole days to a YYYY-MM-DD string without tripping over timezones. */
export function addDays(isoDate: string, days: number) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const stamp = Date.UTC(y, m - 1, d) + days * 86_400_000;
  return new Date(stamp).toISOString().slice(0, 10);
}
