// app/tour-experiences/page.tsx (Server Component)
import TourPageClient from "@/components/modules/TourExperiences/TourPageClient";
import { queryStringFormatter } from "@/lib/formatters";
import { getListings } from "@/services/guide/tourManagement";

export default async function TourPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const toursResult = await getListings(queryString);

  const totalPages = Math.ceil(
    (toursResult?.meta?.total || 1) / (toursResult?.meta?.limit || 1)
  );

  return (
    <TourPageClient tours={toursResult?.data || []} totalPages={totalPages} />
  );
}
