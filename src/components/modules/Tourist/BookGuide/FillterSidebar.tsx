import React from 'react';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CATEGORIES, LANGUAGES, LOCATIONS } from '@/fakedata/mockGuides';

interface FilterState {
  city: string;
  categories: string[];
  priceRange: [number, number];
  languages: string[];
  minRating: number;
}
interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isOpen: boolean;
  onClose: () => void;
  resultCount: number;
}
export function FilterSidebar({ filters, setFilters, isOpen, onClose, resultCount }: FilterSidebarProps) {
  
  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };
  const handleLanguageToggle = (language: string) => {
    setFilters(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };
  const clearFilters = () => {
    setFilters({
      city: '',
      categories: [],
      priceRange: [0, 200],
      languages: [],
      minRating: 0
    });
  };
  const activeFilterCount = 
    (filters.city ? 1 : 0) + 
    filters.categories.length + 
    filters.languages.length + 
    (filters.minRating > 0 ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 200 ? 1 : 0);
  const sidebarContent = (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-8">
        {/* City Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Location</h3>
          <select
            value={filters.city}
            onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))}
            className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm text-gray-700 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="">All Locations</option>
            {LOCATIONS.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        {/* Price Range */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Price per hour: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </h3>
          <div className="px-2">
            <input
              type="range"
              min="0"
              max="200"
              step="10"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], parseInt(e.target.value)] }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$0</span>
              <span>$200+</span>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
          <div className="space-y-2">
            {CATEGORIES.map(category => (
              <label key={category} className="flex items-center cursor-pointer group">
                <div className={`w-4 h-4 rounded border flex items-center justify-center mr-3 transition-colors ${
                  filters.categories.includes(category) 
                    ? 'bg-teal-600 border-teal-600' 
                    : 'border-gray-300 group-hover:border-teal-500'
                }`}>
                  {filters.categories.includes(category) && <Check className="h-3 w-3 text-white" />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900">{category}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Rating */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Minimum Rating</h3>
          <div className="space-y-2">
            {[4.5, 4.0, 3.5].map(rating => (
              <label key={rating} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                  checked={filters.minRating === rating}
                  onChange={() => setFilters(prev => ({ ...prev, minRating: rating }))}
                />
                <span className="ml-3 text-sm text-gray-600 flex items-center">
                  {rating}+ <span className="text-yellow-400 ml-1">★</span>
                </span>
              </label>
            ))}
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="rating"
                className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                checked={filters.minRating === 0}
                onChange={() => setFilters(prev => ({ ...prev, minRating: 0 }))}
              />
              <span className="ml-3 text-sm text-gray-600">Any rating</span>
            </label>
          </div>
        </div>
        {/* Languages */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map(language => (
              <button
                key={language}
                onClick={() => handleLanguageToggle(language)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  filters.languages.includes(language)
                    ? 'bg-teal-100 text-teal-800 border-teal-200'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 bg-gray-50 lg:bg-transparent">
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <span className="text-sm font-medium text-gray-500">{resultCount} results</span>
        </div>
        <Button 
          variant="outline" 
          onClick={clearFilters}
          disabled={activeFilterCount === 0}
        >
          Clear all filters ({activeFilterCount})
        </Button>
        <Button 
          variant="primary" 
 
          className="mt-3 lg:hidden"
          onClick={onClose}
        >
          Show {resultCount} Guides
        </Button>
      </div>
    </div>
  );
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-[300px] bg-white z-50 shadow-xl transform transition-transform lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200 bg-white h-fit rounded-lg shadow-sm border">
        {sidebarContent}
      </div>
    </>
  );
}