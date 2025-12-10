import { StatusBadge } from '@/components/ui/Statusbadge';
import { Application } from '@/fakedata/applicationData';
import { Calendar, Mail, Phone } from 'lucide-react';
import { ActionButtons } from './Action';
interface ApplicationCardProps {
  application: Application;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onViewDetails: (id: string) => void;
}
export function ApplicationCard({
  application,
  onApprove,
  onReject,
  onViewDetails,
}: ApplicationCardProps) {
  const formattedDate = new Date(application.submittedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-4 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          {application.avatarUrl ? (
            <img
              src={application.avatarUrl}
              alt={`${application.name}'s avatar`}
              className="h-12 w-12 rounded-full object-cover border-2 border-gray-100"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg border-2 border-teal-50">
              {application.name.charAt(0)}
              {application.name.split(' ')[1]?.charAt(0)}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{application.name}</h3>
            <StatusBadge status={application.status} />
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-5 text-sm text-gray-600">
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2 text-gray-400" />
          <span className="truncate">{application.email}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-2 text-gray-400" />
          <span>{application.contactNumber}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
          <span>Submitted: {formattedDate}</span>
        </div>
      </div>
      <div className="pt-4 border-t border-gray-100 flex justify-end">
        <ActionButtons
          onApprove={() => onApprove(application.id)}
          onReject={() => onReject(application.id)}
          onViewDetails={() => onViewDetails(application.id)}
        />
      </div>
    </div>
  );
}