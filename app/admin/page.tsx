import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, cookieIsValid } from "@/lib/admin-auth";
import { AdminPanel } from "@/components/AdminPanel";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!cookieIsValid((await cookies()).get(ADMIN_COOKIE)?.value)) {
    redirect("/admin/login");
  }

  return <AdminPanel />;
}
