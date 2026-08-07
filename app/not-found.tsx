import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { locales } from "@/lib/content";
import { notFoundContent } from "@/lib/not-found-content";

export const metadata: Metadata = {
  title: "Fishing 4 You",
  // A 404 has nothing worth ranking, and letting it into the index would put a
  // dead end in search results next to the real pages.
  robots: { index: false, follow: true },
};

// Every locale route group carries its own root layout (components/LocaleLayout),
// because each has to set its own <html lang>. That leaves no root layout above
// this file, so it renders the whole document itself. lang="en" is a fallback
// only — the visible text below covers all five languages.
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="not-found">
          <span className="not-found-mark" aria-hidden="true">
            {/* priority, not lazy: this page renders outside the locale layouts
                and does not hydrate, so the IntersectionObserver that would
                trigger a lazy load never runs and the logo stays blank. */}
            <Image
              src="/brand/f4y-logo-192.png"
              alt=""
              width={72}
              height={72}
              priority
            />
          </span>

          <p className="not-found-brand">Fishing 4 You</p>

          <ul className="not-found-list">
            {locales.map((locale) => {
              const copy = notFoundContent[locale];

              return (
                <li key={locale} lang={locale}>
                  <h1>{copy.title}</h1>
                  <p>{copy.text}</p>
                  <Link href={`/${locale}`}>
                    {copy.link}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </main>
      </body>
    </html>
  );
}
