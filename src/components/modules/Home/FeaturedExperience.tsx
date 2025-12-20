import { Utensils, Camera, Mountain, Globe, ArrowRight } from 'lucide-react'
const categories = [
  {
    title: 'Food Tours',
    icon: Utensils,
    count: '320+ Tours',
    gradient: 'from-orange-400 to-yellow-400',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Photography Walks',
    icon: Camera,
    count: '150+ Tours',
    gradient: 'from-blue-400 to-teal-400',
    image: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Mountain Trails',
    icon: Mountain,
    count: '210+ Tours',
    gradient: 'from-green-400 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'History & Culture',
    icon: Globe,
    count: '450+ Tours',
    gradient: 'from-purple-500 to-indigo-500',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600'
  }
]
export function FeaturedExperiences() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Experiences</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Browse tours by your specific interests.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-90`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center">
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <p className="text-white/90 font-medium text-sm mb-1">{cat.count}</p>
                  <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
                  <div className="flex items-center text-sm font-bold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}