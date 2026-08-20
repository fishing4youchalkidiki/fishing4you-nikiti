import type { Metadata } from "next";
import { content, locales, type Locale } from "./content";
import { tripPageContent } from "./trip-content";
import { TRIP_SLUGS, type TripId } from "./trip-pages";

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
    // Google Search Console ownership. Rendered on every locale so verification
    // holds whichever URL Google fetches first.
    verification: {
      google: "mCmMIktZsmul-GLJad0_FHs8MZdcFam5CjxUSIpVBlw",
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
          url: "/og-brand.png",
          width: 1200,
          height: 630,
          alt: "Fishing 4 You — authentic fishing trips in Nikiti",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: ["/og-brand.png"],
    },
  };
}

/** Same shape as makeMetadata, for one trip's own detail page. */
export function makeTripMetadata(locale: Locale, tripId: TripId): Metadata {
  const trip = tripPageContent[locale].trips[tripId];
  const path = `/${locale}/trips/${TRIP_SLUGS[tripId]}`;
  const languageAlternates = Object.fromEntries(
    locales.map((entry) => [entry, `/${entry}/trips/${TRIP_SLUGS[tripId]}`]),
  );

  return {
    metadataBase: new URL(siteUrl),
    title: trip.metaTitle,
    description: trip.metaDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: path,
      languages: {
        ...languageAlternates,
        "x-default": `/en/trips/${TRIP_SLUGS[tripId]}`,
      },
    },
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((entry) => entry !== locale)
        .map((entry) => openGraphLocales[entry]),
      url: path,
      title: trip.metaTitle,
      description: trip.metaDescription,
      siteName: "Fishing 4 You Nikiti",
      images: [
        {
          url: "/og-brand.png",
          width: 1200,
          height: 630,
          alt: "Fishing 4 You — authentic fishing trips in Nikiti",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: trip.metaTitle,
      description: trip.metaDescription,
      images: ["/og-brand.png"],
    },
  };
}
