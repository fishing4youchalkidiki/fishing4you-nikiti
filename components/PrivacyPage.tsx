import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content";
import { privacyContent } from "@/lib/privacy-content";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const copy = privacyContent[locale];

  return (
    <main className="legal-page">
      <div className="shell legal-shell">
        <Link className="brand legal-brand" href={`/${locale}`}>
          <span className="brand-mark" aria-hidden="true">
            <Image
              src="/brand/f4y-logo-192.png"
              alt=""
              width={52}
              height={52}
              priority
            />
          </span>
          <span className="brand-copy">
            <strong>Fishing 4 You</strong>
          </span>
        </Link>

        <h1>{copy.title}</h1>
        <p className="legal-intro">{copy.intro}</p>
        <p className="legal-updated">{copy.updated}</p>

        {copy.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </section>
        ))}

        <Link className="button button-whatsapp legal-back" href={`/${locale}`}>
          {copy.back}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
