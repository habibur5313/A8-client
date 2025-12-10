"use client";
import { useState } from 'react';
import { Booking, BookingStatus } from '@/types/booking.interface';
import { StatusTabs } from '@/components/modules/Tourist/MyBooking/BookingStatusTabs';
import { BookingCard } from '@/components/modules/Tourist/MyBooking/BookingCard';
import { BookingTable } from '@/components/modules/Tourist/MyBooking/BookingTable';
import { MapPin } from 'lucide-react';
// Mock Data
const MOCK_BOOKINGS: Booking[] = [
  {
    id: '1',
    guideName: 'Sarah Jenkins',
    guidePhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    tourName: 'Historic Downtown Walk',
    date: '2023-11-15T10:00:00',
    status: 'confirmed',
    price: 45.00,
    currency: '$',
  },
  {
    id: '2',
    guideName: 'Kenji Tanaka',
    guidePhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    tourName: 'Kyoto Hidden Temples',
    date: '2023-12-02T09:00:00',
    status: 'pending',
    price: 85.00,
    currency: '$',
  },
  {
    id: '3',
    guideName: 'Elena Rossi',
    guidePhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    tourName: 'Rome Culinary Adventure',
    date: '2023-10-10T18:00:00',
    status: 'completed',
    price: 120.00,
    currency: '$',
  },
  {
    id: '4',
    guideName: 'David Chen',
    guidePhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    tourName: 'Night Photography Tour',
    date: '2023-09-28T19:30:00',
    status: 'canceled',
    price: 65.00,
    currency: '$',
  },
  {
    id: '5',
    guideName: 'Maria Garcia',
    guidePhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    tourName: 'Barcelona Art Walk',
    date: '2023-12-15T11:00:00',
    status: 'confirmed',
    price: 55.00,
    currency: '$',
  },
];
export default function MyBookingsPage() {
  const [filter, setFilter] = useState<BookingStatus | 'all'>('all');
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const filteredBookings = bookings.filter(
    (booking) => filter === 'all' || booking.status === filter
  );
  const handleView = (id: string) => {
    console.log('View booking:', id);
    // Navigation logic would go here
  };
  const handleCancel = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(bookings.map(b => 
        b.id === id ? { ...b, status: 'canceled' as BookingStatus } : b
      ));
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your upcoming and past tours</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <StatusTabs currentTab={filter} onTabChange={setFilter} />
        {/* Content */}
        {filteredBookings.length > 0 ? (
          <>
            {/* Mobile View (Cards) */}
            <div className="md:hidden">
              {filteredBookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  onView={handleView}
                  onCancel={handleCancel}
                />
              ))}
            </div>
            {/* Desktop View (Table) */}
            <div className="hidden md:block">
              <BookingTable
                bookings={filteredBookings}
                onView={handleView}
                onCancel={handleCancel}
              />
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200 border-dashed">
            <MapPin className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filter === 'all' 
                ? "You haven't made any bookings yet." 
                : `No bookings with status "${filter}".`}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}