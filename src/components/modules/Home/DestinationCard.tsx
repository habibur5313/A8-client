import { Star, Users } from 'lucide-react'
interface DestinationCardProps {
  name: string
  rating: number
  guideCount: number
  imageUrl: string
}
export function DestinationCard({ name, rating, guideCount, imageUrl }: DestinationCardProps) {
  return (
    <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Background */}
      <div className="aspect-4/5 w-full relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundColor: '#cbd5e1' }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="font-semibold text-sm">{rating}</span>
          </div>
          
          <div className="flex items-center text-gray-200 text-sm font-medium">
            <Users className="w-4 h-4 mr-1.5" />
            {guideCount} Guides
          </div>
        </div>
      </div>
    </div>
  )
}