"use client"
import { useState, useMemo } from 'react';
import { ReviewCard, Review } from '@/components/modules/Guides/Review/ReviewCard'; 
import { RatingSummary } from '@/components/modules/Guides/Review/RatingSummary';
import { ReviewFilters } from '@/components/modules/Guides/Review/ReviewFillters';
// Mock Data
const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    date: 'March 15, 2024',
    comment: 'Absolutely fantastic experience! The guide was knowledgeable, friendly, and took us to some hidden gems we never would have found on our own. Highly recommended for anyone visiting the city.'
  },
  {
    id: '2',
    author: 'Michael Chen',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
    rating: 4,
    date: 'March 10, 2024',
    comment: 'Great tour overall. The pacing was perfect and we learned a lot of history. The only reason for 4 stars is that the lunch stop was a bit rushed, but otherwise excellent.'
  },
  {
    id: '3',
    author: 'Emma Wilson',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    date: 'February 28, 2024',
    comment: 'Best tour I have ever taken! Our guide went above and beyond to ensure everyone was comfortable and having a good time. The photography tips were an unexpected bonus!'
  },
  {
    id: '4',
    author: 'David Rodriguez',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    date: 'February 25, 2024',
    comment: 'Incredible value for money. We saw so much in just 3 hours. The stories about the local architecture were fascinating. Will definitely book again when friends visit.'
  },
  {
    id: '5',
    author: 'Lisa Thompson',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    rating: 3,
    date: 'February 15, 2024',
    comment: 'The guide was nice but the group was too large (about 25 people), making it hard to hear sometimes. I prefer smaller, more intimate groups.'
  },
  {
    id: '6',
    author: 'James Wilson',
    avatarUrl: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    date: 'January 30, 2024',
    comment: 'A perfect day out. The weather was great and the itinerary was well thought out. I particularly enjoyed the visit to the old market district.'
  },
  {
    id: '7',
    author: 'Anna Kowalski',
    avatarUrl: 'https://i.pravatar.cc/150?img=24',
    rating: 4,
    date: 'January 22, 2024',
    comment: 'Very informative and fun. Good mix of walking and resting. The guide spoke excellent English and was very humorous.'
  },
  {
    id: '8',
    author: 'Robert Taylor',
    avatarUrl: 'https://i.pravatar.cc/150?img=60',
    rating: 2,
    date: 'January 10, 2024',
    comment: 'Disappointing. The guide was 20 minutes late and seemed unprepared. We skipped two of the promised locations on the itinerary.'
  },
  {
    id: '9',
    author: 'Sophie Martin',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    date: 'December 28, 2023',
    comment: 'Magical experience during the holiday season! The lights tour was breathtaking. Thank you for making our trip so special.'
  }
];
export default function GuideReviewsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  // Filter Logic
  const filteredReviews = useMemo(() => {
    switch (activeFilter) {
      case '5':
        return MOCK_REVIEWS.filter(r => r.rating === 5);
      case '4+':
        return MOCK_REVIEWS.filter(r => r.rating >= 4);
      case '3+':
        return MOCK_REVIEWS.filter(r => r.rating >= 3);
      case 'all':
      default:
        return MOCK_REVIEWS;
    }
  }, [activeFilter]);
  // Calculate counts for filter buttons
  const counts = useMemo(() => ({
    'all': MOCK_REVIEWS.length,
    '5': MOCK_REVIEWS.filter(r => r.rating === 5).length,
    '4+': MOCK_REVIEWS.filter(r => r.rating >= 4).length,
    '3+': MOCK_REVIEWS.filter(r => r.rating >= 3).length,
  }), []);
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Guide Reviews</h1>
          <p className="text-gray-500 mt-1">See what travelers are saying about their experiences</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Rating Summary Dashboard */}
        <section aria-label="Rating Summary">
          <RatingSummary reviews={MOCK_REVIEWS} />
        </section>
        {/* Filters and List */}
        <section aria-label="Reviews List">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
              {filteredReviews.length} {filteredReviews.length === 1 ? 'Review' : 'Reviews'}
            </h2>
            <ReviewFilters 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter}
              counts={counts}
            />
          </div>
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">No reviews match your selected filter.</p>
              <button 
                onClick={() => setActiveFilter('all')}
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}