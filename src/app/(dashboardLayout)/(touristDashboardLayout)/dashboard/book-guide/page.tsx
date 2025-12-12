
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { Suspense } from "react";
import { getBookings } from "@/services/tourist/bookGuideManagement";
import BookGuideFilters from "@/components/modules/Tourist/BookGuide/BookGuideFilters";
import BookGuidesTable from "@/components/modules/Tourist/BookGuide/BookGuidesTable";

const BookGuidePage = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const bookingsResult = await getBookings(queryString);

  const totalPages = Math.ceil(
    (bookingsResult?.meta?.total || 1) / (bookingsResult?.meta?.limit || 1)
  );

  console.log(bookingsResult)

  return (
    <div className="space-y-6">
      <BookGuideFilters />
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <BookGuidesTable bookings={bookingsResult.data} />
        <TablePagination
          currentPage={bookingsResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default BookGuidePage;