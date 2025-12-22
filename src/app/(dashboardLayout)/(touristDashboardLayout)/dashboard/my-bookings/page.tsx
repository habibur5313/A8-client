
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { Suspense } from "react";
import MyBookingFilters from "@/components/modules/Tourist/MyBooking/MyBookingFilters";
import MyBookingsTable from "@/components/modules/Tourist/MyBooking/MyBookingsTable";
import {  getMyBookings } from "@/services/tourist/bookGuideManagement";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Bookings | Travel Guide",
  description: "My Bookings | Travel Guide",
};

const MyBookingPage = async () => {

  const userInfo = await getUserInfo()
  const touristId = userInfo.profile.id

  const bookingsResult = await getMyBookings(touristId);

  const totalPages = Math.ceil(
    (bookingsResult?.meta?.total || 1) / (bookingsResult?.meta?.limit || 1)
  );

  // console.log(bookingsResult, userInfo)


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