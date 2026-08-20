import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // JSON endpoints, not content — nothing here is ever meant to rank.
      // /admin is already excluded via its own noindex, follow: false
      // metadata (app/admin/layout.tsx), which is the stronger signal since
      // it still lets a crawler see and drop a page it reached by an
      // external link; disallowing it here on top would only block that.
      disallow: "/api/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
