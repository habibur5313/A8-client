
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { Suspense } from "react";
import MyBookingFilters from "@/components/modules/Tourist/MyBooking/MyBookingFilters";
import MyBookingsTable from "@/components/modules/Tourist/MyBooking/MyBookingsTable";
import {  getMyBookings } from "@/services/tourist/bookGuideManagement";

const MyBookingPage = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const bookingsResult = await getMyBookings(queryString);

  const totalPages = Math.ceil(
    (bookingsResult?.meta?.total || 1) / (bookingsResult?.meta?.limit || 1)
  );


  return (
    <div className="space-y-6">
      <MyBookingFilters />
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <MyBookingsTable bookings={bookingsResult.data} />
        <TablePagination
          currentPage={bookingsResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default MyBookingPage;