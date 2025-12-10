import { Check, X, Eye } from 'lucide-react';
interface ActionButtonsProps {  onApprove: () => void;
  onReject: () => void;
  onViewDetails: () => void;
  compact?: boolean;
}
export function ActionButtons({
  onApprove,
  onReject,
  onViewDetails,
  compact = false,
}: ActionButtonsProps) {
  if (compact) {
    return (
      <div className="flex items-center space-x-1">
        <button
          onClick={onApprove}
          className="p-1.5 text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
          title="Approve"
          aria-label="Approve application"
        >
          <Check size={18} />
        </button>
        <button
          onClick={onReject}
          className="p-1.5 text-red-600 hover:bg-red-50 rounded-full transition-colors"
          title="Reject"
          aria-label="Reject application"
        >
          <X size={18} />
        </button>
        <button
          onClick={onViewDetails}
          className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          title="View Details"
          aria-label="View application details"
        >
          <Eye size={18} />
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onApprove}
        className="flex items-center px-3 py-1.5 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors shadow-sm"
      >
        <Check size={16} className="mr-1.5" />
        Approve
      </button>
      <button
        onClick={onReject}
        className="flex items-center px-3 py-1.5 bg-white text-red-600 border border-red-200 text-sm font-medium rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors shadow-sm"
      >
        <X size={16} className="mr-1.5" />
        Reject
      </button>
      <button
        onClick={onViewDetails}
        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
        title="View Details"
      >
        <Eye size={18} />
      </button>
    </div>
  );
}