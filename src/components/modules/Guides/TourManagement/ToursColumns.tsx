"use client";

import { DateCell } from "@/components/shared/cell/DateCell";
import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";
import { Column } from "@/components/shared/ManagementTable";
import { ITour } from "@/types/tour.interface"; // create a tour.interface.ts for your tour type

export const tourColumns: Column<ITour>[] = [
  {
    header: "Title",
    accessor: (tour) => (
      <span className="text-sm font-medium">{tour.title}</span>
    ),
    sortKey: "title",
  },

  {
    header: "Location",
    accessor: (tour) => (
      <span className="text-sm">{tour.location || "N/A"}</span>
    ),
  },

  {
    header: "Category",
    accessor: (tour) => (
      <span className="text-sm">{tour.category || "N/A"}</span>
    ),
  },

  {
    header: "Price",
    accessor: (tour) => (
      <span className="text-sm font-medium">
        {tour.price ? `${tour.price} BDT` : "N/A"}
      </span>
    ),
    sortKey: "price",
  },

  {
    header: "Max Group Size",
    accessor: (tour) => (
      <span className="text-sm">{tour.maxGroupSize || "N/A"}</span>
    ),
  },

  {
    header: "Duration",
    accessor: (tour) => (
      <span className="text-sm">{tour.duration || "N/A"}</span>
    ),
  },

  {
    header: "Language",
    accessor: (tour) => (
      <div className="flex flex-wrap gap-1">
        {tour.language && tour.language?.length > 0 ? (
          tour.language.map((lang) => (
            <span
              key={lang}
              className="text-xs px-2 py-0.5 bg-muted rounded-md border"
            >
              {lang}
            </span>
          ))
        ) : (
          <span className="text-sm">N/A</span>
        )}
      </div>
    ),
  },

  {
    header: "Status",
    accessor: (tour) => <StatusBadgeCell isDeleted={tour.isDeleted} />,
  },

  {
    header: "Created At",
    accessor: (tour) => <DateCell date={tour.createdAt} />,
    sortKey: "createdAt",
  },
];
