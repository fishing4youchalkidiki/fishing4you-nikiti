import type { GalleryKey } from "./gallery-content";

/**
 * English slugs on every locale (/el/trips/morning-fishing, not a translated
 * slug) — one canonical path per trip keeps hreflang alternates a straight
 * swap of the locale segment, with no per-language slug table to keep in
 * sync.
 */
export const TRIP_SLUGS = {
  morning: "morning-fishing",
  cruise: "fishing-cruise-barbecue",
  night: "night-fishing",
} as const;

export type TripId = keyof typeof TRIP_SLUGS;

export const TRIP_IDS = Object.keys(TRIP_SLUGS) as TripId[];

export function tripIdForSlug(slug: string): TripId | undefined {
  return TRIP_IDS.find((id) => TRIP_SLUGS[id] === slug);
}

/**
 * Photos for each trip's own gallery — a wider set than the 3-photo preview
 * already used on the home page cards (see TOUR_MEDIA in SitePage.tsx), but
 * drawn from the same approved, already-masked pool in gallery-content.ts.
 * No new photo ever needs approval just because a detail page exists.
 *
 * Night keeps to the three photos actually shot after dark (the same ones
 * SitePage.tsx uses) rather than padding the grid with daytime shots under a
 * "night fishing" heading.
 */
export const TRIP_GALLERY: Record<TripId, ReadonlyArray<GalleryKey>> = {
  morning: [
    "rigTogether",
    "guestFishing",
    "catchBucket",
    "youngAngler",
    "guestCatch",
    "guestTrophy",
  ],
  cruise: [
    "soup",
    "barbecuePlatter",
    "kelyfosTurquoise",
    "kelyfosCoast",
    "familySwim",
    "coveWide",
  ],
  night: ["guestsEveningRods", "dimitrisNight", "sonNight"],
};

/**
 * Which of the ten FAQ answers (lib/content.ts, copy.faq.items, index order
 * fixed across all five locales) belong on each trip's own page. Index 0
 * (the shared €40/€600 pricing note) and index 3 (what the cruise stops are)
 * are trip-specific by nature; the rest are filtered to what a guest
 * deciding on *this* trip would actually ask.
 *
 * Index 2 ("can I bring my own equipment?") only goes to morning and night —
 * the cruise's own highlights never mention equipment at all, matching how
 * index 1 (equipment included) was already excluded from cruise's set below.
 */
export const TRIP_FAQ_INDEXES: Record<TripId, readonly number[]> = {
  morning: [1, 2, 6, 7, 9],
  cruise: [3, 4, 6, 8],
  night: [1, 2, 6, 7, 9],
};
