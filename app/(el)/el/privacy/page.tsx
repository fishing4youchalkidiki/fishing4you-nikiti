import type { Metadata } from "next";
import { PrivacyPage } from "@/components/PrivacyPage";
import { privacyContent } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: privacyContent.el.metaTitle,
  description: privacyContent.el.metaDescription,
  alternates: { canonical: "/el/privacy" },
};

export default function Privacy() {
  return <PrivacyPage locale="el" />;
}
