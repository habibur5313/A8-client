import { StarRating } from './StarRating';
import { Review } from './ReviewCard';
interface RatingSummaryProps {
  reviews: Review[];
}
export function RatingSummary({ reviews }: RatingSummaryProps) {
  const totalReviews = reviews.length;
  
  // Calculate average rating
  const averageRating = totalReviews > 0
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(1)
    : "0.0";
  // Calculate distribution
  const distribution = [5, 4, 3, 2, 1].map(star => {
    const count = reviews.filter(r => Math.floor(r.rating) === star).length;
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return { star, count, percentage };
  });
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        {/* Overall Rating Score */}
        <div className="flex flex-col items-center justify-center min-w-[140px]">
          <span className="text-5xl font-bold text-gray-900">{averageRating}</span>
          <div className="my-2">
            <StarRating rating={parseFloat(averageRating)} size={24} />
          </div>
          <p className="text-gray-500 text-sm">{totalReviews} reviews</p>
        </div>
        {/* Vertical Divider (Desktop) */}
        <div className="hidden md:block w-px h-32 bg-gray-200 mx-4"></div>
        {/* Distribution Bars */}
        <div className="flex-1 w-full max-w-lg">
          <div className="space-y-3">
            {distribution.map(({ star, count, percentage }) => (
              <div key={star} className="flex items-center text-sm">
                <span className="w-3 font-medium text-gray-700 mr-2">{star}</span>
                <span className="text-yellow-400 mr-3">★</span>
                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-8 text-right text-gray-400 ml-3 text-xs">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}