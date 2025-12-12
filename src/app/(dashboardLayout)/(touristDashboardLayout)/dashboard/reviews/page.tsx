"use client"
import { useState } from 'react'
import { ReviewCard, Review } from '@/components/modules/Tourist/MyReview/MyReviewCard'
const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    guideName: 'Maria Santos',
    rating: 5,
    date: 'March 15, 2024',
    comment: 'Maria was absolutely amazing! She knew so much about the local history and took us to the best hidden spots. The food tour part was the highlight of our trip.',
    guideImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '2',
    guideName: 'Carlos Rodriguez',
    rating: 4,
    date: 'March 10, 2024',
    comment: 'Great experience overall. Carlos is very friendly and speaks perfect English. We saw everything we wanted to see, though the pace was a bit fast for my parents.',
  },
  {
    id: '3',
    guideName: 'Ana Silva',
    rating: 5,
    date: 'March 5, 2024',
    comment: 'Highly recommend Ana! She customized the tour exactly to our interests. We spent extra time at the museum and she was very patient with all our questions.',
    guideImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '4',
    guideName: 'John Smith',
    rating: 3,
    date: 'February 28, 2024',
    comment: 'The tour was okay, but started 15 minutes late. John was knowledgeable but seemed a bit distracted. Good for a general overview but maybe not for deep history buffs.',
  }
]
export default function MyReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS)
  const handleEdit = (id: string) => {
    // In a real app, this would open a modal or navigate to an edit page
    alert(`Edit functionality would open for review ${id}`)
  }
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews(prev => prev.filter(review => review.id !== id))
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Reviews</h1>
          <p className="mt-2 text-gray-600">Manage reviews for tours and guides youve experienced.</p>
        </header>
        {reviews.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200 border-dashed">
            <p className="text-gray-500 text-lg">You havent written any reviews yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}