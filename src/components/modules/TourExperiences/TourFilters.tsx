"use client";

import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";

const listingCategories = [ "Food", "Adventure", "Culture", "Photography", "Nature", ];


const TourFilters = () => {
  return (
    <div className="space-y-3">
      {/* Search + Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter
          paramName="searchTerm"
          placeholder="Search by title, description or location..."
        />
        <RefreshButton />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <SelectFilter
          paramName="category"
          placeholder="Category"
          defaultValue="All Categories"
          options={listingCategories.map((cat) => ({
            label: cat,
            value: cat,
          }))}
        />

        <SearchFilter paramName="location" placeholder="Location" />

        <SearchFilter
          paramName="minPrice"
          placeholder="Min Price"
        />

        <SearchFilter
          paramName="maxPrice"
          placeholder="Max Price"
        />

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default TourFilters;
