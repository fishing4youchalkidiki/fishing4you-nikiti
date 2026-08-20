import type { MetadataRoute } from "next";
import { locales } from "@/lib/content";
import { siteUrl } from "@/lib/metadata";
import { TRIP_IDS, TRIP_SLUGS } from "@/lib/trip-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}/${locale}`]),
  );
  languages["x-default"] = `${siteUrl}/en`;

  const privacyLanguages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}/${locale}/privacy`]),
  );
  privacyLanguages["x-default"] = `${siteUrl}/en/privacy`;

  return [
    // No lastModified: Next.js would stamp every entry with the moment the
    // site was built, not the moment each page's content actually changed.
    // Google only trusts lastmod "when it's consistently and verifiably
    // accurate" — a same-for-every-URL, resets-on-every-deploy date is
    // neither, and risks Google just discounting the field.
    // https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    ...locales.map((locale) => ({
      url: `${siteUrl}/${locale}`,
      priority: locale === "en" ? 1 : 0.9,
      alternates: { languages },
    })),
    // Just under the home pages: each is a real, differentiated page (its
    // own copy, gallery and FAQ subset), not a duplicate of #trips.
    ...TRIP_IDS.flatMap((tripId) => {
      const tripLanguages = Object.fromEntries(
        locales.map((locale) => [locale, `${siteUrl}/${locale}/trips/${TRIP_SLUGS[tripId]}`]),
      );
      tripLanguages["x-default"] = `${siteUrl}/en/trips/${TRIP_SLUGS[tripId]}`;

      return locales.map((locale) => ({
        url: `${siteUrl}/${locale}/trips/${TRIP_SLUGS[tripId]}`,
        priority: 0.8,
        alternates: { languages: tripLanguages },
      }));
    }),
    // Low priority on purpose: it should be findable and indexed, but it is
    // never what someone searching for a fishing trip wants to land on.
    ...locales.map((locale) => ({
      url: `${siteUrl}/${locale}/privacy`,
      priority: 0.2,
      alternates: { languages: privacyLanguages },
    })),
  ];
}
