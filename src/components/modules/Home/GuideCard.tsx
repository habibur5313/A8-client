import { Star, MessageCircle, ShieldCheck } from 'lucide-react'
interface GuideCardProps {
  name: string
  imageUrl: string
  rating: number
  reviewCount: number
  languages: string[]
  rate: string
  specialty: string
}
export function GuideCard({ name, imageUrl, rating, reviewCount, languages, rate, specialty }: GuideCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Header with Avatar */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-16 h-16 rounded-2xl object-cover shadow-md"
          />
          <div className="absolute -bottom-2 -right-2 bg-blue-100 text-blue-700 p-1 rounded-full border-2 border-white">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 leading-tight">{name}</h3>
          <p className="text-sm text-blue-600 font-medium mb-1">{specialty}</p>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="font-bold text-gray-900 mr-1">{rating}</span>
            <span className="text-gray-400">({reviewCount})</span>
          </div>
        </div>
      </div>
      {/* Languages */}
      <div className="flex flex-wrap gap-2 mb-4">
        {languages.map((lang) => (
          <span key={lang} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg">
            {lang}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
        <div>
          <span className="block text-xs text-gray-400 font-medium uppercase">Starting at</span>
          <span className="text-lg font-bold text-gray-900">{rate}<span className="text-sm font-normal text-gray-500">/hr</span></span>
        </div>
        <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold py-2.5 px-5 rounded-xl transition-colors">
          View Profile
        </button>
      </div>
    </div>
  )
}