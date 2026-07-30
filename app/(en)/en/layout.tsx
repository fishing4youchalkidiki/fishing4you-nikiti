import "../../globals.css";
import type { Metadata } from "next";
import { LocaleLayout } from "@/components/LocaleLayout";
import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata("en");

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocaleLayout locale="en">{children}</LocaleLayout>;
}
