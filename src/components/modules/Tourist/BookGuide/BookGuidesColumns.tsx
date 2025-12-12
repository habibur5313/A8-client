"use client";

import { DateCell } from "@/components/shared/cell/DateCell";
import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";
import { UserInfoCell } from "@/components/shared/cell/UserInfoCell";
import { Column } from "@/components/shared/ManagementTable";
import { IBooking } from "@/types/booking.interface";

export const bookingColumns: Column<IBooking>[] = [
  {
    header: "Tourist",
    accessor: (booking) => (
      <UserInfoCell
        name={booking.tourist?.name}
        email={booking.tourist?.email}
        photo={booking.tourist?.profilePhoto}
      />
    ),
    sortKey: "tourist.name",
  },

  {
    header: "Guide",
    accessor: (booking) => (
      <UserInfoCell
        name={booking.guide?.name}
        email={booking.guide?.email}
        photo={booking.guide?.profilePhoto}
      />
    ),
    sortKey: "guide.name",
  },

  {
    header: "Booking Date",
    accessor: (booking) => <DateCell date={booking.bookingDate} />,
    sortKey: "bookingDate",
  },

  {
    header: "Status",
    accessor: (booking) => (
      <StatusBadgeCell isDeleted={booking.isDeleted}  />
    ),
  },

  {
    header: "Created At",
    accessor: (booking) => <DateCell date={booking.createdAt} />,
    sortKey: "createdAt",
  },
];
