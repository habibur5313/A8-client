import { Calendar, Check, Heart, Search } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: 'Find Your Guide',
    description: 'Browse verified local guides in your destination based on interests and reviews.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Calendar,
    title: 'Request a Tour',
    description: 'Send a booking request with your preferred date, time, and customization needs.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Check,
    title: 'Guide Accepts',
    description: 'Receive confirmation and a detailed itinerary tailored just for you.',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: Heart,
    title: 'Enjoy Your Trip',
    description: 'Experience the city like a local with an authentic, personalized tour.',
    color: 'bg-red-100 text-red-600'
  }
]
export function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Simple Process</span>
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}