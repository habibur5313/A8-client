import TourManagementHeader from "@/components/modules/Guides/TourManagement/TourManagementHeader";
import TourFilters from "@/components/modules/Guides/TourManagement/TourFilters";
import ToursTable from "@/components/modules/Guides/TourManagement/ToursTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getListings } from "@/services/guide/tourManagement";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Management | Travel Guide",
  description: "Tour Management | Travel Guide",
};

const TourManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const toursResult = await getListings(queryString);

  const totalPages = Math.ceil(
    (toursResult?.meta?.total || 1) / (toursResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <TourManagementHeader />
      <TourFilters />
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <ToursTable tours={toursResult.data} />
        <TablePagination
          currentPage={toursResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default TourManagementPage;
