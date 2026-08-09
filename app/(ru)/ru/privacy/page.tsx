import type { Metadata } from "next";
import { PrivacyPage } from "@/components/PrivacyPage";
import { privacyContent } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: privacyContent.ru.metaTitle,
  description: privacyContent.ru.metaDescription,
  alternates: { canonical: "/ru/privacy" },
};

export default function Privacy() {
  return <PrivacyPage locale="ru" />;
}
