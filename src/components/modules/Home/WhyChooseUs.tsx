import { Shield, Zap, Globe, Heart, TrendingUp, Users } from 'lucide-react';
export function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: 'Instant Personalization',
      description: 'AI-powered recommendations tailored to your unique preferences in seconds',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: '500+ cities worldwide with constantly updated local insights',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Trusted & Safe',
      description: 'Verified recommendations from millions of real traveler experiences',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'Local Favorites',
      description: 'Discover hidden gems that only locals know about',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: TrendingUp,
      title: 'Always Updated',
      description: 'Real-time data ensures you never miss what\'s trending',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join 2M+ travelers sharing their experiences',
      color: 'from-indigo-500 to-purple-500',
    },
  ];
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose TravelAI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The smartest way to explore the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of travelers discovering the world with AI-powered guides
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}