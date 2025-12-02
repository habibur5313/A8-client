import Image from 'next/image';
import { Star, Users, Clock, Heart } from 'lucide-react';
export function TopGuides() {
  const guides = [
    {
      title: 'Complete Paris in 3 Days',
      author: 'AI Travel Expert',
      rating: 4.9,
      reviews: 2847,
      duration: '3 days',
      travelers: '15k+',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&q=80',
      price: 'Free',
      tags: ['Culture', 'Food', 'Romance'],
    },
    {
      title: 'Tokyo Street Food Tour',
      author: 'AI Foodie Guide',
      rating: 5.0,
      reviews: 1923,
      duration: '1 day',
      travelers: '8k+',
      image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&q=80',
      price: 'Free',
      tags: ['Food', 'Local', 'Night'],
    },
    {
      title: 'NYC Hidden Gems',
      author: 'AI Explorer',
      rating: 4.8,
      reviews: 3156,
      duration: '2 days',
      travelers: '12k+',
      image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600&q=80',
      price: 'Free',
      tags: ['Hidden', 'Local', 'Art'],
    },
    {
      title: 'Barcelona Architecture Walk',
      author: 'AI Culture Guide',
      rating: 4.9,
      reviews: 2134,
      duration: '1 day',
      travelers: '9k+',
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
      price: 'Free',
      tags: ['Architecture', 'History', 'Art'],
    },
  ];
  return (
    <section id="guides" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Top Rated Guides
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked by AI, loved by travelers worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                  {guide.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{guide.author}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{guide.rating}</span>
                    <span className="text-gray-400">({guide.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{guide.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{guide.travelers}</span>
                  </div>
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                    View Guide
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}