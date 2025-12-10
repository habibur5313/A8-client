"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { TopBar } from '@/components/modules/Tourist/BookGuide/Topbar';
import { GuideCard } from '@/components/modules/Tourist/BookGuide/GuideCard';
import { FilterSidebar } from '@/components/modules/Tourist/BookGuide/FillterSidebar';
import { MOCK_GUIDES } from '@/fakedata/mockGuides';
import TablePagination from '@/components/shared/TablePagination';
const ITEMS_PER_PAGE = 6;
export default function BookGuidePage() {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    city: '',
    categories: [] as string[],
    priceRange: [0, 200] as [number, number],
    languages: [] as string[],
    minRating: 0
  });
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  // Filter & Sort Logic
  const filteredGuides = useMemo(() => {
    const result = MOCK_GUIDES.filter(guide => {
      // Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = guide.name.toLowerCase().includes(query);
        const matchesBio = guide.bio.toLowerCase().includes(query);
        const matchesLocation = guide.location.toLowerCase().includes(query);
        if (!matchesName && !matchesBio && !matchesLocation) return false;
      }
      // Filters
      if (filters.city && !guide.location.includes(filters.city)) return false;
      if (filters.categories.length > 0 && !filters.categories.includes(guide.category)) return false;
      if (guide.pricePerHour < filters.priceRange[0] || guide.pricePerHour > filters.priceRange[1]) return false;
      if (filters.languages.length > 0) {
        const hasLanguage = filters.languages.some(lang => guide.languages.includes(lang));
        if (!hasLanguage) return false;
      }
      if (guide.rating < filters.minRating) return false;
      return true;
    });
    // Sort
    return result.sort((a, b) => {
      switch (sortOption) {
        case 'price_low':
          return a.pricePerHour - b.pricePerHour;
        case 'price_high':
          return b.pricePerHour - a.pricePerHour;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
        default:
          return b.reviewCount - a.reviewCount;
      }
    });
  }, [searchQuery, sortOption, filters]);
  // Pagination Logic
  const totalPages = Math.ceil(filteredGuides.length / ITEMS_PER_PAGE);
  const currentGuides = filteredGuides.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <FilterSidebar 
            filters={filters}
            setFilters={setFilters}
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
            resultCount={filteredGuides.length}
          />
          {/* Main Content */}
          <div className="flex-1">
            <TopBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortOption={sortOption}
              setSortOption={setSortOption}
              totalResults={filteredGuides.length}
              onMobileFilterClick={() => setIsMobileFilterOpen(true)}
            />
            {currentGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentGuides.map(guide => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                <h3 className="text-lg font-medium text-gray-900">No guides found</h3>
                <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters to find what youre looking for.</p>
                <button 
                  onClick={() => setFilters({
                    city: '',
                    categories: [],
                    priceRange: [0, 200],
                    languages: [],
                    minRating: 0
                  })}
                  className="mt-4 text-teal-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
            <TablePagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </main>
    </div>
  );
}