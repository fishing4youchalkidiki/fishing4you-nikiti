import Image from "next/image";
import Link from "next/link";
import { BookingPanel } from "./BookingPanel";
import { FishingGuide } from "./FishingGuide";
import { content, locales, type Locale } from "@/lib/content";
import { guideContent } from "@/lib/guide-content";
import { siteUrl } from "@/lib/metadata";

const PHONE_DISPLAY = "+30 6974 139200";
const PHONE_LINK = "+306974139200";
const interfaceLabels: Record<
  Locale,
  { skip: string; language: string; home: string }
> = {
  en: {
    skip: "Skip to content",
    language: "Select language",
    home: "Fishing 4 You home",
  },
  el: {
    skip: "Μετάβαση στο περιεχόμενο",
    language: "Επιλογή γλώσσας",
    home: "Αρχική σελίδα Fishing 4 You",
  },
  ro: {
    skip: "Sari la conținut",
    language: "Selectează limba",
    home: "Pagina principală Fishing 4 You",
  },
  ru: {
    skip: "Перейти к содержимому",
    language: "Выбрать язык",
    home: "Главная страница Fishing 4 You",
  },
  de: {
    skip: "Zum Inhalt springen",
    language: "Sprache auswählen",
    home: "Fishing 4 You Startseite",
  },
};

export const conceptMedia: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    videoLabel: string;
    videoTitle: string;
    videoText: string;
    photoLabel: string;
    captions: [string, string, string, string];
    disclaimer: string;
  }
> = {
  en: {
    eyebrow: "A preview of what comes next",
    title: "Your fishing stories, brought to life.",
    intro:
      "A premium gallery could turn real catches, sunsets and moments aboard into the strongest reason to book.",
    videoLabel: "Future trip film",
    videoTitle: "Your fishing video will play here",
    videoText: "Replace this preview with a short real film from a Fishing 4 You trip.",
    photoLabel: "Concept preview",
    captions: [
      "Your real catch photo will appear here",
      "Your barbecue cruise photo will appear here",
      "Your night fishing photo will appear here",
      "Your captain portrait will appear here",
    ],
    disclaimer:
      "The images in this preview are AI-created design concepts. They are not photos of Fishing 4 You guests and will be replaced with real media supplied by Dimitris.",
  },
  el: {
    eyebrow: "Μια προεπισκόπηση του επόμενου βήματος",
    title: "Οι ιστορίες ψαρέματος ζωντανεύουν.",
    intro:
      "Μια premium συλλογή μπορεί να μετατρέψει τα πραγματικά ψάρια, τα ηλιοβασιλέματα και τις στιγμές στο σκάφος στον καλύτερο λόγο για κράτηση.",
    videoLabel: "Μελλοντικό βίντεο εκδρομής",
    videoTitle: "Το βίντεο ψαρέματος θα εμφανίζεται εδώ",
    videoText:
      "Αντικαταστήστε αυτή την προεπισκόπηση με ένα σύντομο πραγματικό βίντεο από εκδρομή του Fishing 4 You.",
    photoLabel: "Ενδεικτική εικόνα",
    captions: [
      "Η πραγματική φωτογραφία της ψαριάς σας θα εμφανίζεται εδώ",
      "Η πραγματική φωτογραφία από το μπάρμπεκιου θα εμφανίζεται εδώ",
      "Η πραγματική φωτογραφία νυχτερινού ψαρέματος θα εμφανίζεται εδώ",
      "Το πραγματικό πορτρέτο του καπετάνιου θα εμφανίζεται εδώ",
    ],
    disclaimer:
      "Οι εικόνες αυτής της προεπισκόπησης είναι ενδεικτικές και δημιουργήθηκαν με AI. Δεν απεικονίζουν πελάτες του Fishing 4 You και θα αντικατασταθούν με πραγματικό υλικό του Δημήτρη.",
  },
  ro: {
    eyebrow: "O previzualizare a pasului următor",
    title: "Poveștile de pescuit prind viață.",
    intro:
      "O galerie premium poate transforma capturile reale, apusurile și momentele de la bord în cel mai bun motiv pentru rezervare.",
    videoLabel: "Viitorul film al excursiei",
    videoTitle: "Videoclipul tău de pescuit va rula aici",
    videoText:
      "Această previzualizare va fi înlocuită cu un film scurt și real dintr-o excursie Fishing 4 You.",
    photoLabel: "Previzualizare concept",
    captions: [
      "Fotografia ta reală cu captura va apărea aici",
      "Fotografia reală de la croaziera cu grătar va apărea aici",
      "Fotografia reală de la pescuitul nocturn va apărea aici",
      "Portretul real al căpitanului va apărea aici",
    ],
    disclaimer:
      "Imaginile din această previzualizare sunt concepte create cu AI. Nu reprezintă clienți Fishing 4 You și vor fi înlocuite cu materialele reale oferite de Dimitris.",
  },
  ru: {
    eyebrow: "Предварительный взгляд на следующий этап",
    title: "Истории о рыбалке оживают.",
    intro:
      "Премиальная галерея превратит реальные уловы, закаты и моменты на борту в лучший повод забронировать поездку.",
    videoLabel: "Будущий фильм о поездке",
    videoTitle: "Здесь будет ваше видео с рыбалки",
    videoText:
      "Эта демонстрация будет заменена коротким настоящим видео с прогулки Fishing 4 You.",
    photoLabel: "Демонстрационный концепт",
    captions: [
      "Здесь будет настоящее фото вашего улова",
      "Здесь будет настоящее фото круиза с барбекю",
      "Здесь будет настоящее фото ночной рыбалки",
      "Здесь будет настоящий портрет капитана",
    ],
    disclaimer:
      "Изображения в этом разделе — концепты, созданные с помощью ИИ. Это не фотографии гостей Fishing 4 You; их заменят настоящие материалы от Димитриса.",
  },
  de: {
    eyebrow: "Ein Ausblick auf den nächsten Schritt",
    title: "Ihre Angelgeschichten werden lebendig.",
    intro:
      "Eine hochwertige Galerie macht echte Fänge, Sonnenuntergänge und Momente an Bord zum besten Grund für eine Buchung.",
    videoLabel: "Künftiger Ausflugsfilm",
    videoTitle: "Hier wird Ihr Angelvideo abgespielt",
    videoText:
      "Diese Vorschau wird durch einen kurzen echten Film von einem Fishing-4-You-Ausflug ersetzt.",
    photoLabel: "Konzeptvorschau",
    captions: [
      "Hier erscheint Ihr echtes Fangfoto",
      "Hier erscheint Ihr echtes Foto von der Grillfahrt",
      "Hier erscheint Ihr echtes Foto vom Nachtangeln",
      "Hier erscheint das echte Porträt des Kapitäns",
    ],
    disclaimer:
      "Die Bilder in dieser Vorschau sind KI-erstellte Designkonzepte. Sie zeigen keine Gäste von Fishing 4 You und werden durch echtes Material von Dimitris ersetzt.",
  },
};

export const conceptPhotos = [
  {
    src: "/demo-concepts/successful-catch.png",
    className: "concept-catch",
  },
  {
    src: "/demo-concepts/barbecue-cruise.png",
    className: "concept-barbecue",
  },
  {
    src: "/demo-concepts/night-fishing.png",
    className: "concept-night",
  },
  {
    src: "/demo-concepts/captain-portrait.png",
    className: "concept-captain",
  },
] as const;

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
    priceRange: "€40 per person",
    image: `${siteUrl}/fishing4you-boat.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nikiti",
      postalCode: "630 88",
      addressRegion: "Halkidiki",
      addressCountry: "GR",
    },
    areaServed: {
      "@type": "Place",
      name: "Nikiti, Sithonia, Halkidiki",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.2183941,
      longitude: 23.6621463,
    },
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
                <span>{copy.hero.accent}</span>
              </h1>
              <p className="hero-description">{copy.hero.description}</p>
              <div className="hero-buttons">
                <a className="button button-accent" href="#booking">
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
                  src="/fishing4you-boat.png"
                  alt={copy.gallery.boatAlt}
                  fill
                  priority
                  quality={82}
                  sizes="(max-width: 780px) calc(100vw - 48px), (max-width: 1050px) 42vw, 520px"
                />
              </div>
              <div className="hero-stamp">
                <span>40°13′ N</span>
                <strong>F4Y</strong>
                <span>23°40′ E</span>
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
                  src="/fishing4you-boat.png"
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
                  className="button button-accent"
                  href={`https://wa.me/${PHONE_LINK.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.contact.whatsapp}
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="button button-outline"
                  href={`viber://chat?number=${encodeURIComponent(PHONE_LINK)}`}
                >
                  {copy.contact.viber}
                </a>
              </div>
              <a
                className="map-link"
                href="https://www.google.com/maps?q=40.2183941,23.6621463&z=17&hl=en"
                target="_blank"
                rel="noreferrer"
              >
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
        </div>
      </footer>

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
