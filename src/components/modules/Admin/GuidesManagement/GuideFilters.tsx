"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";

const GuideFilters = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search guides..." />
        <RefreshButton />
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <SelectFilter
          paramName="gender"
          placeholder="Gender"
          defaultValue="All Genders"
          options={[
            { label: "Male", value: "MALE" },
            { label: "Female", value: "FEMALE" },
          ]}
        />

        <SearchFilter paramName="email" placeholder="Email" />
        <SearchFilter paramName="contactNumber" placeholder="Contact" />

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default GuideFilters;
