import React from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface TopBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  totalResults: number;
  onMobileFilterClick: () => void;
}
export function TopBar({ 
  searchQuery, 
  setSearchQuery, 
  sortOption, 
  setSortOption,
  totalResults,
  onMobileFilterClick
}: TopBarProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Find a Local Guide</h1>
          <p className="text-sm text-gray-500 mt-1">
            {totalResults} {totalResults === 1 ? 'guide' : 'guides'} available for your trip
          </p>
        </div>
        
        <div className="flex flex-1 gap-2 md:max-w-md md:justify-end">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name or keyword..."
              className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={onMobileFilterClick}
            aria-label="Open filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">Popular:</span>
          <button className="hover:text-teal-600 hover:underline">Historical</button>
          <button className="hover:text-teal-600 hover:underline">Food Tours</button>
          <button className="hover:text-teal-600 hover:underline">Photography</button>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <label htmlFor="sort" className="text-sm text-gray-500 hidden sm:inline-block">Sort by:</label>
          <div className="relative">
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none rounded-lg border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-gray-700 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
            <ArrowUpDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}