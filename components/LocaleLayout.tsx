import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Locale } from "@/lib/content";

export function LocaleLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={locale}>
      <body>
        {children}
        {/* Page views and field Core Web Vitals. Neither sets a cookie or a
            cross-site identifier, so the site still needs no consent banner.
            Vercel serves both scripts from /_vercel/ on this same origin, so
            the CSP needs no exception for either. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
