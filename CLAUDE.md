# Fishing 4 You — working notes for Claude Code

Marketing site for a fishing-trip business in Nikiti/Halkidiki, Greece,
run by Dimitris. He speaks Greek and very little English, and reviews
every change through his agency (Romanian-speaking) via WhatsApp, usually
from his phone. Assume screenshots and requests are mobile-first.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind 4.
Five static locale routes: `app/(en)/en`, `(el)/el`, `(ro)/ro`, `(ru)/ru`,
`(de)/de`, plus `(root)` which redirects to `/en`. No CMS, no database —
all copy lives in typed `Record<Locale, ...>` objects in `lib/`.

## Content files

- `lib/content.ts` — hero, tours, story, captain section, gallery intro,
  booking, FAQ, contact, JSON-LD description text. ~1200 lines.
- `lib/guide-content.ts` — the "how to fish" / crew section.
- `lib/gallery-content.ts` — gallery media list + alt/caption text.

**Every new string needs all five locales**, in the same order the file
already uses (en, el, ro, ru, de). Missing a locale is a TypeScript error
by construction (`Record<Locale, SiteContent>`), so `tsc --noEmit` catches
it — always run it after editing content.

`lib/content.ts` is CRLF. A script-based edit that emits bare `\n` will
look fine in the diff tool but corrupt the file — normalize line endings
before writing, or edit by hand with the Edit tool instead.

## Colour and contrast

Every colour decision on this site is contrast-checked, not eyeballed.
Two gold tokens exist because gold is a light colour and one value cannot
read on both light and dark backgrounds:

- `--gold` (`#e8c86a`) — headings on navy backgrounds. 11.3:1 there, but
  drops to 1.6:1 on cream — invisible, not just low-contrast.
- `--gold-deep` (`#8a6a12`) — headings on cream/white backgrounds. 4.5–5:1.

Text ≥24px (or ≥18.66px at weight ≥700) only needs 3:1 (WCAG large-text
rule); smaller text needs 4.5:1. When adding a heading, check which rule
applies before picking a colour.

**Headings are not just `h1`–`h4`.** Several sub-headings in this codebase
are `<strong>` (journey steps, bite-guide titles) because that reads
better semantically than a deeply nested `h5`. A scan for un-gilded
headings needs to match on *appearance* (display font, weight ≥700,
uppercase, ≥14px), not on tag name, or it will miss them.

When changing a shared token like `--gold`, grep for every rule that sets
`color` on the target selectors — CSS is source-order-dependent, and a
generic gold rule earlier in the file loses silently to a specific
override later in the file (this happened twice: `.fact strong` and half
a dozen `figcaption`/`h3` rules each had their own hard-coded `color`
further down the file).

## Photos and consent

`public/real-trip/` holds only photos Dimitris has approved. Two
gitignored folders hold originals awaiting his approval and must never be
committed: `/photo-review-for-dimitris/`,
`/website-photos-awaiting-dimitris-approval/`.

Dimitris and his partner are crew and have standing consent to appear
unmasked. Everyone else — guests, their children, bystanders — needs
their face masked unless he explicitly names them as consenting.

Masking is **pixelate, then blur**, not just blur. A plain Gaussian blur
on a small crop can sometimes be reversed; shrinking to a handful of
pixels first and then blurring destroys the detail outright. See
`components/FishingGuide.tsx` (`crewMedia`) and `lib/gallery-content.ts`
(`approvedGalleryMedia`) for how masked photos are wired in, and the
scratchpad scripts referenced in commit `82a5fcf` for the sharp pipeline.

## Verification before every push

```bash
npx tsc --noEmit
npm run lint
npm run build
```

`next build` will reformat `tsconfig.json` and drop a `.next-verify/types`
reference — revert that with `git checkout -- tsconfig.json` if it's not
an intentional change, and delete `tsconfig.tsbuildinfo` if it causes
noise (already gitignored).

For visual changes, prefer testing against a production build
(`npm run build && npx next start -p <port>`) over `next dev` — dev mode
injects React error-overlay scripts that read as CSP violations and skew
performance measurements.

## Windows-specific gotchas

This repo has previously hit NTFS ownership issues (`.next` and `.git`
owned by a different Windows account than the one running the shell),
which surfaces as `EPERM: unlink` or `unable to write new index file`.
`git add -A --dry-run` does **not** prove `git add -A` will succeed —
dry-run never writes the index. If `git status` looks wrong after an
add, verify with a real (non-dry-run) add on a scratch file, not by
re-running the dry-run.

## Structured data

`components/SitePage.tsx` emits two JSON-LD blocks: `LocalBusiness`
(with `makesOffer` per trip, `areaServed`, `geo`) and `FAQPage`. Prices
and the meeting-point coordinates are the source of truth for both the
visible page and this JSON-LD — when either changes, update both in the
same commit; they should never disagree.

## Repo is public

`fishing4youchalkidiki/fishing4you-nikiti` on GitHub is public. Do not
commit phone numbers that turned out to be wrong, draft negotiation
notes, or anything from the client relationship that isn't meant for
public view — that kind of working note belongs in `STATUS.md`
(gitignored) or in conversation, not in a commit.
