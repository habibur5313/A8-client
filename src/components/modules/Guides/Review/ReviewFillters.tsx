interface ReviewFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  counts: Record<string, number>;
}
export function ReviewFilters({ activeFilter, onFilterChange, counts }: ReviewFiltersProps) {
  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: '5', label: '5 Stars' },
    { id: '4+', label: '4 Stars & Up' },
    { id: '3+', label: '3 Stars & Up' },
  ];
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${activeFilter === filter.id
              ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
            }
          `}
          aria-pressed={activeFilter === filter.id}
        >
          {filter.label}
          <span className={`ml-2 text-xs ${activeFilter === filter.id ? 'text-blue-200' : 'text-gray-400'}`}>
            ({counts[filter.id] || 0})
          </span>
        </button>
      ))}
    </div>
                    );
}