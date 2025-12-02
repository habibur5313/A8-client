import { Search, Sparkles, Map, CheckCircle } from 'lucide-react';
export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Tell Us Your Dream',
      description: 'Share your destination, interests, and travel style with our AI',
      color: 'from-blue-500 to-cyan-500',
      delay: '0ms',
    },
    {
      icon: Sparkles,
      title: 'AI Creates Magic',
      description: 'Our intelligent system analyzes millions of data points to craft your perfect itinerary',
      color: 'from-purple-500 to-pink-500',
      delay: '200ms',
    },
    {
      icon: Map,
      title: 'Explore & Enjoy',
      description: 'Follow your personalized guide and discover amazing experiences',
      color: 'from-orange-500 to-red-500',
      delay: '400ms',
    },
  ];
  return (
    <section id="how" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From dream to reality in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative"
                style={{ animationDelay: step.delay }}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                      <span className="text-sm font-bold text-gray-900">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2">
            Start Your Journey
            <CheckCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}