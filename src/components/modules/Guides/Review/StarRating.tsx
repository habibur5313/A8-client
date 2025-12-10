import { Star } from 'lucide-react';
interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
}
export function StarRating({ rating, maxRating = 5, size = 16, className = "" }: StarRatingProps) {
  return (
    <div className={`flex items-center ${className}`} aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const isFilled = index < Math.floor(rating);
        const isHalf = index === Math.floor(rating) && rating % 1 !== 0; // Simple half star logic if needed, currently treating as full/empty based on floor
        return (
          <Star
            key={index}
            size={size}
            className={`${
              isFilled ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
            } transition-colors`}
          />
        );
      })}
    </div>
  );
}