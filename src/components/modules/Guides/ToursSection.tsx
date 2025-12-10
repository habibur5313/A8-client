import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Clock, Users, ArrowRight } from 'lucide-react'
export function ToursSection() {
  const tours = [
    {
      id: 1,
      title: "Hidden Secrets of Florence Walking Tour",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop",
      duration: "3 hours",
      groupSize: "Max 8",
      price: "€45",
      rating: "5.0"
    },
    {
      id: 2,
      title: "Chianti Wine Tasting & Vineyard Lunch",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070&auto=format&fit=crop",
      duration: "6 hours",
      groupSize: "Max 6",
      price: "€120",
      rating: "4.9"
    },
    {
      id: 3,
      title: "Uffizi Gallery Masterpieces Skip-the-Line",
      image: "https://images.unsplash.com/photo-1580253749810-b98a87648319?q=80&w=2070&auto=format&fit=crop",
      duration: "2.5 hours",
      groupSize: "Max 10",
      price: "€65",
      rating: "4.9"
    }
  ]
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-stone-900">Popular Tours</h2>
        <Button variant="ghost" size="sm" className="text-teal-700">View all</Button>
      </div>
      
      <div className="space-y-4">
        {tours.map((tour) => (
          <Card key={tour.id}  className="flex p-0 flex-col sm:flex-row overflow-hidden group hover:shadow-md transition-all duration-300">
            <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden">
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-teal-700 transition-colors">{tour.title}</h3>
                  <span className="flex items-center text-sm font-bold text-stone-900 bg-stone-100 px-2 py-1 rounded">
                    ★ {tour.rating}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="text-xs text-stone-500 uppercase font-semibold">From</span>
                  <div className="text-xl font-bold text-teal-700">{tour.price} <span className="text-sm font-normal text-stone-500">/ person</span></div>
                </div>
                <Button variant="outline" size="sm" className="group-hover:bg-teal-50 group-hover:border-teal-200">
                  Details <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}