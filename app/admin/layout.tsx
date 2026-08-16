import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fishing 4 You — Κρατήσεις",
  // Dimitris' own working page. It has nothing for a search engine and
  // everything for a competitor.
  robots: { index: false, follow: false },
};

/**
 * Greek only, on purpose. Dimitris is the only person who will ever open this,
 * and the booking email he receives is Greek for the same reason — five
 * translations of a private tool would be five things to keep in step for no
 * reader. The locale route groups do not cover /admin, so this supplies its
 * own html/body the way the 404 page does.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
