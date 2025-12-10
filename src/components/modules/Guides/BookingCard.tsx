import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, MessageCircle, CheckCircle2, Users } from 'lucide-react'
export function BookingCard() {
  return (
    <div className="sticky top-8">
      <Card className="shadow-lg p-4 border-teal-100 ring-1 ring-teal-50">
        <div className="mb-6">
          <span className="text-stone-500 text-sm font-medium">Daily Rate</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-stone-900">€250</span>
            <span className="text-stone-500">/ day</span>
          </div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="p-3 border border-stone-200 rounded-xl flex items-center gap-3 cursor-pointer hover:border-teal-500 transition-colors bg-white">
            <Calendar className="w-5 h-5 text-teal-600" />
            <div className="flex-1">
              <div className="text-xs text-stone-500 font-semibold uppercase">Select Dates</div>
              <div className="text-stone-900 font-medium">Check availability</div>
            </div>
          </div>
          
          <div className="p-3 border border-stone-200 rounded-xl flex items-center gap-3 cursor-pointer hover:border-teal-500 transition-colors bg-white">
            <Users className="w-5 h-5 text-teal-600" />
            <div className="flex-1">
              <div className="text-xs text-stone-500 font-semibold uppercase">Guests</div>
              <div className="text-stone-900 font-medium">2 Adults</div>
            </div>
          </div>
        </div>
        <div className="space-x-3">
          <Button  size="lg" className="bg-teal-700 hover:bg-teal-800 shadow-teal-200 shadow-lg">
            Request to Book
          </Button>
          <Button  variant="outline" className="border-stone-200 hover:bg-stone-50">
            <MessageCircle className="w-4 h-4 mr-2" />
            Message Guide
          </Button>
        </div>
        <div className="mt-6 pt-6 border-t border-stone-100">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>Free cancellation up to 24h before</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>Instant confirmation</span>
          </div>
        </div>
      </Card>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-stone-400">
          Report this profile
        </p>
      </div>
    </div>
  )
}