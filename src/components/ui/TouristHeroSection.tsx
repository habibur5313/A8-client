import { CloudSun, MapPin, Thermometer } from 'lucide-react'
export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 to-teal-500 text-white shadow-xl">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-400/20 blur-3xl"></div>
      <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-blue-100 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Current Location</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Paris, France</h1>
            <p className="text-blue-100 text-lg">Ready for your next adventure, Alex?</p>
          </div>
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-400/20 rounded-full text-yellow-300">
                <CloudSun className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-blue-100">Weather</p>
                <p className="text-xl font-semibold">Sunny</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-400/20 rounded-full text-orange-300">
                <Thermometer className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-blue-100">Temp</p>
                <p className="text-xl font-semibold">24°C</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content - Suggestions */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
            Suggested for you
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'Santorini', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=300&q=80' },
              { name: 'Tokyo', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=300&q=80' },
              { name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80' },
            ].map((place) => (
              <div key={place.name} className="group cursor-pointer">
                <div className="aspect-square rounded-xl overflow-hidden mb-2 border-2 border-transparent group-hover:border-white/50 transition-all">
                  <img 
                    src={place.img} 
                    alt={place.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-sm font-medium">{place.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}