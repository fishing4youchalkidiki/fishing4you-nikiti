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

Set `NEXT_PUBLIC_SITE_URL` to the final production URL, for example:

```text
https://your-domain.com
```

This is used for canonical URLs, sitemap links and social metadata. Vercel's
production URL is used automatically when the custom value is not set.

## Content to confirm before launch

- Whether the quoted €600 barbecue-program price is the total boat price
- Barbecue-program hours, maximum group size and exact inclusions
- Whether bait is included with the confirmed fishing equipment
- Food and drinks included
- Whether the shared Nikiti Marina location is the permanent meeting point
- Minimum age and child-safety conditions
- Boat's licensed passenger capacity
- Weather, cancellation and rescheduling policy
- Spoken languages and payment methods

Morning and evening fishing are currently presented at €40 per person, with
equipment included, based on information shared directly by Dimitris. Other
unconfirmed details use cautious wording.
