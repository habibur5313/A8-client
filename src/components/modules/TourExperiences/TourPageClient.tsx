"use client";

import { useState } from "react";
import { FilterSidebar } from "@/components/modules/TourExperiences/FilterSidebar";
import { SearchBar } from "@/components/modules/TourExperiences/Searchbar";
import { TourCard, Tour } from "@/components/modules/TourExperiences/TourCard";

export default function TourPageClient({
  tours,
  totalPages,
}: {
  tours: Tour[];
  totalPages: number;
}) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <SearchBar onMobileFilterClick={() => setIsMobileFilterOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-8">
          <FilterSidebar
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
          />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-stone-900">
                Explore Experiences
                <span className="ml-3 text-sm font-normal text-stone-500">
                  {tours?.length || 0} results found
                </span>
              </h1>

              <div className="hidden md:flex items-center space-x-2 text-sm text-stone-600">
                <span>Sort by:</span>
                <select className="bg-transparent font-semibold text-stone-900 focus:outline-none cursor-pointer">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Tours List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map((tour: Tour, index: number) => (
                <TourCard key={tour.id} tour={tour} index={index} />
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 bg-white border border-stone-200 rounded-full text-stone-600 font-medium hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm">
                Load More Experiences
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
