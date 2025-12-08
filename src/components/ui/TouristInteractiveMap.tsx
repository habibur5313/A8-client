import { Hotel, MapPin, Navigation } from "lucide-react";
export function InteractiveMap() {
  return (
    <section className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Explore Nearby</h2>
        <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
          <Navigation className="w-4 h-4" />
          Open full map
        </button>
      </div>
      <div className="relative w-full h-[400px] bg-slate-100 rounded-3xl overflow-hidden border border-gray-200 group">
        {/* Map Background Pattern (Simulated) */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Decorative Map Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-teal-200/20 rounded-full blur-xl"></div>

        {/* Map Pins */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform hover:scale-110 cursor-pointer z-10">
          <div className="relative">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30 border-4 border-white">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-500 rotate-45"></div>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              You are here
            </div>
          </div>
        </div>
        <div className="absolute top-1/4 left-1/3 transform hover:scale-110 cursor-pointer transition-all">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-orange-400 text-orange-500">
            <Hotel className="w-5 h-5" />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 transform hover:scale-110 cursor-pointer transition-all">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-purple-400 text-purple-500">
            <MapPin className="w-5 h-5" />
          </div>
        </div>
        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors font-bold text-xl">
            +
          </button>
          <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors font-bold text-xl">
            -
          </button>
        </div>
      </div>
    </section>
  );
}
