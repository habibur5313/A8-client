import { HeroSection } from "@/components/ui/TouristHeroSection";
import { InteractiveMap } from "@/components/ui/TouristInteractiveMap";
import { PopularAttractions } from "@/components/ui/TouristPopularAttraction";
import { UpcomingTrips } from "@/components/ui/TouristUpcomingTrips";
import { TravelTips } from "@/components/ui/TravelTips";
import { getUserInfo } from "@/services/auth/getUserInfo";

export default async function TouristDashboard() {

    const userInfo = await getUserInfo();
  
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome back, {userInfo?.name}! 👋</h1>
        <p className="text-slate-600">Here&apos;s what&apos;s happening with your tours today.</p>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Section */}
        <HeroSection />
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Trips & Map) - Spans 2 columns */}
          <div className="lg:col-span-2 space-y-12">
            <UpcomingTrips />
            <InteractiveMap />
          </div>
          {/* Right Column (Tips & Extra) - Spans 1 column */}
          <div className="space-y-12">
            <TravelTips />
            
            {/* Promo Card */}
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-6 text-white text-center shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer">
              <h3 className="text-2xl font-bold mb-2">Get Pro Access</h3>
              <p className="mb-6 opacity-90">Unlock exclusive deals and offline maps for your next journey.</p>
              <button className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-orange-50 transition-colors w-full">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
        {/* Full Width Section */}
        <PopularAttractions />
      </main>
    </div>
  )
}