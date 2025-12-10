import { Calendar, MoreHorizontal, User } from 'lucide-react';
import { Booking } from '@/types/booking.interface';
import { StatusBadge } from './BookingStatusBadge';
interface BookingCardProps {
  booking: Booking;
  onView: (id: string) => void;
  onCancel: (id: string) => void;
}
export function BookingCard({ booking, onView, onCancel }: BookingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={booking.guidePhoto}
            alt={booking.guideName}
            className="h-10 w-10 rounded-full object-cover bg-gray-100"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{booking.guideName}</h3>
            <p className="text-xs text-gray-500">{booking.tourName}</p>
          </div>
        </div>
        <StatusBadge status={booking.status} />
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
        {new Date(booking.date).toLocaleDateString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </div>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <span className="font-semibold text-gray-900">
          {booking.currency} {booking.price.toFixed(2)}
        </span>
        <div className="flex space-x-2">
          {booking.status === 'pending' || booking.status === 'confirmed' ? (
            <button
              onClick={() => onCancel(booking.id)}
              className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              Cancel
            </button>
          ) : null}
          <button
            onClick={() => onView(booking.id)}
            className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}