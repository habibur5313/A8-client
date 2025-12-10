import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
interface BookingWidgetProps {
  price: number
  priceLabel?: string
  type?: 'tour' | 'guide'
}
export function BookingWidget({ price, priceLabel = "/ person", type = 'tour' }: BookingWidgetProps) {
  return (
    <Card className="p-6 sticky top-24 shadow-xl border-blue-100">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-500 text-sm">{priceLabel}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available now
        </div>
      </div>
      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Date</label>
            <Input type="date" className="w-full" />
          </div>
          {type === 'tour' && (
            <>
              <div>
                <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Time</label>
                <select className="w-full h-10 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>09:00 AM</option>
                  <option>01:00 PM</option>
                  <option>04:00 PM</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Guests</label>
                <select className="w-full h-10 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl">
        <div className="flex justify-between text-sm text-gray-600">
          <span>${price} x 2 guests</span>
          <span>${price * 2}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Service fee</span>
          <span>$15</span>
        </div>
        <div className="pt-3 border-t border-gray-200 flex justify-between font-bold text-gray-900">
          <span>Total</span>
          <span>${price * 2 + 15}</span>
        </div>
      </div>
      <Button size="lg" className="w-full text-base font-bold shadow-lg shadow-blue-200">
        Request to Book
      </Button>
      
      <p className="text-center text-xs text-gray-500 mt-4">
        You wont be charged yet
      </p>
    </Card>
  )
}