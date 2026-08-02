import Image from "next/image";
import { guideContent } from "@/lib/guide-content";
import type { Locale } from "@/lib/content";

export function FishingGuide({ locale }: { locale: Locale }) {
  const guide = guideContent[locale];
  const showFamilyMedia = false;
  const familyMedia = [
    {
      number: "07",
      src: "/real-trip/dimitris-catch.webp",
      alt: guide.dimitrisAlt,
      caption: guide.dimitrisCaption,
      className: "family-media-card-lead",
    },
    {
      number: "08",
      src: "/real-trip/dimitris-wife-catch.webp",
      alt: guide.wifeCatchAlt,
      caption: guide.wifeCatchCaption,
      className: "family-media-card-wife-catch",
    },
    {
      number: "09",
      src: "/real-trip/dimitris-wife-helm.webp",
      alt: guide.wifeHelmAlt,
      caption: guide.wifeHelmCaption,
      className: "family-media-card-helm",
    },
    {
      number: "10",
      src: "/real-trip/dimitris-son.webp",
      alt: guide.sonAlt,
      caption: guide.sonCaption,
      className: "family-media-card-son",
    },
    {
      number: "11",
      src: "/real-trip/dimitris-dogs.webp",
      alt: guide.dogsAlt,
      caption: guide.dogsCaption,
      className: "family-media-card-dogs",
    },
  ];

  return (
    <>
      <section className="section guide-section" id="guide">
        <div className="shell">
          <div className="section-heading guide-heading">
            <div>
              <p className="eyebrow">{guide.eyebrow}</p>
              <h2>{guide.title}</h2>
            </div>
            <p>{guide.intro}</p>
          </div>

          <div className="journey-block">
            <div className="journey-title-row">
              <h3>{guide.journeyTitle}</h3>
              <span aria-hidden="true">F4Y / 01</span>
            </div>
            <ol className="journey-list">
              {guide.journey.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
            <p className="weather-note">
              <span aria-hidden="true">≈</span>
              {guide.weather}
            </p>
          </div>

          <div className="technique-grid">
            <article className="rig-card">
              <div className="rig-copy">
                <span>F4Y / 02</span>
                <h3>{guide.rigTitle}</h3>
                <p>{guide.rigIntro}</p>
              </div>

              <div className="rig-illustration" role="img" aria-label={guide.rigAria}>
                <svg viewBox="0 0 520 590" aria-hidden="true">
                  <defs>
                    <linearGradient id="rig-water" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#1f7ca2" stopOpacity="0.2" />
                      <stop offset="1" stopColor="#061523" stopOpacity="0.78" />
                    </linearGradient>
                    <linearGradient id="rig-sand" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#d4b185" />
                      <stop offset="1" stopColor="#efcf9f" />
                    </linearGradient>
                  </defs>

                  <rect x="0" y="0" width="520" height="590" rx="28" fill="url(#rig-water)" />
                  <path
                    d="M0 502 C82 474 144 530 232 504 C318 478 402 514 520 486 L520 590 L0 590 Z"
                    fill="url(#rig-sand)"
                  />
                  <path d="M260 0 L260 470" stroke="#f7fbff" strokeWidth="4" />
                  <path d="M260 262 C222 270 206 292 206 324" stroke="#f7fbff" strokeWidth="3" fill="none" />
                  <path
                    d="M206 324 C206 362 252 360 246 324 C243 306 231 300 222 300"
                    stroke="#ff6833"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M184 278 C156 267 138 279 144 301 C150 323 181 329 211 310 C196 309 185 301 184 278 Z"
                    fill="#ffc98a"
                  />
                  <path d="M147 292 C128 286 116 294 108 305" stroke="#ffc98a" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="174" cy="286" r="4" fill="#061523" />
                  <path
                    d="M260 430 C236 448 234 482 260 499 C286 482 284 448 260 430 Z"
                    fill="#ff6833"
                  />
                  <circle cx="260" cy="430" r="7" fill="#f7fbff" />

                  <g fill="#b9d9e2">
                    <circle cx="80" cy="116" r="4" />
                    <circle cx="430" cy="186" r="5" />
                    <circle cx="382" cy="356" r="3" />
                    <circle cx="95" cy="420" r="5" />
                  </g>
                </svg>

                <div className="rig-label rig-label-line">{guide.rigLabels.line}</div>
                <div className="rig-label rig-label-hook">{guide.rigLabels.hook}</div>
                <div className="rig-label rig-label-bait">{guide.rigLabels.bait}</div>
                <div className="rig-label rig-label-sinker">{guide.rigLabels.sinker}</div>
                <div className="rig-label rig-label-seabed">{guide.rigLabels.seabed}</div>
              </div>
            </article>

            <article className="steps-card">
              <p className="eyebrow">{guide.stepsEyebrow}</p>
              <h3>{guide.stepsTitle}</h3>
              <ol>
                {guide.steps.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <div className="bite-guide">
            <div className="bite-guide-heading">
              <span aria-hidden="true">F4Y / 03</span>
              <h3>{guide.biteTitle}</h3>
            </div>
            <article className="bite-card bite-card-nibble">
              <div className="bite-wave" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <strong>{guide.nibbleTitle}</strong>
              <p>{guide.nibbleText}</p>
            </article>
            <article className="bite-card bite-card-pull">
              <div className="bite-wave" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <strong>{guide.pullTitle}</strong>
              <p>{guide.pullText}</p>
            </article>
            <p className="bait-check">{guide.baitCheck}</p>
          </div>

          <div className="guide-notes">
            <p>
              <span aria-hidden="true">i</span>
              {guide.catchNote}
            </p>
            <p>
              <span aria-hidden="true">!</span>
              {guide.safetyNote}
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="section real-media-section" aria-labelledby="real-media-title">
        <div className="shell">
          <div className="section-heading real-media-heading">
            <div>
              <p className="eyebrow eyebrow-dark">{guide.mediaEyebrow}</p>
              <h2 id="real-media-title">{guide.mediaTitle}</h2>
            </div>
            <p>{guide.mediaIntro}</p>
          </div>

          <div className="real-media-grid">
            <figure className="real-video-card">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/real-trip/rods-at-sea.jpg"
                aria-label={guide.videoTitle}
              >
                <source src="/real-trip/leaving-nikiti.mp4" type="video/mp4" />
                {guide.videoFallback}
              </video>
              <figcaption>
                <span>01</span>
                <div>
                  <strong>{guide.videoTitle}</strong>
                  <p>{guide.videoCaption}</p>
                </div>
              </figcaption>
            </figure>

            <figure className="real-photo-card real-photo-equipment">
              <Image
                src="/real-trip/equipment-ready.jpg"
                alt={guide.equipmentAlt}
                fill
                sizes="(max-width: 780px) calc(100vw - 30px), 36vw"
              />
              <figcaption>
                <span>02</span>
                {guide.equipmentCaption}
              </figcaption>
            </figure>

            <figure className="real-photo-card real-photo-coast">
              <Image
                src="/real-trip/nikiti-from-sea.jpg"
                alt={guide.coastAlt}
                fill
                sizes="(max-width: 780px) calc(100vw - 30px), 36vw"
              />
              <figcaption>
                <span>03</span>
                {guide.coastCaption}
              </figcaption>
            </figure>
          </div>

          <div className="trip-highlights-grid">
            <figure className="real-photo-card trip-highlight-card trip-highlight-rods">
              <Image
                src="/real-trip/rods-ready.webp"
                alt={guide.rodsAlt}
                fill
                sizes="(max-width: 780px) calc(100vw - 30px), (max-width: 1050px) 48vw, 31vw"
              />
              <figcaption>
                <span>04</span>
                {guide.rodsCaption}
              </figcaption>
            </figure>

            <figure className="real-photo-card trip-highlight-card trip-highlight-catch">
              <Image
                src="/real-trip/catch-table.webp"
                alt={guide.catchAlt}
                fill
                sizes="(max-width: 780px) calc(100vw - 30px), (max-width: 1050px) 48vw, 31vw"
              />
              <figcaption>
                <span>05</span>
                {guide.catchCaption}
              </figcaption>
            </figure>

            <figure className="real-video-card real-video-card-compact">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/real-trip/dolphins-poster.webp"
                aria-label={guide.dolphinTitle}
              >
                <source src="/real-trip/dolphins.mp4" type="video/mp4" />
                {guide.videoFallback}
              </video>
              <figcaption>
                <span>06</span>
                <div>
                  <strong>{guide.dolphinTitle}</strong>
                  <p>{guide.dolphinCaption}</p>
                </div>
              </figcaption>
            </figure>
          </div>

          {showFamilyMedia && (
            <>
              <div id="family" className="family-media-heading">
                <p className="eyebrow eyebrow-dark">{guide.familyEyebrow}</p>
                <div>
                  <h3>{guide.familyTitle}</h3>
                  <p>{guide.familyIntro}</p>
                </div>
              </div>

              <div className="family-media-grid">
                {familyMedia.map((item) => (
                  <figure
                    className={`real-photo-card family-media-card ${item.className}`}
                    key={item.src}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 780px) calc(100vw - 30px), (max-width: 1050px) 48vw, 31vw"
                    />
                    <figcaption>
                      <span>{item.number}</span>
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
