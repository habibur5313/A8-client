import React from 'react'
import { Search, Filter } from 'lucide-react'
import { BookingStatus } from './BookingStatusBadge'
interface BookingsFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  statusFilter: BookingStatus | 'all'
  onStatusFilterChange: (value: BookingStatus | 'all') => void
  guideFilter: string
  onGuideFilterChange: (value: string) => void
  guides: string[]
  dateRange: { start: string; end: string }
  onDateRangeChange: (range: { start: string; end: string }) => void
}
export function BookingsFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  guideFilter,
  onGuideFilterChange,
  guides,
  dateRange,
  onDateRangeChange,
}: BookingsFiltersProps) {
  return (
    <div className="bg-card border rounded-lg p-4 mb-6 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tourist name or booking ID..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        {/* Status Filter */}
        <div className="w-full md:w-48">
          <select
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value as BookingStatus | 'all')}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        {/* Guide Filter */}
        <div className="w-full md:w-48">
          <select
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            value={guideFilter}
            onChange={(e) => onGuideFilterChange(e.target.value)}
          >
            <option value="all">All Guides</option>
            {guides.map((guide) => (
              <option key={guide} value={guide}>
                {guide}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Date Range Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center pt-2 border-t">
        <span className="text-sm font-medium text-muted-foreground flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          Filters:
        </span>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-sm text-muted-foreground whitespace-nowrap">From:</label>
          <input
            type="date"
            className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            value={dateRange.start}
            onChange={(e) => onDateRangeChange({ ...dateRange, start: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-sm text-muted-foreground whitespace-nowrap">To:</label>
          <input
            type="date"
            className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            value={dateRange.end}
            onChange={(e) => onDateRangeChange({ ...dateRange, end: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}