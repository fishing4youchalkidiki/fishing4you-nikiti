import type { Metadata } from "next";
import { PrivacyPage } from "@/components/PrivacyPage";
import { privacyContent } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: privacyContent.de.metaTitle,
  description: privacyContent.de.metaDescription,
  alternates: { canonical: "/de/privacy" },
};

export default function Privacy() {
  return <PrivacyPage locale="de" />;
}
