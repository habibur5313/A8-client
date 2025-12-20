import { GuideCard } from './GuideCard'
const guides = [{
    name: 'Elena Rodriguez',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5.0,
    reviewCount: 124,
    languages: ['English', 'Spanish'],
    rate: '$45',
    specialty: 'Food & History'
  },
  {
    name: 'Kenji Tanaka',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    reviewCount: 89,
    languages: ['English', 'Japanese'],
    rate: '$55',
    specialty: 'Photography'
  },
  {
    name: 'Sarah Jenkins',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 5.0,
    reviewCount: 215,
    languages: ['English', 'French'],
    rate: '$40',
    specialty: 'Art Museums'
  },
  {
    name: 'Marco Rossi',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    reviewCount: 76,
    languages: ['Italian', 'English', 'German'],
    rate: '$60',
    specialty: 'Architecture'
  }
]
export function TopGuides() {
  return (
    <section className="py-20  bg-gray-50 dark:bg-slate-900 ">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Top Rated Guides</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Connect with passionate locals who know their cities inside and out.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.name} {...guide} />
          ))}
        </div>
      </div>
    </section>
  )
}