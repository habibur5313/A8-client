import { Sparkles, Zap, Brain, TrendingUp } from 'lucide-react';
export function AIGuides() {
  const guides = [
    {
      title: 'Hidden Gems Explorer',
      description: 'Discover secret spots locals love',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/50',
    },
    {
      title: 'Foodie Adventure',
      description: 'Curated culinary experiences',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/50',
    },
    {
      title: 'Culture & History',
      description: 'Deep dive into local heritage',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/50',
    },
    {
      title: 'Trending Now',
      description: 'What\'s hot in the city',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500',
      glow: 'shadow-green-500/50',
    },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Powered by AI</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Intelligent Travel Guides
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our AI analyzes millions of reviews, local insights, and real-time data to create personalized guides just for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <div
                key={guide.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${guide.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${guide.glow}`} />
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-gray-600 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-r ${guide.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400">
                    {guide.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-gray-800" />
                      ))}
                    </div>
                    <span>12k+ travelers</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}