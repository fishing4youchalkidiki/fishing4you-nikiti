import type { Metadata } from "next";
import { PrivacyPage } from "@/components/PrivacyPage";
import { privacyContent } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: privacyContent.ro.metaTitle,
  description: privacyContent.ro.metaDescription,
  alternates: { canonical: "/ro/privacy" },
};

export default function Privacy() {
  return <PrivacyPage locale="ro" />;
}
