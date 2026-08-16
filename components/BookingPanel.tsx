"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/content";

type BookingCopy = {
  tripLabel: string;
  dateLabel: string;
  adultsLabel: string;
  childrenLabel: string;
  button: string;
  direct: string;
  messageTemplate: string;
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  emailOptional: string;
  sending: string;
  sentTitle: string;
  sentBody: string;
  failedTitle: string;
  failedBody: string;
  failedButton: string;
};

type BookingPanelProps = {
  copy: BookingCopy;
  locale: Locale;
  tours: Array<{ id: string; title: string; time: string }>;
  /**
   * Set when a guest picks a day in the availability calendar. `nonce` is
   * what makes picking the same day twice register — without it, choosing an
   * identical trip and date would be an unchanged prop and the form would not
   * react, which reads as a broken button.
   */
  selection?: { tripId: string; date: string; nonce: number };
};

const WHATSAPP_NUMBER = "306974139200";

type Status = "idle" | "sending" | "sent" | "failed";

export function BookingPanel({ copy, locale, tours, selection }: BookingPanelProps) {
  const [tourId, setTourId] = useState(tours[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Bots fill this; people never see it.
  const [company, setCompany] = useState("");
  // How long the form was on screen. A real person takes seconds. Stamped on
  // mount rather than during render — Date.now() is impure, so reading it
  // while rendering would re-evaluate on every render.
  const openedAt = useRef<number | null>(null);
  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  // A pick from the calendar fills the trip and date in. Deliberately does
  // not touch status: if the guest already sent one request and is picking a
  // second date, they should see the form again rather than the thank-you.
  const pickedNonce = useRef(0);
  useEffect(() => {
    if (!selection || selection.nonce === pickedNonce.current) return;
    pickedNonce.current = selection.nonce;
    setTourId(selection.tripId);
    setDate(selection.date);
    setStatus("idle");
  }, [selection]);

  const selectedTour = useMemo(
    () => tours.find((tour) => tour.id === tourId) ?? tours[0],
    [tourId, tours],
  );

  const whatsappHref = useMemo(() => {
    const message = copy.messageTemplate
      .replace("{trip}", `${selectedTour?.title ?? ""} (${selectedTour?.time ?? ""})`)
      .replace("{date}", date || "—")
      .replace("{adults}", adults)
      .replace("{children}", children);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [adults, children, copy.messageTemplate, date, selectedTour]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourId,
          date,
          adults,
          children,
          name,
          phone,
          email,
          locale,
          company,
          elapsed: openedAt.current === null ? 0 : Date.now() - openedAt.current,
        }),
      });

      setStatus(response.ok ? "sent" : "failed");
    } catch {
      // Offline, blocked, DNS — the guest still needs a way through.
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="booking-result" role="status">
        <strong>{copy.sentTitle}</strong>
        <p>{copy.sentBody}</p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label className="field field-wide">
        <span>{copy.tripLabel}</span>
        <select value={tourId} onChange={(event) => setTourId(event.target.value)}>
          {tours.map((tour) => (
            <option key={tour.id} value={tour.id}>
              {tour.title} · {tour.time}
            </option>
          ))}
        </select>
      </label>

      <label className="field field-wide">
        <span>{copy.dateLabel}</span>
        <input
          type="date"
          required
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>

      <label className="field">
        <span>{copy.adultsLabel}</span>
        <select value={adults} onChange={(event) => setAdults(event.target.value)}>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>{copy.childrenLabel}</span>
        <select
          value={children}
          onChange={(event) => setChildren(event.target.value)}
        >
          {Array.from({ length: 10 }, (_, index) => index).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>

      {/* WhatsApp used to carry the guest's number by itself. Email carries
          nothing, so without these Dimitris gets a request he cannot answer. */}
      <label className="field field-wide">
        <span>{copy.nameLabel}</span>
        <input
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label className="field">
        <span>{copy.phoneLabel}</span>
        <input
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>

      <label className="field">
        <span>
          {copy.emailLabel} <em>({copy.emailOptional})</em>
        </span>
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <div className="booking-trap" aria-hidden="true">
        <label>
          Company
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </label>
      </div>

      {status === "failed" ? (
        <div className="booking-fallback" role="alert">
          <strong>{copy.failedTitle}</strong>
          <p>{copy.failedBody}</p>
          <a
            className="button button-whatsapp"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            {copy.failedButton}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : (
        <button
          className="button button-whatsapp booking-submit"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? copy.sending : copy.button}
          <span aria-hidden="true">↗</span>
        </button>
      )}

      <p className="form-note">{copy.direct}</p>
    </form>
  );
}
