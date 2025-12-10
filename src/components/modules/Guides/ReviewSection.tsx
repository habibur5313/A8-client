import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
export function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      date: "October 2023",
      rating: 5,
      text: "Elena was absolutely wonderful! Her knowledge of Florence is unmatched, and she took us to the most amazing little restaurant for lunch. Highlight of our trip!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "September 2023",
      rating: 5,
      text: "Great tour of the Uffizi. We skipped the huge lines and went straight to the best art. Elena made history come alive for my teenagers, which is a miracle!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    }
  ]
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-900 mb-6">What Travelers Say</h2>
      <div className="grid gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-stone-50 border-none">
            <div className="flex items-start gap-4">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-stone-900">{review.name}</h4>
                  <span className="text-stone-400 text-sm">• {review.date}</span>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 italic">{review.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}