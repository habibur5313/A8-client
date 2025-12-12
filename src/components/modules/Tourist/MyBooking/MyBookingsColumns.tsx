"use client";

import { DateCell } from "@/components/shared/cell/DateCell";
import { UserInfoCell } from "@/components/shared/cell/UserInfoCell";
import { Column } from "@/components/shared/ManagementTable";
import { IBooking } from "@/types/booking.interface";

export const bookingColumns: Column<IBooking>[] = [
  {
    header: "Tourist",
    accessor: (booking) => (
      <UserInfoCell
        name={booking.tourist?.name ?? "Unknown Tourist"}
        email={""}
        photo={booking.tourist?.profilePhoto ?? ""}
      />
    ),
  },
  {
    header: "Guide",
    accessor: (booking) => (
      <UserInfoCell
        name={booking.listing?.guide?.name ?? "Unknown Guide"}
        email={""}
        photo={booking.listing?.guide?.profilePhoto ?? ""}
      />
    ),
  },
  {
    header: "Tour",
    accessor: (booking) => (
      <div className="flex flex-col">
        <span className="font-medium">{booking.listing?.title ?? "N/A"}</span>
        <span className="text-xs text-muted-foreground">
          {booking.listing?.location ?? "N/A"}
        </span>
      </div>
    ),
    sortKey: "listing.title",
  },
  {
    header: "Price",
    accessor: (booking) => (
      <span>{booking.listing?.price ? `${booking.listing.price} BDT` : "N/A"}</span>
    ),
  },
  {
    header: "Booking Date",
    accessor: (booking) => <DateCell date={booking.createdAt} />,
    sortKey: "createdAt",
  },
];
