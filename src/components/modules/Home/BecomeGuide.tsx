import { ArrowRight } from 'lucide-react'
export function BecomeGuide() {
  return (
    <section className="py-20 px-6 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600" 
              alt="Group of friends" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
          </div>
          <div className="relative z-10 p-12 md:p-20 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400 text-yellow-900 font-bold text-sm mb-6">
              Join the Community
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Share Your City, <br />
              <span className="text-yellow-400">Earn Money</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Become a local guide and turn your passion for your city into a rewarding career. Set your own schedule, meet people from around the world, and get paid to share what you love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-yellow-400 text-yellow-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
                Sign Up as a Guide
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}