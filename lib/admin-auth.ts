import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * One password, one cookie. The site has no other accounts and no user
 * records, so a session store would be infrastructure for a single person.
 *
 * The cookie is not the password: it is an expiry stamped and signed with the
 * password itself, so it cannot be forged without knowing it, and it stops
 * working on its own after a week. Changing ADMIN_PASSWORD in Vercel
 * invalidates every cookie already issued, which is the behaviour you want
 * if the password ever leaks.
 */
const COOKIE_NAME = "f4y_admin";
const MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

function secret() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) throw new Error("ADMIN_PASSWORD is not set");
  return password;
}

function sign(expiresAt: number) {
  return createHmac("sha256", secret()).update(String(expiresAt)).digest("hex");
}

/** Constant-time compare, so a wrong password cannot be found byte by byte. */
function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  // timingSafeEqual throws on length mismatch, which would itself leak the
  // length, so compare a fixed-size digest of each instead.
  const digest = (buf: Buffer) =>
    createHmac("sha256", "length-guard").update(buf).digest();
  return timingSafeEqual(digest(left), digest(right));
}

export function passwordMatches(candidate: string) {
  try {
    return safeEqual(candidate, secret());
  } catch {
    return false;
  }
}

export function issueCookie() {
  const expiresAt = Date.now() + MAX_AGE_SECONDS * 1000;
  return {
    name: COOKIE_NAME,
    value: `${expiresAt}.${sign(expiresAt)}`,
    options: {
      httpOnly: true,
      sameSite: "strict" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: MAX_AGE_SECONDS,
    },
  };
}

export function clearedCookie() {
  return { ...issueCookie(), value: "", options: { ...issueCookie().options, maxAge: 0 } };
}

export function cookieIsValid(value: string | undefined) {
  if (!value) return false;

  const [stamp, signature] = value.split(".");
  const expiresAt = Number(stamp);
  if (!Number.isFinite(expiresAt) || !signature) return false;
  if (expiresAt < Date.now()) return false;

  try {
    return safeEqual(signature, sign(expiresAt));
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE = COOKIE_NAME;

/**
 * Login attempts, per instance. Same shape and same caveat as the booking
 * route's limiter: serverless instances come and go, so this is a speed bump
 * against someone hammering one instance, not a real quota. It exists because
 * a single shared password is exactly what a script would try to guess.
 */
const attempts = new Map<string, number[]>();
const LIMIT = { max: 10, windowMs: 15 * 60 * 1000 };

export function loginRateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < LIMIT.windowMs);
  recent.push(now);
  attempts.set(ip, recent);
  if (attempts.size > 5000) attempts.clear();
  return recent.length > LIMIT.max;
}
