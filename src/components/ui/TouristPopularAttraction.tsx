import { Heart, Star } from 'lucide-react'
const attractions = [
  {
    id: 1,
    name: 'Eiffel Tower Tour',
    location: 'Paris, France',
    rating: 4.8,
    reviews: 1240,
    price: '$45',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Louvre Museum Access',
    location: 'Paris, France',
    rating: 4.9,
    reviews: 3890,
    price: '$22',
    image: 'https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Seine River Cruise',
    location: 'Paris, France',
    rating: 4.7,
    reviews: 850,
    price: '$30',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Versailles Palace',
    location: 'Versailles, France',
    rating: 4.8,
    reviews: 2100,
    price: '$55',
    image: 'https://images.unsplash.com/photo-1597925004390-3870634c0344?auto=format&fit=crop&w=800&q=80'
  }
]
export function PopularAttractions() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Popular Attractions</h2>
          <p className="text-gray-500 text-sm mt-1">Top rated experiences near you</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors">
            All
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            Tours
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            Museums
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {attractions.map((attraction) => (
          <div key={attraction.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={attraction.image} 
                alt={attraction.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-white">{attraction.rating}</span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-1 truncate">{attraction.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{attraction.location}</p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="text-xs text-gray-400">
                  {attraction.reviews} reviews
                </div>
                <div className="text-teal-600 font-bold">
                  {attraction.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}