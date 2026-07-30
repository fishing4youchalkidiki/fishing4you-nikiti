import "../../globals.css";
import type { Metadata } from "next";
import { LocaleLayout } from "@/components/LocaleLayout";
import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata("el");

export default function GreekLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocaleLayout locale="el">{children}</LocaleLayout>;
}
