import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, cookieIsValid } from "@/lib/admin-auth";
import { AdminLoginForm } from "@/components/AdminLoginForm";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (cookieIsValid((await cookies()).get(ADMIN_COOKIE)?.value)) {
    redirect("/admin");
  }

  return (
    <main className="admin-shell admin-shell-narrow">
      <h1 className="admin-title">Κρατήσεις</h1>
      <p className="admin-lead">Βάλε τον κωδικό σου για να συνεχίσεις.</p>
      <AdminLoginForm />
    </main>
  );
}
