import { DestinationCard } from './DestinationCard'
const destinations = [
  {
    name: 'Paris, France',
    rating: 4.9,
    guideCount: 127,
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Tokyo, Japan',
    rating: 4.8,
    guideCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Barcelona, Spain',
    rating: 4.9,
    guideCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'New York, USA',
    rating: 4.7,
    guideCount: 203,
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Bali, Indonesia',
    rating: 4.8,
    guideCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Dubai, UAE',
    rating: 4.6,
    guideCount: 112,
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea932a23518?auto=format&fit=crop&q=80&w=800'
  }
]
export function PopularDestinations() {
  return (
    <section className="py-20 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Popular Destinations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Discover the most sought-after cities where our local experts are ready to show you around.</p>
          </div>
          <button className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 group">
            View all cities
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      </div>
    </section>
  )
}