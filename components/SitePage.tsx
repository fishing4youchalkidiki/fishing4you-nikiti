import Image from "next/image";
import Link from "next/link";
import { BookingPanel } from "./BookingPanel";
import { FishingGuide } from "./FishingGuide";
import { content, locales, type Locale } from "@/lib/content";
import { guideContent } from "@/lib/guide-content";
import { siteUrl } from "@/lib/metadata";

const PHONE_DISPLAY = "+30 6974 139200";
const PHONE_LINK = "+306974139200";

// Prices are the same in every language, so they live here rather than being
// repeated across the five locale records. Dimitris confirmed all three:
// morning and night are per person, the barbecue cruise is a flat boat price
// whether one guest comes or ten.
// The meeting point Dimitris shares with guests. He sent it on 6 August 2026
// as a Maps pin; it is 358m south-east of the coordinates the site carried
// before. Kept as plain coordinates rather than his share link, which carries
// a session id that expires.
const MEETING_POINT = { lat: 40.216321, lng: 23.6653776 };

const TOUR_PRICING: Record<string, { price: number; unit: "person" | "boat" }> = {
  morning: { price: 40, unit: "person" },
  cruise: { price: 600, unit: "boat" },
  night: { price: 40, unit: "person" },
};
const interfaceLabels: Record<
  Locale,
  { skip: string; language: string; home: string; backToTop: string; createdBy: string }
> = {
  en: {
    skip: "Skip to content",
    language: "Select language",
    home: "Fishing 4 You home",
    backToTop: "Back to top",
    createdBy: "Created by",
  },
  el: {
    skip: "Μετάβαση στο περιεχόμενο",
    language: "Επιλογή γλώσσας",
    home: "Αρχική σελίδα Fishing 4 You",
    backToTop: "Επιστροφή στην κορυφή",
    createdBy: "Δημιουργήθηκε από",
  },
  ro: {
    skip: "Sari la conținut",
    language: "Selectează limba",
    home: "Pagina principală Fishing 4 You",
    backToTop: "Înapoi sus",
    createdBy: "Creat de",
  },
  ru: {
    skip: "Перейти к содержимому",
    language: "Выбрать язык",
    home: "Главная страница Fishing 4 You",
    backToTop: "Вернуться наверх",
    createdBy: "Создано",
  },
  de: {
    skip: "Zum Inhalt springen",
    language: "Sprache auswählen",
    home: "Fishing 4 You Startseite",
    backToTop: "Nach oben",
    createdBy: "Erstellt von",
  },
};

export function SitePage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const labels = interfaceLabels[locale];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fishing 4 You",
    description: copy.metaDescription,
    url: `${siteUrl}/${locale}`,
    telephone: PHONE_LINK,
    // priceRange is meant to be a coarse indicator, not a sentence. The old
    // "€40 per person" was also wrong once the cruise became €600 per boat.
    priceRange: "€40–€600",
    paymentAccepted: "Cash",
    currenciesAccepted: "EUR",
    image: `${siteUrl}/fishing4you-boat.webp`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nikiti",
      postalCode: "630 88",
      addressRegion: "Halkidiki",
      addressCountry: "GR",
    },
    // The postal address stays Nikiti — that is the summer berth. Nea Moudania
    // is the second base Dimitris works from, so it belongs in areaServed
    // rather than in the address.
    areaServed: [
      { "@type": "Place", name: "Nikiti, Halkidiki" },
      { "@type": "Place", name: "Nea Moudania, Halkidiki" },
      { "@type": "Place", name: "Sithonia, Halkidiki" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: MEETING_POINT.lat,
      longitude: MEETING_POINT.lng,
    },
    // Derived from the three departures the site already advertises: the first
    // leaves at 07:00 and the night trip returns at 00:30.
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "00:30",
    },
    // Without these the prices never reach the search result, however plainly
    // the page states them.
    makesOffer: copy.tours.map((tour) => {
      const pricing = TOUR_PRICING[tour.id];

      return {
        "@type": "Offer",
        name: tour.title,
        description: tour.description,
        url: `${siteUrl}/${locale}#trips`,
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: pricing.price,
          priceCurrency: "EUR",
          // "person" prices are per guest; the cruise is one price for the
          // whole boat, so the reference quantity says so explicitly.
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: 1,
            unitText: pricing.unit,
          },
        },
        itemOffered: {
          "@type": "Service",
          name: tour.title,
          serviceType: "Fishing trip",
          provider: { "@type": "LocalBusiness", name: "Fishing 4 You" },
        },
      };
    }),
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
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
            <a href="#trips">{copy.nav.trips}</a>
            <a href="#guide">{guideContent[locale].nav}</a>
            <a href="#story">{copy.nav.story}</a>
            <a href="#gallery">{copy.nav.gallery}</a>
            <a href="#faq">{copy.nav.faq}</a>
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
                    href={`/${entry}`}
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
        <section className="hero">
          <div className="hero-sea-lines" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                {copy.hero.eyebrow}
              </p>
              <h1>
                {copy.hero.title}
                <span>
                  {copy.hero.accent}
                  {/* Right after "the Aegean is waiting", where Dimitris
                      pointed on his phone screenshot. Inline inside the text
                      so it wraps onto whichever line ends up last, in every
                      language and at every width, instead of being pinned to
                      a fixed spot that only lines up by accident. */}
                  <svg
                    className="hero-buoy"
                    viewBox="0 0 100 100"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#f4761f" strokeWidth="16" />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="16"
                      strokeDasharray="20 39.69"
                      transform="rotate(30 50 50)"
                    />
                    <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                  </svg>
                </span>
              </h1>
              <p className="hero-description">{copy.hero.description}</p>
              <div className="hero-buttons">
                <a className="button button-cork" href="#booking">
                  {copy.hero.primary}
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#trips">
                  {copy.hero.secondary}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/fishing4you-boat.webp"
                  alt={copy.gallery.boatAlt}
                  fill
                  priority
                  fetchPriority="high"
                  quality={82}
                  sizes="(max-width: 780px) calc(100vw - 48px), (max-width: 1050px) 42vw, 520px"
                />
              </div>
              <div className="hero-stamp" aria-hidden="true">
                <Image
                  src="/brand/f4y-logo-192.png"
                  alt=""
                  width={104}
                  height={104}
                />
              </div>

              <div className="hero-local-note">
                <span className="pulse-dot" aria-hidden="true" />
                {copy.hero.localLabel}
              </div>
            </div>
          </div>

          <div className="shell facts-row">
            {copy.facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section trips-section" id="trips">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-dark">{copy.tripsSection.eyebrow}</p>
                <h2>{copy.tripsSection.title}</h2>
              </div>
              <p>{copy.tripsSection.intro}</p>
            </div>

            <div className="tour-grid">
              {copy.tours.map((tour) => (
                <article className={`tour-card tour-${tour.tone}`} key={tour.id}>
                  <div className="tour-topline">
                    <span>{tour.number}</span>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="tour-orbit" aria-hidden="true">
                    <span />
                  </div>
                  <div className="tour-content">
                    <p className="tour-time">{tour.time}</p>
                    <h3>{tour.title}</h3>
                    <p>{tour.description}</p>
                    <ul>
                      {tour.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <a href="#booking">
                      {copy.hero.primary}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="price-note">
              <span aria-hidden="true">i</span>
              {copy.tripsSection.priceNote}
            </p>
          </div>
        </section>

        {/* Dimitris' own three texts, in his words. Kept whole rather than
            summarised, because that is how he asked for them. */}
        <section className="section captain-section" id="captain">
          <div className="shell captain-grid">
            <div className="captain-lead">
              <p className="eyebrow">{copy.captain.eyebrow}</p>
              <h2>{copy.captain.title}</h2>
              <p className="captain-intro">{copy.captain.intro}</p>
              <ul className="captain-highlights">
                {copy.captain.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="captain-tagline">{copy.captain.tagline}</p>
            </div>

            <div className="captain-column">
              <article className="captain-block">
                <h3>{copy.captain.whyTitle}</h3>
                {copy.captain.whyParagraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </article>

              <article className="captain-block">
                <h3>{copy.captain.moreTitle}</h3>
                {copy.captain.moreParagraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                <p className="captain-guarantee">{copy.captain.guarantee}</p>
                <p className="captain-waiting">{copy.captain.waiting}</p>
              </article>
            </div>
          </div>
        </section>

        <FishingGuide locale={locale} />

        <section className="section story-section" id="story">
          <div className="shell story-grid">
            <div className="story-copy">
              <p className="eyebrow">{copy.story.eyebrow}</p>
              <h2>{copy.story.title}</h2>
              <p className="story-lead">{copy.story.description}</p>
              <blockquote>{copy.story.quote}</blockquote>
            </div>

            <div className="story-cards">
              <article>
                <span className="story-number">01</span>
                <h3>{copy.story.captainTitle}</h3>
                <p>{copy.story.captainText}</p>
              </article>
              <article>
                <span className="story-number">02</span>
                <h3>{copy.story.boatTitle}</h3>
                <p>{copy.story.boatText}</p>
              </article>
            </div>
          </div>

          <div className="shell reason-panel">
            <div className="reason-title">
              <span>F4Y</span>
              <h3>{copy.reasons.title}</h3>
            </div>
            <div className="reason-list">
              {copy.reasons.items.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="boat-gallery">
          <div className="shell">
            <div className="section-heading gallery-heading">
              <div>
                <p className="eyebrow eyebrow-dark">{copy.gallery.eyebrow}</p>
                <h2>{copy.gallery.title}</h2>
              </div>
              <p>{copy.gallery.note}</p>
            </div>

            <div className="gallery-grid">
              <figure className="gallery-boat">
                <Image
                  src="/fishing4you-boat.webp"
                  alt={copy.gallery.boatAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 66vw"
                />
                <figcaption>
                  <span>01</span>
                  {copy.gallery.boatCaption}
                </figcaption>
              </figure>
              <figure className="gallery-sign">
                <Image
                  src="/fishing4you-sign.jpg"
                  alt={copy.gallery.signAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 34vw"
                />
                <figcaption>
                  <span>02</span>
                  {copy.gallery.signCaption}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section booking-section" id="booking">
          <div className="shell booking-grid">
            <div className="booking-copy">
              <p className="eyebrow">{copy.booking.eyebrow}</p>
              <h2>{copy.booking.title}</h2>
              <p>{copy.booking.description}</p>
              <a className="phone-link" href={`tel:${PHONE_LINK}`}>
                <span>{copy.contact.phoneLabel}</span>
                {PHONE_DISPLAY}
              </a>
            </div>

            <BookingPanel
              copy={copy.booking}
              tours={copy.tours.map(({ id, title, time }) => ({ id, title, time }))}
            />
          </div>

          <div className="shell checklist-panel">
            <div>
              <h3>{copy.checklist.title}</h3>
              <p>{copy.checklist.description}</p>
            </div>
            <ul>
              {copy.checklist.items.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-grid">
            <div className="faq-heading">
              <p className="eyebrow eyebrow-dark">{copy.faq.eyebrow}</p>
              <h2>{copy.faq.title}</h2>
              <div className="faq-coordinate" aria-hidden="true">
                <span>AEGEAN SEA</span>
                <strong>40°13′</strong>
              </div>
            </div>
            <div className="faq-list">
              {copy.faq.items.map((item, index) => (
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
              <Link href={`/${entry}`} hrefLang={entry} key={entry}>
                {entry.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Fishing 4 You. {copy.footer.rights}</span>
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
