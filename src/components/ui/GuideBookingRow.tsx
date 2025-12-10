import { Calendar, Clock, MapPin } from 'lucide-react'
export interface BookingProps {
  id: string
  touristName: string
  touristAvatar: string
  date: string
  location: string
  duration: string
  status: 'Approved' | 'Pending' | 'Cancelled'
}
export function BookingRow({ touristName, touristAvatar, date, location, duration, status }: BookingProps) {
  const statusStyles = {
    Approved: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Pending: 'bg-orange-100 text-orange-700 border-orange-200',
    Cancelled: 'bg-red-100 text-red-700 border-red-200',
  }
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors gap-4">
      <div className="flex items-center gap-4">
        <img 
          src={touristAvatar} 
          alt={touristName} 
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div>
          <h4 className="font-semibold text-slate-900">{touristName}</h4>
          <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {duration}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-6">
        <div className="flex items-center gap-1 text-sm text-slate-600">
          <MapPin className="w-4 h-4 text-blue-500" />
          {location}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
    </div>
  )
}