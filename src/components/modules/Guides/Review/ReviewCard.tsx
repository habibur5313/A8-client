import { StarRating } from './StarRating';
export interface Review {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number;
  date: string;
  comment: string;
}
interface ReviewCardProps {
  review: Review;
}
export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full transition-shadow hover:shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={review.avatarUrl}
          alt={review.author}
          className="w-10 h-10 rounded-full object-cover mr-3 bg-gray-200"
        />
        <div>
          <h3 className="font-bold text-gray-900 text-sm">{review.author}</h3>
          <p className="text-xs text-gray-500">{review.date}</p>
        </div>
      </div>
      
      <div className="mb-3">
        <StarRating rating={review.rating} size={16} />
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
        {review.comment}
      </p>
    </div>
  );
}