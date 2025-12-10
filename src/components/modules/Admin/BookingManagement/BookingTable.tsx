import React from 'react'
import { Eye, XCircle, MoreHorizontal } from 'lucide-react'
import { BookingStatus, StatusBadge } from './BookingStatusBadge'

export interface Booking {
  id: string
  touristName: string
  guideName: string
  date: string
  status: BookingStatus
  price: number
}
interface BookingsTableProps {
  bookings: Booking[]
  onView: (id: string) => void
  onCancel: (id: string) => void
}
export function BookingsTable({ bookings, onView, onCancel }: BookingsTableProps) {
  return (
    <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="px-6 py-3 font-medium text-muted-foreground">Booking ID</th>
              <th className="px-6 py-3 font-medium text-muted-foreground">Tourist</th>
              <th className="px-6 py-3 font-medium text-muted-foreground">Guide</th>
              <th className="px-6 py-3 font-medium text-muted-foreground">Date</th>
              <th className="px-6 py-3 font-medium text-muted-foreground">Status</th>
              <th className="px-6 py-3 font-medium text-muted-foreground text-right">Price</th>
              <th className="px-6 py-3 font-medium text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">
                  No bookings found matching your filters.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="group hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-foreground">{booking.id}</td>
                  <td className="px-6 py-4 text-foreground">{booking.touristName}</td>
                  <td className="px-6 py-4 text-foreground">{booking.guideName}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={booking.status} />
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-foreground">
                    ${booking.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100">
                      <button
                        onClick={() => onView(booking.id)}
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="View Details"
                        aria-label={`View booking ${booking.id}`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                        <button
                          onClick={() => onCancel(booking.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Cancel Booking"
                          aria-label={`Cancel booking ${booking.id}`}
                        >
                          <XCircle className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Footer */}
      <div className="px-6 py-4 border-t flex items-center justify-between bg-muted/20">
        <span className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{bookings.length}</span> results
        </span>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded text-sm hover:bg-muted disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <button
            className="px-3 py-1 border rounded text-sm hover:bg-muted disabled:opacity-50"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}