import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, Clock, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ITour } from '@/types/tour.interface';

export function TourCard({ tour }: { tour: ITour }) {
  console.log(tour)
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all group">
      <div className="relative h-52">
        <Image
          src={tour.image || '/placeholder.jpg'}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
        <Badge className="absolute top-3 left-3">{tour.category}</Badge>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1">
          {tour.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {tour.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" /> Max {tour.maxGroupSize}
          </span>
        </div>

        

          <Link href={`/gguide/${tour.guide.id}`} className='flex justify-between items-center'>
            <div className="flex items-center">
            <img 
              src={tour.guide.avatar} 
              alt={tour.guide.name} 
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm mr-2 object-cover"
            />
            <div className="flex flex-col">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Guide</span>
              <span className="text-xs font-medium text-stone-700">{tour.guide.name}</span>
            </div>
          </div>
          <div className="flex items-center mb-4 space-x-1">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold text-stone-900 dark:text-white">{(tour?.guide?.averageRating).toFixed(1)}</span>
          <span className="text-sm text-stone-400 dark:text-stone-300">({tour?.guide?.totalReviews})</span>
        </div>
          </Link>

        <div className="flex items-center justify-between pt-4">
          <p className="font-bold text-lg">${tour.price}</p>
          <Link
            href={`/tour-experiences/${tour.id}`}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </Card>
  );
}
