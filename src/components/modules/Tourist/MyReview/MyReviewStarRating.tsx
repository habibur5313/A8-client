import { Star } from 'lucide-react'
interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: number
  className?: string
}
export function StarRating({ 
  rating, 
  maxRating = 5, 
  size = 16,
  className = "" 
}: StarRatingProps) {
  return (
    <div className={`flex items-center space-x-0.5 ${className}`} aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={`${
            index < rating 
              ? 'fill-teal-500 text-teal-500' 
              : 'fill-gray-100 text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}