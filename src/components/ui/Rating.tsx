import { Star } from "lucide-react"
import { cn } from "../../lib/utils"
interface RatingProps {
  rating: number
  count?: number
  size?: "sm" | "md" | "lg"
  className?: string
  showCount?: boolean
}
export function Rating({ rating, count, size = "sm", className, showCount = true }: RatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizeClasses[size],
              star <= Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-gray-500 font-medium ml-1">
          {rating} ({count})
        </span>
      )}
    </div>
  )
}