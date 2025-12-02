import { Search, MapPin, Calendar, Users } from "lucide-react";
export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700">
            AI-Powered Travel Planning
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Explore Cities with
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI-Powered Guides
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover hidden gems, local favorites, and personalized itineraries
          crafted by artificial intelligence
        </p>
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
              <MapPin className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 text-lg"
              />
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                <Calendar className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Dates"
                  className="w-24 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                <Users className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Guests"
                  className="w-20 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
        {/* Quick suggestions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-gray-500">Popular:</span>
          {["Paris", "Tokyo", "New York", "Barcelona", "Dubai"].map((city) => (
            <button
              key={city}
              className="px-4 py-2 bg-white/60 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition-all"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
