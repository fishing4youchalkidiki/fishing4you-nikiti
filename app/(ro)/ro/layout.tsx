import "../../globals.css";
import type { Metadata } from "next";
import { LocaleLayout } from "@/components/LocaleLayout";
import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata("ro");

export default function RomanianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocaleLayout locale="ro">{children}</LocaleLayout>;
}
