import { AvailabilityToggle } from "@/components/ui/GuideAvalibility";
import { BookingProps, BookingRow } from "@/components/ui/GuideBookingRow";
import { GuideOverviewCard } from "@/components/ui/GuideOverviewCard";
import { ReviewCard, ReviewProps } from "@/components/ui/GuideReviewCard";
import { StatCard } from "@/components/ui/GuideStatCard";
import { getUserInfo } from "@/services/auth/getUserInfo";
import {
  MapPin,
  Calendar,
  CheckCircle,
  DollarSign,
  Compass,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Travel Guide",
  description: "Dashboard | Travel Guide",
};
// Mock Data

const STATS_DATA = [
  {
    label: "Total Bookings",
    value: "342",
    icon: MapPin,
    color: "blue" as const,
  },
  {
    label: "Pending Requests",
    value: "12",
    icon: Calendar,
    color: "orange" as const,
  },
  {
    label: "Completed Tours",
    value: "298",
    icon: CheckCircle,
    color: "emerald" as const,
  },
  {
    label: "Earnings (Month)",
    value: "$12,450",
    icon: DollarSign,
    color: "purple" as const,
  },
];
const BOOKINGS_DATA: BookingProps[] = [
  {
    id: "1",
    touristName: "Michael Chen",
    touristAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    date: "Oct 24, 2023",
    location: "Old Town Square",
    duration: "3 hours",
    status: "Approved",
  },
  {
    id: "2",
    touristName: "Emma Wilson",
    touristAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    date: "Oct 26, 2023",
    location: "Cathedral District",
    duration: "2 hours",
    status: "Pending",
  },
  {
    id: "3",
    touristName: "James Rodriguez",
    touristAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    date: "Oct 28, 2023",
    location: "Market Tour",
    duration: "4 hours",
    status: "Approved",
  },
];
const REVIEWS_DATA: ReviewProps[] = [
  {
    id: "1",
    touristName: "Sophie Martin",
    touristAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    rating: 5,
    comment:
      "Sarah was absolutely amazing! She knew so many hidden gems in the city that we never would have found on our own.",
    date: "2 days ago",
  },
  {
    id: "2",
    touristName: "David Kim",
    touristAvatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    rating: 5,
    comment:
      "Great photography skills! She helped us take the best photos of our trip. Highly recommended for couples.",
    date: "1 week ago",
  },
  {
    id: "3",
    touristName: "Elena Rossi",
    touristAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    rating: 4,
    comment:
      "Very knowledgeable about the history. The tour was a bit fast-paced but we saw everything we wanted.",
    date: "2 weeks ago",
  },
];
export default async function GuideDashboard() {
  const userInfo = await getUserInfo();
  return (
    <div className="min-h-screen   font-sans text-slate-900 dark:text-slate-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Sync Calendar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile & Availability */}
          <div className="lg:col-span-4 space-y-6">
            <GuideOverviewCard guide={userInfo} />
            <AvailabilityToggle />

            {/* Quick Actions Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">Pro Tip</h3>
              <p className="text-blue-100 text-sm mb-4">
                Updating your availability 3 days in advance increases booking
                rates by 40%.
              </p>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg py-2 text-sm font-medium transition-colors">
                Update Schedule
              </button>
            </div>
          </div>
          {/* Right Column - Stats, Bookings, Reviews */}
          <div className="lg:col-span-8 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS_DATA.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
            {/* Upcoming Bookings */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Upcoming Bookings
                </h2>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {BOOKINGS_DATA.map((booking) => (
                  <BookingRow key={booking.id} {...booking} />
                ))}
              </div>
            </section>
            {/* Recent Reviews */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Recent Reviews
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Average Rating:
                  </span>
                  <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-400   rounded text-sm font-bold">
                    4.9
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {REVIEWS_DATA.map((review) => (
                  <ReviewCard key={review.id} {...review} />
                ))}

                {/* View More Card */}
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-colors cursor-pointer group h-full min-h-[160px]">
                  <span className="text-sm font-medium group-hover:underline">
                    View All 127 Reviews
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
