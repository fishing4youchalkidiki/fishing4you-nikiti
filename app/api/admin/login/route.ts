import { cookies } from "next/headers";
import {
  clearedCookie,
  issueCookie,
  loginRateLimited,
  passwordMatches,
} from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (loginRateLimited(ip)) {
    return Response.json({ ok: false }, { status: 429 });
  }

  const password = typeof body.password === "string" ? body.password : "";
  if (!passwordMatches(password)) {
    // Same answer whether the password was wrong or ADMIN_PASSWORD is unset,
    // so a misconfigured deploy does not advertise itself.
    return Response.json({ ok: false }, { status: 401 });
  }

  const cookie = issueCookie();
  (await cookies()).set(cookie.name, cookie.value, cookie.options);
  return Response.json({ ok: true });
}

/** Logout. */
export async function DELETE() {
  const cookie = clearedCookie();
  (await cookies()).set(cookie.name, cookie.value, cookie.options);
  return Response.json({ ok: true });
}
