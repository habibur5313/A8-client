
import { Booking, BookingCard } from '@/components/ui/TouristBookingCard'
import { Guide, GuideCard } from '@/components/ui/TouristGuideCard'
import { MetricCard } from '@/components/ui/TouristMetrictCard'
import { 
  Bell, 
  Search, 
  ChevronDown, 
  Briefcase, 
  Calendar, 
  Heart, 
  MessageSquare, 
  CheckCircle,
  Menu
} from 'lucide-react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Travel Guide",
  description: "Dashboard | Travel Guide",
};
// Mock Data
const metrics = [
  { label: 'Total Bookings', value: 12, icon: Briefcase, color: 'blue' as const },
  { label: 'Upcoming Trips', value: 3, icon: Calendar, color: 'teal' as const },
  { label: 'Saved Guides', value: 8, icon: Heart, color: 'purple' as const },
  { label: 'Messages', value: 5, icon: MessageSquare, color: 'yellow' as const },
  { label: 'Completed', value: 9, icon: CheckCircle, color: 'green' as const },
]
const recommendedGuides: Guide[] = [
  {
    id: '1',
    name: 'Kamal Perera',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    district: 'Kandy',
    experience: 8,
    languages: ['English', 'French'],
    rating: 4.9,
    reviewCount: 124,
    price: '$45'
  },
  {
    id: '2',
    name: 'Nimali Silva',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    district: 'Galle',
    experience: 5,
    languages: ['English', 'German'],
    rating: 4.8,
    reviewCount: 89,
    price: '$55'
  },
  {
    id: '3',
    name: 'Rohan Dias',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    district: 'Colombo',
    experience: 12,
    languages: ['English', 'Japanese'],
    rating: 5.0,
    reviewCount: 210,
    price: '$60'
  },
  {
    id: '4',
    name: 'Sarah Fernando',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    district: 'Ella',
    experience: 4,
    languages: ['English', 'Spanish'],
    rating: 4.7,
    reviewCount: 56,
    price: '$40'
  }
]
const upcomingBookings: Booking[] = [
  {
    id: 'b1',
    guideName: 'Kamal Perera',
    guideImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Oct 24, 2023',
    time: '09:00 AM',
    location: 'Temple of the Tooth, Kandy',
    status: 'Confirmed'
  },
  {
    id: 'b2',
    guideName: 'Nimali Silva',
    guideImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Nov 02, 2023',
    time: '10:30 AM',
    location: 'Galle Fort Walk',
    status: 'Pending'
  },
  {
    id: 'b3',
    guideName: 'Rohan Dias',
    guideImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Nov 15, 2023',
    time: '08:00 AM',
    location: 'Colombo City Tour',
    status: 'Confirmed'
  }
]
export default function TouristDashboard() {
  return (
    <div className=" font-sans text-gray-900 dark:text-gray-100">
      {/* Main Content */}
      <main className="">
  
        <div className="p-6  space-y-8">
          {/* Metrics Row */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </section>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column (Guides) */}
            <div className="xl:col-span-2 space-y-8">
              {/* Recommended Guides */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recommended Guides</h2>
                  <button className="text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendedGuides.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} />
                  ))}
                </div>
              </section>
              {/* Saved Guides (Smaller Section) */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Saved Guides</h2>
                  <button className="text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {recommendedGuides.slice(0, 3).map((guide) => (
                    <GuideCard key={`saved-${guide.id}`} guide={guide} compact />
                  ))}
                </div>
              </section>
            </div>
            {/* Right Column (Bookings) */}
            <div className="space-y-8">
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Upcoming Bookings</h2>
                  <button className="text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline">
                    See All
                  </button>
                </div>
                
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
                <div className="mt-8 p-4 bg-sky-50 rounded-xl border border-sky-100">
                  <h3 className="font-semibold text-sky-800 mb-2">Need Help?</h3>
                  <p className="text-sm text-sky-600 mb-3">
                    Contact our support team for any questions about your bookings.
                  </p>
                  <button className="w-full py-2 bg-white text-sky-600 font-medium rounded-lg border border-sky-200 hover:bg-sky-50 transition-colors text-sm">
                    Contact Support
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}