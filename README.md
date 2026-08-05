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
https://fishing4youchalkidiki.com
```

This is used for canonical URLs, `hreflang` links, the sitemap and social
metadata. Without it the build falls back to Vercel's generated URL — which
is how the live site briefly advertised itself as `fishing4you-nikiti.vercel.app`
in every canonical tag and sitemap entry.

`fishing4youchalkidiki.com` is the primary domain; `www` and the `.vercel.app`
host both 308-redirect to it, so canonical links never point at a redirecting
host.

## Confirmed by Dimitris

- Morning and night fishing are €40 per person
- Morning fishing: equipment, bait, espresso coffee, water, juice for children
- Night fishing: equipment, bait, one beer per adult, juice for children
- **The barbecue cruise is priced per boat, not per person: €600 flat for
  11:30–18:30, for up to 10 guests.** One guest or ten, it is €600. The boat
  may not carry more than 10 people; larger groups have to ask Dimitris.
- Barbecue cruise stops: Spathies (swim), Neos Marmaras (about one hour ashore
  while the captain prepares traditional kakavia), then the Porto Carras coves,
  reachable only by boat
- Barbecue cruise food: fish, shrimp, salads, tzatziki, skordalia, feta, fried
  zucchini, Mantinia wine, soft drinks, beer, water
- Payment is in cash

- Kelyfos island is the fourth and last stop of the barbecue cruise
- If the day does not work out the money is returned; a booking can be
  cancelled free of charge up to 5 hours before departure
- Life jackets are on board. No minimum age, but under-16s need an adult
- Nikiti Marina is the summer berth, not a fixed address. The boat moves with
  the season, so Dimitris sends the live location on WhatsApp before each
  departure. The Nikiti address stays in the contact card and the JSON-LD
  because that is where he is during the tourist season.

## Not on the site yet

Dimitris also runs winter tuna trips from a different base, at different
prices. He will send the details when he wants them published.

## Languages

Dimitris speaks Greek and very little English. He answers WhatsApp messages
in any language using Google Translate, which is why the site keeps the
booking flow to a single prefilled message rather than a conversation.

## Still to confirm

- Where his existing reviews are (he says there are a few)
- Registered company name, address and ΑΦΜ, needed for the legal page and
  for Google Business Profile

Unconfirmed details use cautious wording on the site.

## Guest photo consent

`photo-review-for-dimitris/` and `website-photos-awaiting-dimitris-approval/`
hold original guest photos and are git-ignored on purpose — they must never be
committed or published. Only files Dimitris has approved are copied into
`public/real-trip/`, with faces blurred where he asked for it.
