# Fishing 4 You — Nikiti

Multilingual website for Fishing 4 You in Nikiti, Halkidiki.

## Included

- Next.js 16 with App Router and TypeScript
- English, Greek, Romanian, Russian and German routes
- Responsive one-page presentation
- Three fishing experiences
- WhatsApp booking-message builder
- Telephone, Viber and map actions
- Real boat and sign photography kept separate from labelled AI concept previews
- Premium photo-gallery concept and future-video placeholder
- Local SEO metadata, canonical and `hreflang` links
- JSON-LD, sitemap, robots and social preview image

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root redirects to `/en`.

## Verification

```bash
npm run lint
npm run build
```

## Vercel

Import the GitHub repository into Vercel. The standard Next.js settings are
detected automatically.

Set `NEXT_PUBLIC_SITE_URL` to the production URL, with no `www.` and no
trailing slash:

```text
https://fishing4younikiti.com
```

This is used for canonical URLs, `hreflang` links, the sitemap and social
metadata. Without it the build falls back to Vercel's generated URL, or to
`http://localhost:3000` locally — so it must be set before launch.

In Vercel, set `fishing4younikiti.com` as the primary domain and let `www`
redirect to it, so the canonical links never point at a redirecting host.

## Confirmed by Dimitris

- Morning fishing: equipment, bait, espresso coffee, water, juice for children
- Night fishing: equipment, bait, one beer per adult, juice for children
- Barbecue cruise stops: Spathies (swim), Neos Marmaras (about one hour ashore
  while the captain prepares traditional kakavia), then the Porto Carras coves,
  reachable only by boat
- Barbecue cruise food: fish, shrimp, salads, tzatziki, skordalia, feta, fried
  zucchini, Mantinia wine, soft drinks, beer, water
- Morning and night fishing are €40 per person

## Still to confirm before launch

- Whether the quoted €600 barbecue-program price is the total boat price
- Barbecue-program maximum group size
- Whether the shared Nikiti Marina location is the permanent meeting point
- Minimum age and child-safety conditions
- Boat's licensed passenger capacity
- Weather, cancellation and rescheduling policy
- Spoken languages and payment methods

Unconfirmed details use cautious wording on the site.

## Guest photo consent

`photo-review-for-dimitris/` and `website-photos-awaiting-dimitris-approval/`
hold original guest photos and are git-ignored on purpose — they must never be
committed or published. Only files Dimitris has approved are copied into
`public/real-trip/`, with faces blurred where he asked for it.
