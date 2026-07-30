import "../../globals.css";
import type { Metadata } from "next";
import { LocaleLayout } from "@/components/LocaleLayout";
import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata("ru");

export default function RussianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocaleLayout locale="ru">{children}</LocaleLayout>;
}
