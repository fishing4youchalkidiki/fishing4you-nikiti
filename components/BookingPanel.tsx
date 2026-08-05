"use client";

import { useMemo, useState, type FormEvent } from "react";

type BookingCopy = {
  tripLabel: string;
  dateLabel: string;
  adultsLabel: string;
  childrenLabel: string;
  button: string;
  direct: string;
  messageTemplate: string;
};

type BookingPanelProps = {
  copy: BookingCopy;
  tours: Array<{ id: string; title: string; time: string }>;
};

const WHATSAPP_NUMBER = "306974139200";

export function BookingPanel({ copy, tours }: BookingPanelProps) {
  const [tourId, setTourId] = useState(tours[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const selectedTour = useMemo(
    () => tours.find((tour) => tour.id === tourId) ?? tours[0],
    [tourId, tours],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = copy.messageTemplate
      .replace("{trip}", `${selectedTour?.title ?? ""} (${selectedTour?.time ?? ""})`)
      .replace("{date}", date || "—")
      .replace("{adults}", adults)
      .replace("{children}", children);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
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

      <button className="button button-whatsapp booking-submit" type="submit">
        {copy.button}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">{copy.direct}</p>
    </form>
  );
}
