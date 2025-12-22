"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";

const genderOptions = ["Male", "Female"];

const GuidesFilters = () => {
  return (
    <div className="space-y-3">
      {/* Search + Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter
          paramName="searchTerm"
          placeholder="Search by name, designation or qualification..."
        />
        <RefreshButton />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <SelectFilter
          paramName="gender"
          placeholder="Gender"
          defaultValue="All"
          options={genderOptions.map((gender) => ({
            label: gender,
            value: gender,
          }))}
        />

        <SearchFilter
          paramName="email"
          placeholder="Email"
        />

        <SearchFilter
          paramName="contactNumber"
          placeholder="Contact Number"
        />

        <SearchFilter
          paramName="specialties"
          placeholder="Specialties"
        />

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default GuidesFilters;
