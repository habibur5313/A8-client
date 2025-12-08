import { Calendar, CheckCircle, Clock, Plane } from 'lucide-react'
const trips = [
  {
    id: 1,
    destination: 'Kyoto, Japan',
    dates: 'Oct 15 - Oct 22, 2023',
    status: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    flight: 'JL 405',
    hotel: 'The Ritz-Carlton'
  },
  {
    id: 2,
    destination: 'Reykjavík, Iceland',
    dates: 'Dec 10 - Dec 18, 2023',
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80',
    flight: 'FI 602',
    hotel: 'Ion Adventure Hotel'
  }
]
export function UpcomingTrips() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Upcoming Trips</h2>
        <button className="text-teal-600 font-medium hover:text-teal-700 hover:underline">
          View all trips
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trips.map((trip) => (
          <div 
            key={trip.id} 
            className="group bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4"
          >
            <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img 
                src={trip.image} 
                alt={trip.destination} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">{trip.destination}</h3>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                  trip.status === 'Confirmed' 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : 'bg-orange-50 text-orange-700 border-orange-200'
                }`}>
                  {trip.status}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-teal-500" />
                  <span>{trip.dates}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-400" />
                    <span>{trip.flight}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="truncate max-w-[120px]">{trip.hotel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Add New Trip Button */}
        <button className="border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-gray-400 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50/50 transition-all min-h-[160px]">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-white">
            <Plane className="w-6 h-6" />
          </div>
          <span className="font-medium">Plan a new trip</span>
        </button>
      </div>
    </section>
  )
}