"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";

const TourFilters = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search tours..." />
        <RefreshButton />
      </div>

      <div className="flex items-center gap-3 flex-wrap">

        {/* TOUR CATEGORY FILTER */}
        <SelectFilter
          paramName="category"
          placeholder="Category"
          defaultValue="All Categories"
          options={[
            { label: "Adventure", value: "ADVENTURE" },
            { label: "Cultural", value: "CULTURAL" },
            { label: "Historical", value: "HISTORICAL" },
            { label: "Nature", value: "NATURE" },
            { label: "City Tour", value: "CITY" },
          ]}
        />

        {/* LOCATION FILTER */}
        <SearchFilter paramName="location" placeholder="Location" />

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

export default TourFilters;
