import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  images: {
    /* Vercel bills a transformation per unique source+width+quality, and the
       defaults are far more than a five-section brochure needs: eight device
       widths and eight fixed widths, doubled by carrying a second quality for
       a single image. That ran to ~988 transformations a month against a
       5,000 limit, on 57 images.

       Three device widths cover phone, laptop and desktop; three fixed widths
       cover the only fixed-size images on the site, which are the 52, 72 and
       104px brand marks (each needs a 1x and a 2x). A width that is not
       listed rounds up to the next one, so dropping the in-between sizes
       costs a few KB, not correctness.

       Deliberately NOT unoptimized: f4y-icon-512.png is 524KB and renders at
       104px in six places, so turning optimisation off would trade a bounded
       transformation count for unbounded bandwidth on exactly the mobile
       connections this site is read on. */
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 128, 256],
    qualities: [75],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              // Next.js inlines its hydration payload and next/image writes inline
              // style attributes, so both need 'unsafe-inline' without a nonce.
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "media-src 'self'",
              "font-src 'self' data:",
              // Vercel Web Analytics and Speed Insights need no exception
              // here. Vercel serves both scripts from /_vercel/ on this same
              // origin and their beacons post back to the same path, so
              // 'self' already covers them.
              "connect-src 'self'",
              "form-action 'self'",
              "manifest-src 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
