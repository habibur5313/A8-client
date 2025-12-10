import { Calendar, MapPin, Clock } from 'lucide-react'
export interface Booking {
  id: string
  guideName: string
  guideImage: string
  date: string
  time: string
  location: string
  status: 'Confirmed' | 'Pending' | 'Completed'
}
interface BookingCardProps {
  booking: Booking
}
export function BookingCard({ booking }: BookingCardProps) {
  const statusStyles = {
    Confirmed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Pending: 'bg-amber-100 text-amber-700 border-amber-200',
    Completed: 'bg-gray-100 text-gray-700 border-gray-200',
  }
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 gap-4">
      <img
        src={booking.guideImage}
        alt={booking.guideName}
        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-gray-900 truncate">{booking.guideName}</h4>
        <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-sky-500" />
            {booking.date}
          </div>
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-sky-500" />
            {booking.time}
          </div>
          <div className="flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-sky-500" />
            {booking.location}
          </div>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[booking.status]}`}>
        {booking.status}
      </span>
    </div>
  )
}