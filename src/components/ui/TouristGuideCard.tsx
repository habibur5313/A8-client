import { Star, MapPin, Globe, Award } from 'lucide-react'
export interface Guide {
  id: string
  name: string
  image: string
  district: string
  experience: number
  languages: string[]
  rating: number
  reviewCount: number
  price: string
}
interface GuideCardProps {
  guide: Guide
  compact?: boolean
}
export function GuideCard({ guide, compact = false }: GuideCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={guide.image}
          alt={guide.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" />
          <span className="text-xs font-bold text-gray-900">{guide.rating}</span>
          <span className="text-xs text-gray-500 ml-1">({guide.reviewCount})</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
              {guide.name}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="w-3.5 h-3.5 mr-1 text-sky-500" />
              {guide.district}
            </div>
          </div>
          <div className="text-right">
            <span className="block text-lg font-bold text-sky-600">{guide.price}</span>
            <span className="text-xs text-gray-400">/ day</span>
          </div>
        </div>
        {!compact && (
          <div className="mt-4 space-y-2 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <Award className="w-4 h-4 mr-2 text-teal-500" />
              <span>{guide.experience} years experience</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Globe className="w-4 h-4 mr-2 text-teal-500" />
              <span className="truncate">{guide.languages.join(', ')}</span>
            </div>
          </div>
        )}
        <div className={`mt-auto grid ${compact ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
          <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors">
            View Profile
          </button>
          <button className="px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 shadow-sm hover:shadow transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}