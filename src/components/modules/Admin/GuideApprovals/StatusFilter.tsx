import { ApplicationStatus } from '@/fakedata/applicationData';
import { Filter } from 'lucide-react';
interface StatusFilterProps {
  currentFilter: ApplicationStatus | 'All';
  onFilterChange: (status: ApplicationStatus | 'All') => void;
}
export function StatusFilter({ currentFilter, onFilterChange }: StatusFilterProps) {
  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center">
        <Filter className="h-5 w-5 text-gray-400 dark:text-gray-300 mr-2" />
        <select
          value={currentFilter}
          onChange={(e) => onFilterChange(e.target.value as ApplicationStatus | 'All')}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md shadow-sm cursor-pointer bg-white dark:bg-gray-700"
          aria-label="Filter by status"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
}