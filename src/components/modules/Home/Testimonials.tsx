import { Star, Quote } from 'lucide-react'
const reviews = [{
    name: 'Sarah Mitchell',
    location: 'USA',
    rating: 5,
    text: "Amazing food tour in Barcelona! Maria showed us hidden gems we never would have found on our own. The tapas were incredible and the history was fascinating.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'James Lewis',
    location: 'UK',
    rating: 5,
    text: "Best way to explore Tokyo. Our guide Kenji was knowledgeable, fun, and spoke perfect English. He helped us navigate the subway and find the best ramen.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'Emma Roberts',
    location: 'Australia',
    rating: 5,
    text: "Incredible hiking experience in Bali with a local expert. The views were breathtaking and our guide shared so many interesting stories about the culture.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
  }
]
export function Testimonials() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Travelers Say</h2>
          <p className="text-lg text-gray-600">Don&apos;t just take our word for it. Hear from people who have explored with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg relative">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-blue-100 fill-blue-100" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed italic">{review.text}</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}