import { readAvailability } from "@/lib/availability";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Public, unauthenticated: it only ever reports how many seats are left, and
 * never who booked them.
 *
 * Cached for five minutes at the edge. Availability only changes when
 * Dimitris records a booking, so querying the database once per visitor would
 * burn the free tier's compute allowance to re-read the same numbers — and
 * five minutes of staleness costs nothing when the guest still has to send a
 * request and wait for him to confirm.
 */
export async function GET() {
  try {
    const availability = await readAvailability();

    return Response.json(availability, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (cause) {
    console.error("availability: could not read", cause);
    // The calendar is an enhancement; the booking form must keep working
    // without it, so the client treats this as "unknown" rather than "full".
    return Response.json({ ok: false }, { status: 503 });
  }
}
