import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TripPage } from "@/components/TripPage";
import { makeTripMetadata } from "@/lib/metadata";
import { TRIP_IDS, TRIP_SLUGS, tripIdForSlug } from "@/lib/trip-pages";

export function generateStaticParams() {
  return TRIP_IDS.map((id) => ({ trip: TRIP_SLUGS[id] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trip: string }>;
}): Promise<Metadata> {
  const { trip } = await params;
  const tripId = tripIdForSlug(trip);
  return tripId ? makeTripMetadata("el", tripId) : {};
}

export default async function GreekTripPage({
  params,
}: {
  params: Promise<{ trip: string }>;
}) {
  const { trip } = await params;
  const tripId = tripIdForSlug(trip);
  if (!tripId) notFound();

  return <TripPage locale="el" tripId={tripId} />;
}
