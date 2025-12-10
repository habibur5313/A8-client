import { Edit2, Trash2, User } from 'lucide-react'
import { StarRating } from './MyReviewStarRating'

export interface Review {
  id: string
  guideName: string
  guideImage?: string
  rating: number
  date: string
  comment: string
}
interface ReviewCardProps {
  review: Review
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}
export function ReviewCard({ review, onEdit, onDelete }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 overflow-hidden shrink-0">
            {review.guideImage ? (
              <img 
                src={review.guideImage} 
                alt={review.guideName} 
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-teal-600 font-semibold text-lg">
                {review.guideName.charAt(0)}
              </span>
            )}
          </div>
          
          {/* Name and Date */}
          <div>
            <h3 className="font-semibold text-gray-900">{review.guideName}</h3>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        </div>
        {/* Rating */}
        <StarRating rating={review.rating} size={18} />
      </div>
      {/* Comment */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
      </div>
      {/* Actions */}
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
        <button
          onClick={() => onEdit(review.id)}
          className="flex items-center px-3 py-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
          aria-label={`Edit review for ${review.guideName}`}
        >
          <Edit2 size={16} className="mr-2" />
          Edit
        </button>
        <button
          onClick={() => onDelete(review.id)}
          className="flex items-center px-3 py-1.5 text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
          aria-label={`Delete review for ${review.guideName}`}
        >
          <Trash2 size={16} className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  )
}