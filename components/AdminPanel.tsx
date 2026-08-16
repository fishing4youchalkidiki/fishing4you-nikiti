"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BOAT_CAPACITY, TRIP_IDS, athensDate, type TripId } from "@/lib/capacity";

/** Greek labels for the three departures, matching the public site's wording. */
const TRIP_LABELS: Record<TripId, string> = {
  morning: "Πρωινό ψάρεμα (07:00)",
  cruise: "Κρουαζιέρα & μπάρμπεκιου (11:30)",
  night: "Νυχτερινό ψάρεμα (21:00)",
};

type Booking = {
  id: number;
  trip_id: TripId;
  date: string;
  guests: number;
  note: string | null;
};

type Closure = {
  id: number;
  trip_id: TripId | null;
  from_date: string;
  to_date: string;
  reason: string | null;
};

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("el-GR", {
      weekday: "short",
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));
  } catch {
    return iso;
  }
}

export function AdminPanel() {
  const router = useRouter();
  const today = athensDate();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [closures, setClosures] = useState<Closure[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Booking form
  const [tripId, setTripId] = useState<TripId>("morning");
  const [date, setDate] = useState(today);
  const [guests, setGuests] = useState(2);
  const [note, setNote] = useState("");

  // Closure form
  const [closeTrip, setCloseTrip] = useState<"" | TripId>("");
  const [closeFrom, setCloseFrom] = useState(today);
  const [closeTo, setCloseTo] = useState(today);
  const [closeReason, setCloseReason] = useState("");

  /**
   * Fetching is kept free of state on purpose. Everything this returns is
   * applied by the caller, which keeps the mount effect's setState calls
   * behind an await rather than running as the effect body — the thing React
   * warns about — and makes the network path testable on its own.
   */
  const fetchLists = useCallback(async () => {
    const response = await fetch("/api/admin/bookings");
    if (response.status === 401) return "unauthorised" as const;
    if (!response.ok) return null;
    const data = await response.json();
    return data.ok ? (data as { bookings: Booking[]; closures: Closure[] }) : null;
  }, []);

  const apply = useCallback(
    (result: Awaited<ReturnType<typeof fetchLists>>) => {
      if (result === "unauthorised") {
        router.replace("/admin/login");
        return;
      }
      if (!result) {
        setMessage("Δεν μπόρεσα να διαβάσω τις κρατήσεις.");
        return;
      }
      setBookings(result.bookings);
      setClosures(result.closures);
      setMessage(null);
    },
    [router],
  );

  useEffect(() => {
    let active = true;

    void (async () => {
      try {
        const result = await fetchLists();
        if (active) apply(result);
      } catch {
        if (active) setMessage("Δεν μπόρεσα να διαβάσω τις κρατήσεις.");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [fetchLists, apply]);

  async function send(body: Record<string, unknown>, method: "POST" | "DELETE") {
    if (saving) return;
    setSaving(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/bookings", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!response.ok) {
        setMessage("Δεν αποθηκεύτηκε. Έλεγξε τα στοιχεία.");
        return;
      }
      apply(await fetchLists());
    } catch {
      setMessage("Δεν αποθηκεύτηκε. Δοκίμασε ξανά.");
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <main className="admin-shell">
      <div className="admin-topbar">
        <h1 className="admin-title">Κρατήσεις</h1>
        <button className="admin-link" type="button" onClick={logout}>
          Έξοδος
        </button>
      </div>

      <p className="admin-lead">
        Γράψε <strong>κάθε</strong> κράτηση που κλείνεις — από το site, από
        τηλέφωνο, από WhatsApp. Ο πελάτης βλέπει τις ελεύθερες θέσεις μόνο από
        αυτά που γράφεις εδώ.
      </p>

      {message && <p className="admin-error">{message}</p>}

      <section className="admin-card">
        <h2>Νέα κράτηση</h2>
        <form
          className="admin-form"
          onSubmit={(event) => {
            event.preventDefault();
            void send({ kind: "booking", tripId, date, guests, note }, "POST").then(
              () => setNote(""),
            );
          }}
        >
          <label className="admin-field">
            <span>Εκδρομή</span>
            <select value={tripId} onChange={(e) => setTripId(e.target.value as TripId)}>
              {TRIP_IDS.map((id) => (
                <option key={id} value={id}>
                  {TRIP_LABELS[id]}
                </option>
              ))}
            </select>
          </label>

          <label className="admin-field">
            <span>Ημερομηνία</span>
            <input type="date" value={date} min={today} onChange={(e) => setDate(e.target.value)} required />
          </label>

          <label className="admin-field">
            <span>Άτομα</span>
            <select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
              {Array.from({ length: BOAT_CAPACITY }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>

          <label className="admin-field">
            <span>Σημείωση (προαιρετικό)</span>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="π.χ. όνομα ή τηλέφωνο"
            />
          </label>

          <button className="admin-button" type="submit" disabled={saving}>
            {saving ? "Αποθήκευση…" : "Αποθήκευση κράτησης"}
          </button>
        </form>
      </section>

      <section className="admin-card">
        <h2>Κλειστές μέρες</h2>
        <p className="admin-hint">
          Για κακοκαιρία, ρεπό, ή όλο τον χειμώνα. Βάλε «από» και «έως» για
          πολλές μέρες μαζί.
        </p>
        <form
          className="admin-form"
          onSubmit={(event) => {
            event.preventDefault();
            void send(
              {
                kind: "closure",
                tripId: closeTrip,
                fromDate: closeFrom,
                toDate: closeTo,
                reason: closeReason,
              },
              "POST",
            ).then(() => setCloseReason(""));
          }}
        >
          <label className="admin-field">
            <span>Εκδρομή</span>
            <select
              value={closeTrip}
              onChange={(e) => setCloseTrip(e.target.value as "" | TripId)}
            >
              <option value="">Όλες (κλειστή μέρα)</option>
              {TRIP_IDS.map((id) => (
                <option key={id} value={id}>
                  {TRIP_LABELS[id]}
                </option>
              ))}
            </select>
          </label>

          <label className="admin-field">
            <span>Από</span>
            <input
              type="date"
              value={closeFrom}
              onChange={(e) => {
                setCloseFrom(e.target.value);
                if (closeTo < e.target.value) setCloseTo(e.target.value);
              }}
              required
            />
          </label>

          <label className="admin-field">
            <span>Έως</span>
            <input
              type="date"
              value={closeTo}
              min={closeFrom}
              onChange={(e) => setCloseTo(e.target.value)}
              required
            />
          </label>

          <label className="admin-field">
            <span>Λόγος (προαιρετικό)</span>
            <input
              type="text"
              value={closeReason}
              onChange={(e) => setCloseReason(e.target.value)}
              placeholder="π.χ. κακοκαιρία"
            />
          </label>

          <button className="admin-button" type="submit" disabled={saving}>
            {saving ? "Αποθήκευση…" : "Κλείσιμο ημερών"}
          </button>
        </form>
      </section>

      <section className="admin-card">
        <h2>Επόμενες κρατήσεις</h2>
        {loading ? (
          <p className="admin-hint">Φόρτωση…</p>
        ) : bookings.length === 0 ? (
          <p className="admin-hint">Καμία κράτηση ακόμα.</p>
        ) : (
          <ul className="admin-list">
            {bookings.map((b) => (
              <li key={b.id}>
                <div>
                  <strong>{formatDate(b.date)}</strong>
                  <span>
                    {TRIP_LABELS[b.trip_id]} · {b.guests} άτομα
                    {b.note ? ` · ${b.note}` : ""}
                  </span>
                </div>
                <button
                  className="admin-delete"
                  type="button"
                  disabled={saving}
                  onClick={() => void send({ kind: "booking", id: b.id }, "DELETE")}
                >
                  Διαγραφή
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="admin-card">
        <h2>Κλειστά διαστήματα</h2>
        {loading ? (
          <p className="admin-hint">Φόρτωση…</p>
        ) : closures.length === 0 ? (
          <p className="admin-hint">Καμία κλειστή μέρα.</p>
        ) : (
          <ul className="admin-list">
            {closures.map((c) => (
              <li key={c.id}>
                <div>
                  <strong>
                    {formatDate(c.from_date)}
                    {c.to_date !== c.from_date ? ` — ${formatDate(c.to_date)}` : ""}
                  </strong>
                  <span>
                    {c.trip_id ? TRIP_LABELS[c.trip_id] : "Όλες οι εκδρομές"}
                    {c.reason ? ` · ${c.reason}` : ""}
                  </span>
                </div>
                <button
                  className="admin-delete"
                  type="button"
                  disabled={saving}
                  onClick={() => void send({ kind: "closure", id: c.id }, "DELETE")}
                >
                  Διαγραφή
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
