"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/content";
import { TRIP_IDS, isWholeBoat, type TripId } from "@/lib/capacity";
import { availabilityContent } from "@/lib/availability-content";

type Day = { date: string; free: number; capacity: number; closed: boolean };
type Availability = Record<TripId, Day[]>;

type Props = {
  locale: Locale;
  tripTitles: Record<string, string>;
  /** Prefills the booking form when a guest picks a day. */
  onPick: (tripId: TripId, date: string) => void;
};

export function AvailabilityCalendar({ locale, tripTitles, onPick }: Props) {
  const copy = availabilityContent[locale];
  const [data, setData] = useState<Availability | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    // Fetched from the browser after paint, so the five locale pages stay
    // fully static. The booking form never waits on this.
    fetch("/api/availability")
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((json) => {
        if (active) setData(json as Availability);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, []);

  if (failed) {
    return <p className="availability-note">{copy.unavailable}</p>;
  }

  // Nothing is rendered until the data arrives — an empty grid that then
  // fills in would shift the page under whoever is reading it.
  if (!data) return null;

  const formatDay = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(copy.dateLocale, {
        weekday: "short",
        day: "numeric",
        month: "short",
        timeZone: "UTC",
      }).format(new Date(`${iso}T00:00:00Z`));
    } catch {
      return iso;
    }
  };

  return (
    <div className="availability">
      {TRIP_IDS.map((trip) => {
        const days = data[trip];
        if (!days) return null;
        const wholeBoat = isWholeBoat(trip);

        return (
          <div className="availability-trip" key={trip}>
            <h3>{tripTitles[trip] ?? trip}</h3>

            <ul className="availability-days">
              {days.map((day) => {
                const open = day.free > 0;
                const label = day.closed
                  ? copy.closed
                  : wholeBoat
                    ? open
                      ? copy.boatFree
                      : copy.boatTaken
                    : open
                      ? `${day.free} / ${day.capacity}`
                      : copy.full;

                return (
                  <li key={day.date}>
                    <button
                      type="button"
                      className={[
                        "availability-day",
                        open ? "is-open" : "is-closed",
                        day.closed ? "is-blocked" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      disabled={!open}
                      onClick={() => onPick(trip, day.date)}
                      aria-label={`${formatDay(day.date)} — ${label}${open ? `. ${copy.pick}` : ""}`}
                    >
                      <span className="availability-date">{formatDay(day.date)}</span>
                      <span className="availability-count">{label}</span>
                      {!wholeBoat && !day.closed && open && (
                        <span className="availability-unit">{copy.seatsLabel}</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
