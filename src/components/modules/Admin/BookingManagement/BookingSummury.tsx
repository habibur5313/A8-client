import React from 'react'
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react'
interface SummaryStats {
  totalToday: number
  pending: number
  completed: number
  cancelled: number
}
interface BookingsSummaryCardsProps {
  stats: SummaryStats
}
export function BookingsSummaryCards({ stats }: BookingsSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-card border rounded-lg p-4 shadow-sm flex items-center space-x-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Calendar className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Bookings Today</p>
          <h3 className="text-2xl font-bold">{stats.totalToday}</h3>
        </div>
      </div>
      <div className="bg-card border rounded-lg p-4 shadow-sm flex items-center space-x-4">
        <div className="p-3 bg-yellow-100 rounded-full">
          <Clock className="h-6 w-6 text-yellow-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Pending</p>
          <h3 className="text-2xl font-bold">{stats.pending}</h3>
        </div>
      </div>
      <div className="bg-card border rounded-lg p-4 shadow-sm flex items-center space-x-4">
        <div className="p-3 bg-green-100 rounded-full">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Completed</p>
          <h3 className="text-2xl font-bold">{stats.completed}</h3>
        </div>
      </div>
      <div className="bg-card border rounded-lg p-4 shadow-sm flex items-center space-x-4">
        <div className="p-3 bg-red-100 rounded-full">
          <XCircle className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Cancelled</p>
          <h3 className="text-2xl font-bold">{stats.cancelled}</h3>
        </div>
      </div>
    </div>
  )
}