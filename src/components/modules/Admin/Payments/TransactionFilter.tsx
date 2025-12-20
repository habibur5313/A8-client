import { FilterState } from '@/types/payment.interface';
import { X } from 'lucide-react';
interface TransactionFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}
export function TransactionFilters({ filters, onFilterChange, onClearFilters }: TransactionFiltersProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-end lg:items-center">
        
        {/* Date Range */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="dateFrom" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">From Date</label>
            <input
              type="date"
              id="dateFrom"
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border"
              value={filters.dateFrom}
              onChange={(e) => handleChange('dateFrom', e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="dateTo" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">To Date</label>
            <input
              type="date"
              id="dateTo"
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border"
              value={filters.dateTo}
              onChange={(e) => handleChange('dateTo', e.target.value)}
            />
          </div>
        </div>
        {/* Type Filter */}
        <div className="w-full lg:w-48">
          <label htmlFor="type" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Transaction Type</label>
          <select
            id="type"
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-teal-500 dark:focus:border-teal-500 focus:ring-teal-500 dark:focus:ring-teal-500 sm:text-sm p-2 border"
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Booking">Booking</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Refund">Refund</option>
          </select>
        </div>
        {/* Status Filter */}
        <div className="w-full lg:w-48">
          <label htmlFor="status" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
          <select
            id="status"
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm p-2 border"
            value={filters.status}
            onChange={(e) => handleChange('status', e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>
        {/* Clear Filters */}
        <div className="w-full lg:w-auto">
          <button
            onClick={onClearFilters}
            className="w-full lg:w-auto inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            <X className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}