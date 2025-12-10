import { ApplicationStatus } from "@/fakedata/applicationData";

interface StatusBadgeProps {  status: ApplicationStatus;
}
export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = (status: ApplicationStatus) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(
        status
      )}`}
    >
      {status}
    </span>
  );
}