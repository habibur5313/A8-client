'use client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface BookingWidgetProps {
  price: number;
  priceLabel?: string;
  onBooking?: (date: string) => void; // will receive ISO string
}

export function BookingWidget({ price, priceLabel = '/ person', onBooking }: BookingWidgetProps) {
  const [date, setDate] = useState('');

  // Convert normal date (YYYY-MM-DD) → ISO datetime string
  const convertToISO = (d: string) => {
    if (!d) return '';
    const iso = new Date(d).toISOString(); // auto converts to ISO with timezone
    return iso;
  };

  const handleBooking = () => {
    const isoDate = convertToISO(date);
    onBooking && onBooking(isoDate);
  };

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
        <div>
          <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Date</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-bold shadow-lg shadow-blue-200"
        onClick={handleBooking}
      >
        Request to Book
      </Button>

      <p className="text-center text-xs text-gray-500 mt-4">You won’t be charged yet</p>
    </Card>
  );
}
