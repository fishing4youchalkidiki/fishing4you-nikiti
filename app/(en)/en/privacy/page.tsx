import type { Metadata } from "next";
import { PrivacyPage } from "@/components/PrivacyPage";
import { privacyContent } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: privacyContent.en.metaTitle,
  description: privacyContent.en.metaDescription,
  alternates: { canonical: "/en/privacy" },
};

export default function Privacy() {
  return <PrivacyPage locale="en" />;
}
