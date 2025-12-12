"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";

const BookGuideFilters = () => {
  return (
    <div className="space-y-3">
      {/* Top row: search + refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search guides..." />
        <RefreshButton />
      </div>

      {/* Filter row: category, location, status */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* GUIDE CATEGORY FILTER */}
        <SelectFilter
          paramName="category"
          placeholder="Category"
          defaultValue="All Categories"
          options={[
            { label: "Adventure", value: "ADVENTURE" },
            { label: "Cultural", value: "CULTURAL" },
            { label: "Food", value: "FOOD" },
            { label: "Nature", value: "NATURE" },
            { label: "Photography", value: "PHOTOGRAPHY" },
          ]}
        />

        {/* LOCATION FILTER */}
        <SearchFilter paramName="district" placeholder="District" />

        {/* STATUS FILTER */}
        <SelectFilter
          paramName="status"
          placeholder="Status"
          defaultValue="All Status"
          options={[
            { label: "Active", value: "ACTIVE" },
            { label: "Inactive", value: "INACTIVE" },
          ]}
        />

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default BookGuideFilters;
