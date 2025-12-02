import Image from 'next/image';
import { Star, MapPin, ArrowRight } from 'lucide-react';
export function FeaturedCities() {
  const cities = [
    {
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      rating: 4.9,
      guides: 156,
      color: 'from-rose-500 to-pink-500',
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      rating: 4.8,
      guides: 203,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'New York',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      rating: 4.7,
      guides: 189,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Barcelona',
      country: 'Spain',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
      rating: 4.9,
      guides: 142,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      rating: 4.8,
      guides: 167,
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: 'London',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      rating: 4.7,
      guides: 198,
      color: 'from-slate-500 to-gray-600',
    },
  ];
  return (
    <section id="cities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Featured Cities
            </h2>
            <p className="text-xl text-gray-600">
              Explore the world&apos;s most exciting destinations
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold hover:gap-3 transition-all">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group relative rounded-3xl overflow-hidden bg-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-4/3 overflow-hidden relative">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {city.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{city.country}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-white">{city.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">
                    {city.guides} AI Guides
                  </span>
                  <div className={`w-10 h-10 bg-gradient-to-r ${city.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}