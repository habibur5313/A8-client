import TourDetailsClient from '@/components/modules/TourExperiences/TourDetails/TourDetailsClient';
import { getListingById } from '@/services/guide/tourManagement';

interface PageProps {
  params: { tourId: string };
}

export default async function TourDetailsPage({ params }: PageProps) {
  const { tourId } = await params;

  // Fetch tour data from server
  const tourResult = await getListingById(tourId);
  const tour = tourResult.data;

  return <TourDetailsClient tour={tour} />;
}
