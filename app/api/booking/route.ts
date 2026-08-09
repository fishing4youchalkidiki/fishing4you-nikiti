import { Resend } from "resend";
import { content, locales, type Locale } from "@/lib/content";

// The only dynamic route on the site. Everything else is prerendered; this
// exists because a static page cannot send an email.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FIELD = 200;
/** Nobody fills a six-field form honestly in under three seconds. */
const MIN_FILL_MS = 3000;
/** A form that emails is a spam target. Cheap ceiling, no CAPTCHA needed.
 *  Deliberately loose: guests share hotel and mobile-carrier IPs, so a tight
 *  limit would turn away real bookings from one hotel long before it troubled
 *  a bot, which would rotate addresses anyway. The honeypot and the time trap
 *  are what actually stop the traffic; this only blunts a flood. */
const RATE_LIMIT = { max: 20, windowMs: 60 * 60 * 1000 };

// Per-instance only: serverless instances come and go, so this is a speed
// bump for a bot hammering one instance, not a real quota. The honeypot and
// the time trap do the actual work.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD) : "";
}

/** Keeps a crafted field from injecting extra headers into the email. */
function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ");
}

/**
 * "2026-08-26" as a Greek reader would write it, with the weekday spelled out
 * — a boat captain thinks in days of the week, not in ISO dates. Built in UTC
 * on purpose: `new Date("2026-08-26")` is midnight UTC, and formatting that in
 * a westward timezone would print the day before. Falls back to the raw string
 * rather than risk printing "Invalid Date" over a real booking.
 */
function formatGreekDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;

  const [, y, m, d] = match;
  const stamp = Date.UTC(Number(y), Number(m) - 1, Number(d));
  if (Number.isNaN(stamp)) return value;

  // Date.UTC rolls impossible values over silently: month 13 day 45 becomes
  // next February. The browser cannot produce that, but the route can be
  // posted to directly, and a confidently wrong date in a booking email is
  // worse than an unformatted one. Only accept what round-trips unchanged.
  const back = new Date(stamp);
  if (
    back.getUTCFullYear() !== Number(y) ||
    back.getUTCMonth() !== Number(m) - 1 ||
    back.getUTCDate() !== Number(d)
  ) {
    return value;
  }

  try {
    return new Intl.DateTimeFormat("el-GR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(stamp);
  } catch {
    return value;
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  // Junk is rejected before anything else: a bot should get the same answer
  // whether or not the mail keys happen to be configured, and it keeps the
  // traps testable on a machine that has no keys at all.
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Bots fill every field they find, including the one hidden from people.
  if (clean(body.company)) return Response.json({ ok: true });

  const elapsed = Number(body.elapsed);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return Response.json({ ok: false }, { status: 429 });

  const name = singleLine(clean(body.name));
  const phone = singleLine(clean(body.phone));
  const email = singleLine(clean(body.email));
  const date = singleLine(clean(body.date));
  const adults = singleLine(clean(body.adults));
  const children = singleLine(clean(body.children));
  const tourId = singleLine(clean(body.tourId));
  const locale = (locales as readonly string[]).includes(clean(body.locale))
    ? (clean(body.locale) as Locale)
    : "en";

  if (!name || !phone || !date) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL;

  // Answer the same way whether the keys are missing or Resend is down: the
  // form falls back to WhatsApp, so the guest still reaches Dimitris.
  if (!apiKey || !to || !from) {
    console.error("booking: RESEND_API_KEY, BOOKING_TO_EMAIL or BOOKING_FROM_EMAIL is not set");
    return Response.json({ ok: false }, { status: 503 });
  }

  // Resolve the trip from our own content rather than trusting the posted
  // title, so the email can only ever name a trip that exists — and always
  // from the Greek copy, whatever language the guest used. Dimitris is the
  // only reader; a German booking naming "Morgenangeln" would just make him
  // work it out. Which language to answer in is its own line below.
  const tour = content.el.tours.find((t) => t.id === tourId);
  const tourLabel = tour ? `${tour.title} (${tour.time})` : tourId || "—";

  const rows: Array<[string, string]> = [
    ["Εκδρομή", tourLabel],
    ["Ημερομηνία", formatGreekDate(date)],
    ["Ενήλικες", adults || "—"],
    ["Παιδιά", children || "0"],
    ["Όνομα", name],
    ["Τηλέφωνο", phone],
    ["Email", email || "—"],
    // He answers in five languages; this saves him guessing which one.
    ["Γλώσσα", content[locale].languageName],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:15px;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="color:#5f6f79">${escapeHtml(k)}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`,
    )
    .join("")}</table>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Κράτηση — ${tourLabel} — ${formatGreekDate(date)}`,
      text,
      html,
      // So hitting reply in his mail app writes to the guest, not to us.
      // Only when it actually looks like an address: the browser validates
      // the field, but the route can be posted to directly, and a malformed
      // reply-to makes Resend reject the whole message — losing the booking
      // over an optional field.
      ...(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? { replyTo: email } : {}),
    });

    if (error) {
      console.error("booking: resend rejected the message", error);
      return Response.json({ ok: false }, { status: 502 });
    }
  } catch (cause) {
    console.error("booking: could not reach resend", cause);
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
