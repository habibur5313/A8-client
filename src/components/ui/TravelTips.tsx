import { AlertTriangle, Info, Lightbulb } from 'lucide-react'
const tips = [
  {
    id: 1,
    type: 'info',
    title: 'Visa Requirement',
    message: 'Remember to check visa requirements for Japan at least 2 weeks before travel.',
    icon: Info,
    color: 'blue'
  },
  {
    id: 2,
    type: 'warning',
    title: 'Weather Alert',
    message: 'Heavy rain expected in Paris tomorrow evening. Pack an umbrella!',
    icon: AlertTriangle,
    color: 'orange'
  },
  {
    id: 3,
    type: 'tip',
    title: 'Local Tip',
    message: 'Try the metro for faster travel during rush hours (8-10 AM).',
    icon: Lightbulb,
    color: 'green'
  }
]
export function TravelTips() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Alerts & Tips</h2>
      <div className="space-y-4">
        {tips.map((tip) => (
          <div 
            key={tip.id}
            className={`flex gap-4 p-4 bg-white rounded-xl border-l-4 shadow-sm hover:shadow-md transition-shadow cursor-default
              ${tip.color === 'blue' ? 'border-blue-500' : ''}
              ${tip.color === 'orange' ? 'border-orange-500' : ''}
              ${tip.color === 'green' ? 'border-green-500' : ''}
            `}
          >
            <div className={`p-2 rounded-full h-fit
              ${tip.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
              ${tip.color === 'orange' ? 'bg-orange-50 text-orange-600' : ''}
              ${tip.color === 'green' ? 'bg-green-50 text-green-600' : ''}
            `}>
              <tip.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{tip.title}</h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">{tip.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}