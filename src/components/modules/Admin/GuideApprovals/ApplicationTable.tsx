
import { StatusBadge } from '@/components/ui/Statusbadge';
import { Application } from '@/fakedata/applicationData';
import { ArrowUpDown } from 'lucide-react';
import { ActionButtons } from './Action';
interface ApplicationTableProps {
  applications: Application[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onViewDetails: (id: string) => void;
  onSortDate: () => void;
  sortDirection: 'asc' | 'desc';
}
export function ApplicationTable({
  applications,
  onApprove,
  onReject,
  onViewDetails,
  onSortDate,
  sortDirection,
}: ApplicationTableProps) {
  return (
    <div className="overflow-hidden shadow-md ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white dark:bg-gray-800">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-300 sm:pl-6"
            >
              Applicant
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-300  hidden lg:table-cell"
            >
              Contact Info
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-300 cursor-pointer hover:bg-gray-100 transition-colors group"
              onClick={onSortDate}
            >
              <div className="flex items-center">
                Submitted Date
                <span className="ml-2 flex-none rounded text-gray-400 dark:text-gray-500   group-hover:visible group-focus:visible">
                  <ArrowUpDown className={`h-4 w-4 ${sortDirection === 'asc' ? 'text-teal-600' : ''}`} />
                </span>
              </div>
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Status
            </th>
            <th
              scope="col"
              className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-800">
          {applications.map((app) => (
            <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    {app.avatarUrl ? (
                      <img
                        className="h-10 w-10 rounded-full object-cover border border-gray-200"
                        src={app.avatarUrl}
                        alt=""
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold border border-teal-50">
                        {app.name.charAt(0)}
                        {app.name.split(' ')[1]?.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900 dark:text-gray-200">{app.name}</div>
                    <div className="text-gray-500 lg:hidden">{app.email}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                <div className="text-gray-900 dark:text-gray-200">{app.email}</div>
                <div className="text-gray-500">{app.contactNumber}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {new Date(app.submittedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm">
                <StatusBadge status={app.status} />
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <div className="flex justify-end">
                  <ActionButtons
                    onApprove={() => onApprove(app.id)}
                    onReject={() => onReject(app.id)}
                    onViewDetails={() => onViewDetails(app.id)}
                    compact={true}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}