import TourDetailsClient from "@/components/modules/TourExperiences/TourDetails/TourDetailsClient";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getListingById } from "@/services/guide/tourManagement";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Details | Travel Guide",
  description: "Tour Details | Travel Guide",
};

interface PageProps {
  params: { tourId: string };
}

export default async function TourDetailsPage({ params }: PageProps) {
  const { tourId } = await params;

  const userinfo = await getUserInfo();

  // If user not logged in → redirect to login with callback
  if (!userinfo.id) {
    redirect(`/login`);
  }

  // Fetch tour data from server
  const tourResult = await getListingById(tourId);
  const tour = tourResult.data;

  return <TourDetailsClient tour={tour} />;
}
