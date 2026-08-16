import { readAvailability } from "@/lib/availability";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Public, unauthenticated: it only ever reports how many seats are left, and
 * never who booked them.
 *
 * Deliberately uncached. An earlier version held this at the edge for five
 * minutes, which was a mistake carried over from costing this against Neon,
 * where the meter runs on compute-hours. Turso bills row reads instead, and
 * the free tier allows 500 million a month: even at thirty times the current
 * traffic, serving every visitor a fresh read is about a million rows, or
 * 0.2% of the allowance. The cache protected nothing and cost the one thing
 * that matters here — Dimitris recorded a booking, reloaded, saw the old
 * number, and reasonably concluded the feature was broken.
 *
 * If this ever does need caching, invalidate it when the admin writes rather
 * than putting a timer on it.
 */
export async function GET() {
  try {
    const availability = await readAvailability();

    return Response.json(availability, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (cause) {
    console.error("availability: could not read", cause);
    // The calendar is an enhancement; the booking form must keep working
    // without it, so the client treats this as "unknown" rather than "full".
    return Response.json({ ok: false }, { status: 503 });
  }
}
