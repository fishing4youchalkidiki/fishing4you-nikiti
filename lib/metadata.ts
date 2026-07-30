import type { Metadata } from "next";
import { content, locales, type Locale } from "./content";

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = getSiteUrl();

const openGraphLocales: Record<Locale, string> = {
  en: "en_GB",
  el: "el_GR",
  ro: "ro_RO",
  ru: "ru_RU",
  de: "de_DE",
};

export function makeMetadata(locale: Locale): Metadata {
  const copy = content[locale];
  const languageAlternates = Object.fromEntries(
    locales.map((entry) => [entry, `/${entry}`]),
  );

  return {
    metadataBase: new URL(siteUrl),
    title: copy.metaTitle,
    description: copy.metaDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...languageAlternates,
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((entry) => entry !== locale)
        .map((entry) => openGraphLocales[entry]),
      url: `/${locale}`,
      title: copy.metaTitle,
      description: copy.metaDescription,
      siteName: "Fishing 4 You Nikiti",
      images: [
        {
          url: "/og.png",
          width: 1730,
          height: 909,
          alt: "Fishing 4 You — authentic fishing trips in Nikiti",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: ["/og.png"],
    },
  };
}
