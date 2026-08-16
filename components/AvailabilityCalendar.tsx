"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/content";
import { TRIP_IDS, isWholeBoat, type TripId } from "@/lib/capacity";
import { availabilityContent } from "@/lib/availability-content";

type Day = {
  date: string;
  free: number;
  booked: number;
  capacity: number;
  closed: boolean;
};
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
            {!wholeBoat && <p className="availability-legend">{copy.legend}</p>}

            <ul className="availability-days">
              {days.map((day) => {
                const open = day.free > 0;
                // Three states, kept distinct on purpose: sold out and "the
                // boat is not going" are different facts and a guest should
                // not have to guess which one they are looking at.
                const state = day.closed ? "blocked" : open ? "open" : "full";
                // Running low earns its own colour — it is the one case where
                // a guest benefits from acting sooner.
                const low = state === "open" && !wholeBoat && day.free <= 3;

                // Spoken aloud rather than shown: a screen reader gets the
                // sentence the pips convey visually.
                const spoken = day.closed
                  ? copy.closed
                  : wholeBoat
                    ? open
                      ? copy.boatFree
                      : copy.boatTaken
                    : `${day.free} ${copy.freeLabel}, ${day.booked} ${copy.bookedLabel}`;

                return (
                  <li key={day.date}>
                    <button
                      type="button"
                      className={`availability-day is-${state}${low ? " is-low" : ""}`}
                      disabled={!open}
                      onClick={() => onPick(trip, day.date)}
                      aria-label={`${formatDay(day.date)} — ${spoken}${open ? `. ${copy.pick}` : ""}`}
                    >
                      <span className="availability-date">{formatDay(day.date)}</span>

                      {wholeBoat || day.closed ? (
                        <span className="availability-word">
                          {day.closed
                            ? copy.closed
                            : open
                              ? copy.boatFree
                              : copy.boatTaken}
                        </span>
                      ) : (
                        <>
                          {/* The pips carry "how many are taken" without a
                              word in any language — countable at a glance at
                              ten. */}
                          <span className="availability-pips" aria-hidden="true">
                            {Array.from({ length: day.capacity }, (_, i) => (
                              <span
                                key={i}
                                className={
                                  i < day.booked ? "pip is-taken" : "pip"
                                }
                              />
                            ))}
                          </span>
                          {/* A sold-out day says a word, not a number, so it
                              uses the word style — the display face sized for
                              a single digit has no width limit and let long
                              translations stretch the card out of the row. */}
                          {open ? (
                            <>
                              <span className="availability-count">{day.free}</span>
                              <span className="availability-unit">
                                {copy.freeLabel}
                              </span>
                            </>
                          ) : (
                            <span className="availability-word">{copy.full}</span>
                          )}
                        </>
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
