"use client";

import { useRef, useState } from "react";
import type { Locale } from "@/lib/content";
import type { TripId } from "@/lib/capacity";
import { availabilityContent } from "@/lib/availability-content";
import { AvailabilityCalendar } from "./AvailabilityCalendar";
import { BookingPanel } from "./BookingPanel";

type Props = {
  locale: Locale;
  // Passed through untouched to BookingPanel.
  copy: React.ComponentProps<typeof BookingPanel>["copy"];
  tours: Array<{ id: string; title: string; time: string }>;
  /** Passed through untouched to BookingPanel — see its own doc comment. */
  initialTrip?: string;
  /**
   * The section's own headline and phone link, rendered on the server and
   * handed in as children so this wrapper can be a client component without
   * dragging that copy across the boundary.
   */
  children: React.ReactNode;
};

/**
 * Holds the one piece of state the calendar and the form share: which day the
 * guest picked. SitePage is a server component, so this small client wrapper
 * is what lets a click on a day reach the form — "κανουν κρατηση στο
 * ημερολογιο", as Dimitris put it.
 */
export function BookingSection({ locale, copy, tours, initialTrip, children }: Props) {
  const [selection, setSelection] = useState<
    { tripId: string; date: string; nonce: number } | undefined
  >();
  const nonce = useRef(0);
  const formRef = useRef<HTMLDivElement>(null);
  const availability = availabilityContent[locale];

  const tripTitles = Object.fromEntries(tours.map((t) => [t.id, t.title]));

  function handlePick(tripId: TripId, date: string) {
    nonce.current += 1;
    setSelection({ tripId, date, nonce: nonce.current });
    // The calendar sits above the form, so scroll the filled-in form into
    // view — otherwise the click looks like it did nothing.
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <>
      <div className="shell availability-block">
        <div className="availability-heading">
          <p className="eyebrow">{availability.eyebrow}</p>
          <h3>{availability.title}</h3>
          <p>{availability.intro}</p>
        </div>

        <AvailabilityCalendar
          locale={locale}
          tripTitles={tripTitles}
          onPick={handlePick}
        />
      </div>

      <div className="shell booking-grid">
        {children}
        <div ref={formRef}>
          <BookingPanel
            copy={copy}
            locale={locale}
            tours={tours}
            selection={selection}
            initialTrip={initialTrip}
          />
        </div>
      </div>
    </>
  );
}
