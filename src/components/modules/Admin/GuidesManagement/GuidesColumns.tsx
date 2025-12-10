"use client";

import { DateCell } from "@/components/shared/cell/DateCell";
import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";
import { UserInfoCell } from "@/components/shared/cell/UserInfoCell";
import { Column } from "@/components/shared/ManagementTable";
import {  IGuideProfile } from "@/types/guide.interface";

export const guideColumns: Column<IGuideProfile>[] = [
  {
    header: "Guide",
    accessor: (guide) => (
      <UserInfoCell
        name={guide.name}
        email={guide.email}
        photo={guide?.profilePhoto}
      />
    ),
    sortKey: "name",
  },

  {
    header: "Contact",
    accessor: (guide) => (
      <div className="flex flex-col">
        <span className="text-sm">{guide.contactNumber || "N/A"}</span>
      </div>
    ),
  },

  {
    header: "District",
    accessor: (guide) => (
      <span className="text-sm">{guide.district || "N/A"}</span>
    ),
  },

  {
    header: "Experience",
    accessor: (guide) => (
      <span className="text-sm">
        {guide.experience ? `${guide.experience} Years` : "N/A"}
      </span>
    ),
    sortKey: "experience",
  },

  {
    header: "Languages",
    accessor: (guide) => (
      <div className="flex flex-wrap gap-1">
        {guide.languages?.length > 0 ? (
          guide.languages.map((lang) => (
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
    header: "Skills",
    accessor: (guide) => (
      <div className="flex flex-wrap gap-1">
        {guide.skills?.length > 0 ? (
          guide.skills?.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 bg-muted rounded-md border"
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-sm">N/A</span>
        )}
      </div>
    ),
  },

  {
    header: "Guide Fee",
    accessor: (guide) => (
      <span className="text-sm font-medium">
        {guide.guideFee ? `${guide.guideFee} BDT` : "N/A"}
      </span>
    ),
    sortKey: "guideFee",
  },

  {
    header: "Rating",
    accessor: (guide) => (
      <span className="text-sm">
        ⭐ {guide.averageRating?.toFixed(1) || 0} ({guide.totalReviews})
      </span>
    ),
    sortKey: "averageRating",
  },

  {
    header: "Status",
    accessor: (guide) => <StatusBadgeCell isDeleted={guide.isDeleted} />,
  },

  {
    header: "Joined",
    accessor: (guide) => <DateCell date={guide.createdAt} />,
    sortKey: "createdAt",
  },
];
