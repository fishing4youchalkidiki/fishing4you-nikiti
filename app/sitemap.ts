import type { MetadataRoute } from "next";
import { locales } from "@/lib/content";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}/${locale}`]),
  );

  const privacyLanguages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}/${locale}/privacy`]),
  );

  return [
    ...locales.map((locale) => ({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: { languages },
    })),
    // Low priority on purpose: it should be findable and indexed, but it is
    // never what someone searching for a fishing trip wants to land on.
    ...locales.map((locale) => ({
      url: `${siteUrl}/${locale}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.2,
      alternates: { languages: privacyLanguages },
    })),
  ];
}
