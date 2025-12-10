import { Star } from 'lucide-react'
export interface ReviewProps {
  id: string
  touristName: string
  touristAvatar: string
  rating: number
  comment: string
  date: string
}
export function ReviewCard({ touristName, touristAvatar, rating, comment, date }: ReviewProps) {
  return (
    <div className="p-5 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img 
            src={touristAvatar} 
            alt={touristName} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-slate-900 text-sm">{touristName}</h4>
            <span className="text-xs text-slate-500">{date}</span>
          </div>
        </div>
        <div className="flex items-center bg-orange-50 px-2 py-1 rounded-lg">
          <Star className="w-3 h-3 text-orange-400 fill-orange-400 mr-1" />
          <span className="text-xs font-bold text-orange-700">{rating.toFixed(1)}</span>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        {comment}
      </p>
    </div>
  )
}