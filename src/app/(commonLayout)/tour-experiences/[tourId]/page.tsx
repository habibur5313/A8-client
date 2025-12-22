import TourDetailsClient from "@/components/modules/TourExperiences/TourDetails/TourDetailsClient";
import { getListingById } from "@/services/guide/tourManagement";
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ tourId: string }>;
}) => {
  const { tourId } = await params;

  // Fetch tour data from server
  const tourResult = await getListingById(tourId);
  const tour = tourResult.data;

  return {
    title: `${tour?.title} | Travel Guide`,
    description: `${tour?.description} | Travel Guide`,
  };
};

interface PageProps {
  params: { tourId: string };
}

export default async function TourDetailsPage({ params }: PageProps) {
  const { tourId } = await params;

  // Fetch tour data from server
  const tourResult = await getListingById(tourId);
  const tour = tourResult.data;

  console.log(tour, "tour");

  return <div>
  <TourDetailsClient tour={tour} />
  </div>;
}
