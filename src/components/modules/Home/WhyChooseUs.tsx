import { Shield, Lock, Star, Heart } from 'lucide-react'
const benefits = [
  {
    icon: Shield,
    title: 'Verified Guides',
    description: 'Every guide undergoes a strict background check and verification process.',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Your payments are encrypted and held securely until the tour is complete.',
    color: 'text-teal-600 bg-teal-50'
  },
  {
    icon: Star,
    title: 'Real Reviews',
    description: 'Authentic feedback from verified travelers who have actually taken the tours.',
    color: 'text-yellow-600 bg-yellow-50'
  },
  {
    icon: Heart,
    title: 'Authentic Experiences',
    description: 'Discover hidden gems and local stories you won\'t find in any guidebook.',
    color: 'text-red-600 bg-red-50'
  }
]
export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Travel with Confidence and Curiosity
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We&rsquo;re building a community of trust where travelers can connect with locals safely and meaningfully.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-start">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-4`}>
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Image/Illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800" 
                alt="Travelers with guide" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-gray-900 ">
                  10k+ Happy Travelers
                </div>
              </div>
              <div className="flex items-center text-yellow-400 gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-gray-400 text-xs ml-2 font-medium">4.9/5 Average</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}