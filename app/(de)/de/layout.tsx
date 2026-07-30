import "../../globals.css";
import type { Metadata } from "next";
import { LocaleLayout } from "@/components/LocaleLayout";
import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata("de");

export default function GermanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocaleLayout locale="de">{children}</LocaleLayout>;
}
