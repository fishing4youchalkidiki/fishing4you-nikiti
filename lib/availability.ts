import { getDb } from "./db";
import {
  CALENDAR_DAYS,
  TRIP_IDS,
  addDays,
  athensDate,
  capacityFor,
  isWholeBoat,
  type TripId,
} from "./capacity";

export type DayAvailability = {
  date: string;
  /** Seats left. For the whole-boat cruise this is 1 (free) or 0 (taken). */
  free: number;
  capacity: number;
  /** True when Dimitris marked the day or departure closed, not sold out. */
  closed: boolean;
};

export type Availability = Record<TripId, DayAvailability[]>;

type BookingRow = { trip_id: string; date: string; guests: number };
type ClosureRow = { trip_id: string | null; from_date: string; to_date: string };

/**
 * One read of each table for the whole window, then the arithmetic in memory.
 * The window is at most 30 days across 3 departures, so this is a handful of
 * rows — cheaper and simpler than 90 grouped queries.
 */
export async function readAvailability(
  days: number = CALENDAR_DAYS,
): Promise<Availability> {
  const { db, ready } = getDb();
  await ready;

  const from = athensDate();
  const to = addDays(from, days - 1);

  const [bookings, closures] = await Promise.all([
    db.execute({
      sql: `SELECT trip_id, date, guests FROM bookings WHERE date >= ? AND date <= ?`,
      args: [from, to],
    }),
    // A closure overlaps the window when it starts before the window ends and
    // ends after the window starts — this is what catches an open-ended
    // winter closure that began months ago.
    db.execute({
      sql: `SELECT trip_id, from_date, to_date FROM closures WHERE from_date <= ? AND to_date >= ?`,
      args: [to, from],
    }),
  ]);

  const bookingRows = bookings.rows as unknown as BookingRow[];
  const closureRows = closures.rows as unknown as ClosureRow[];

  // trip|date -> guests already taken
  const taken = new Map<string, number>();
  for (const row of bookingRows) {
    const key = `${row.trip_id}|${row.date}`;
    taken.set(key, (taken.get(key) ?? 0) + Number(row.guests));
  }

  const result = {} as Availability;

  for (const trip of TRIP_IDS) {
    const list: DayAvailability[] = [];

    for (let i = 0; i < days; i++) {
      const date = addDays(from, i);
      const capacity = capacityFor(trip);

      const closed = closureRows.some(
        (c) =>
          (c.trip_id === null || c.trip_id === trip) &&
          c.from_date <= date &&
          c.to_date >= date,
      );

      const used = taken.get(`${trip}|${date}`) ?? 0;
      // The cruise sells the whole boat, so any booking at all takes it —
      // guests counts people for Dimitris' own reference, not seats sold.
      const free = closed
        ? 0
        : isWholeBoat(trip)
          ? used > 0
            ? 0
            : 1
          : Math.max(0, capacity - used);

      list.push({ date, free, capacity, closed });
    }

    result[trip] = list;
  }

  return result;
}
