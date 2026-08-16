"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "wrong" | "error">("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // refresh() so the server component re-reads the new cookie.
        router.replace("/admin");
        router.refresh();
        return;
      }
      setStatus(response.status === 401 ? "wrong" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <label className="admin-field">
        <span>Κωδικός</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />
      </label>

      <button className="admin-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Έλεγχος…" : "Είσοδος"}
      </button>

      {status === "wrong" && <p className="admin-error">Λάθος κωδικός.</p>}
      {status === "error" && (
        <p className="admin-error">Κάτι πήγε στραβά. Δοκίμασε ξανά.</p>
      )}
    </form>
  );
}
