import type { ReactNode } from "react";
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
      <body>{children}</body>
    </html>
  );
}
