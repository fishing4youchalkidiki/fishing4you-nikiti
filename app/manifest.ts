import type { MetadataRoute } from "next";

// Android's "Add to Home Screen" is the only thing this unlocks — the site
// has no offline behaviour and no service worker, and doesn't need one: a
// booking form needs the network regardless. iOS gets its icon from
// app/apple-icon.png instead; Android/Chrome only picks an icon up via this
// manifest, which is why it was still falling back to a page screenshot.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fishing 4 You — Nikiti, Halkidiki",
    short_name: "Fishing 4 You",
    start_url: "/en",
    display: "standalone",
    // The header/hero navy, not the cream page background — it's the first
    // colour a guest sees (splash background while the app loads, and the
    // Android status/task-switcher chrome), and it matches the logo's own
    // navy badge.
    background_color: "#061523",
    theme_color: "#061523",
    icons: [
      {
        src: "/brand/f4y-logo-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/f4y-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/f4y-icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
