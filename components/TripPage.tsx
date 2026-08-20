import Image from "next/image";
import Link from "next/link";
import { BookingSection } from "./BookingSection";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  MEETING_POINT,
  TOUR_PRICING,
  interfaceLabels,
} from "./SitePage";
import { content, locales, type Locale } from "@/lib/content";
import { guideContent } from "@/lib/guide-content";
import { approvedGalleryContent, approvedGalleryMedia } from "@/lib/gallery-content";
import { tripPageContent } from "@/lib/trip-content";
import {
  TRIP_SLUGS,
  TRIP_GALLERY,
  TRIP_FAQ_INDEXES,
  type TripId,
} from "@/lib/trip-pages";
import { siteUrl } from "@/lib/metadata";

const TOUR_MEDIA_HIGH_FRAME = new Set(["dimitrisNight", "sonNight"]);

const GALLERY_SRC = Object.fromEntries(
  approvedGalleryMedia.map((item) => [item.key, item.src]),
) as Record<string, string>;

export function TripPage({ locale, tripId }: { locale: Locale; tripId: TripId }) {
  const copy = content[locale];
  const guide = guideContent[locale];
  const gallery = approvedGalleryContent[locale];
  const tripCopy = tripPageContent[locale];
  const labels = interfaceLabels[locale];

  const trip = copy.tours.find((entry) => entry.id === tripId)!;
  const tripMeta = tripCopy.trips[tripId];
  const pricing = TOUR_PRICING[tripId];
  const galleryKeys = TRIP_GALLERY[tripId];
  const faqItems = TRIP_FAQ_INDEXES[tripId].map((index) => copy.faq.items[index]);
  const otherTrips = copy.tours.filter((entry) => entry.id !== tripId);
  const path = `/${locale}/trips/${TRIP_SLUGS[tripId]}`;

  const offerStructuredData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: trip.title,
    description: trip.description,
    url: `${siteUrl}${path}`,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: pricing.price,
      priceCurrency: "EUR",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: 1,
        unitText: pricing.unit,
      },
    },
    itemOffered: {
      "@type": "Service",
      name: trip.title,
      serviceType: "Fishing trip",
      provider: { "@type": "LocalBusiness", name: "Fishing 4 You" },
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Fishing 4 You", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: trip.title, item: `${siteUrl}${path}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <span className="top-anchor" id="top" aria-hidden="true" />

      <a className="skip-link" href="#main-content">
        {labels.skip}
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href={`/${locale}`} aria-label={labels.home}>
            <span className="brand-mark" aria-hidden="true">
              <Image src="/brand/f4y-logo-192.png" alt="" width={52} height={52} priority />
            </span>
            <span className="brand-copy">
              <strong>Fishing 4 You</strong>
              <small>Nikiti · Halkidiki</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href={`/${locale}#trips`}>{copy.nav.trips}</a>
            <a href={`/${locale}#guide`}>{guide.nav}</a>
            <a href={`/${locale}#story`}>{copy.nav.story}</a>
            <a href={`/${locale}#gallery`}>{copy.nav.gallery}</a>
            <a href={`/${locale}#faq`}>{copy.nav.faq}</a>
          </nav>

          <div className="header-actions">
            <details className="language-menu">
              <summary aria-label={labels.language}>
                {locale.toUpperCase()}
                <span aria-hidden="true">⌄</span>
              </summary>
              <div className="language-list">
                {locales.map((entry) => (
                  <Link
                    href={`/${entry}/trips/${TRIP_SLUGS[tripId]}`}
                    key={entry}
                    hrefLang={entry}
                    className={entry === locale ? "active" : undefined}
                    aria-current={entry === locale ? "page" : undefined}
                  >
                    <span>{entry.toUpperCase()}</span>
                    {content[entry].languageName}
                  </Link>
                ))}
              </div>
            </details>
            <a className="button button-small button-dark" href="#booking">
              {copy.nav.book}
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className={`trip-hero tour-${trip.tone}`}>
          <div className="shell trip-hero-inner">
            <Link className="trip-back" href={`/${locale}#trips`}>
              <span aria-hidden="true">←</span>
              {copy.nav.trips}
            </Link>

            <p className="tour-time">{trip.time}</p>
            <h1>{trip.title}</h1>
            <p className="trip-hero-duration">{trip.duration}</p>
            <p className="trip-hero-intro">{tripMeta.intro}</p>

            <ul className="trip-highlights">
              {trip.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a className="button button-cork" href="#booking">
              {copy.hero.primary}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section trip-section" id="unfold">
          <div className="shell">
            <div className="trip-section-heading">
              <p className="eyebrow eyebrow-dark">{tripCopy.unfoldEyebrow}</p>
              <h2>{tripCopy.unfoldTitle}</h2>
            </div>

            <div className="trip-stops">
              {(tripId === "cruise"
                ? tripCopy.cruiseStops
                : guide.journey
              ).map((step, index) => (
                <article className="trip-stop" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="shell checklist-panel trip-included" id="included">
          <div>
            <h3>{tripCopy.includedTitle}</h3>
            <p>{trip.description}</p>
          </div>
          <ul>
            {trip.highlights.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <section className="section trip-section" id="trip-gallery">
          <div className="shell">
            <div className="trip-section-heading">
              <p className="eyebrow eyebrow-dark">{tripCopy.galleryEyebrow}</p>
              <h2>{tripCopy.galleryTitle}</h2>
            </div>
            <div className="trip-gallery-grid">
              {galleryKeys.map((key) => (
                <figure
                  className={
                    TOUR_MEDIA_HIGH_FRAME.has(key)
                      ? "trip-gallery-card trip-gallery-card--high"
                      : "trip-gallery-card"
                  }
                  key={key}
                >
                  <Image
                    src={GALLERY_SRC[key]}
                    alt={gallery.items[key].alt}
                    fill
                    sizes="(max-width: 780px) 45vw, 30vw"
                  />
                  <figcaption>{gallery.items[key].caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section trip-section" id="trip-faq">
          <div className="shell faq-grid">
            <div className="faq-heading">
              <p className="eyebrow eyebrow-dark">{tripCopy.faqEyebrow}</p>
              <h2>{tripCopy.faqTitle}</h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.question}
                    <span className="faq-plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section booking-section" id="booking">
          <BookingSection
            copy={copy.booking}
            locale={locale}
            tours={copy.tours.map(({ id, title, time }) => ({ id, title, time }))}
            initialTrip={tripId}
          >
            <div className="booking-copy">
              <p className="eyebrow">{copy.booking.eyebrow}</p>
              <h2>{copy.booking.title}</h2>
              <p>{copy.booking.description}</p>
              <a className="phone-link" href={`tel:${PHONE_LINK}`}>
                <span>{copy.contact.phoneLabel}</span>
                {PHONE_DISPLAY}
              </a>
            </div>
          </BookingSection>
        </section>

        <section className="section trip-section" id="trip-other">
          <div className="shell">
            <div className="trip-section-heading">
              <p className="eyebrow eyebrow-dark">{tripCopy.otherTripsEyebrow}</p>
              <h2>{tripCopy.otherTripsTitle}</h2>
            </div>
            <div className="trip-other-grid">
              {otherTrips.map((other) => (
                <Link
                  className="trip-other-card"
                  href={`/${locale}/trips/${TRIP_SLUGS[other.id as TripId]}`}
                  key={other.id}
                >
                  <span className="tour-time">{other.time}</span>
                  <strong>{other.title}</strong>
                  <span className="trip-other-view">
                    {tripCopy.viewTrip}
                    <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-map-text" aria-hidden="true">
            NIKITI
          </div>
          <div className="shell contact-grid">
            <div>
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.description}</p>
            </div>
            <div className="contact-card">
              <div>
                <span>{copy.contact.locationLabel}</span>
                <strong>{copy.contact.location}</strong>
                <small>{copy.contact.meetingNote}</small>
              </div>
              <div>
                <span>{copy.contact.phoneLabel}</span>
                <a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a>
              </div>
              <div className="contact-buttons">
                <a
                  className="button button-whatsapp"
                  href={`https://wa.me/${PHONE_LINK.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.contact.whatsapp}
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="button button-viber"
                  href={`viber://chat?number=${encodeURIComponent(PHONE_LINK)}`}
                >
                  {copy.contact.viber}
                </a>
              </div>
              <a
                className="map-link"
                href={`https://www.google.com/maps?q=${MEETING_POINT.lat},${MEETING_POINT.lng}&z=17&hl=${locale}`}
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.6" fill="currentColor" />
                </svg>
                {copy.contact.map}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <Link className="brand brand-footer" href={`/${locale}`}>
            <span className="brand-mark" aria-hidden="true">
              <Image src="/brand/f4y-logo-192.png" alt="" width={52} height={52} />
            </span>
            <span className="brand-copy">
              <strong>Fishing 4 You</strong>
              <small>{copy.footer.tagline}</small>
            </span>
          </Link>
          <div className="footer-languages">
            {locales.map((entry) => (
              <Link href={`/${entry}/trips/${TRIP_SLUGS[tripId]}`} hrefLang={entry} key={entry}>
                {entry.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Fishing 4 You. {copy.footer.rights}</span>
          <span>
            <Link className="footer-privacy" href={`/${locale}/privacy`}>
              {copy.footer.privacy}
            </Link>
          </span>
          <span>{copy.footer.verified}</span>
          <span className="footer-credit">
            {labels.createdBy}{" "}
            <a href="https://pagolander.com/" target="_blank" rel="noreferrer">
              Pagolander
            </a>
          </span>
        </div>
      </footer>

      <a className="back-to-top" href="#top" aria-label={labels.backToTop}>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m6 14 6-6 6 6" />
        </svg>
      </a>

      <a
        className="mobile-whatsapp"
        href={`https://wa.me/${PHONE_LINK.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.contact.whatsapp}
      >
        <span className="pulse-dot" aria-hidden="true" />
        {copy.contact.whatsapp}
      </a>
    </>
  );
}
