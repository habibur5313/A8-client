import { motion } from 'framer-motion';
import { Star, Heart, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export interface Tour {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  duration: string;
  guide: {
    name: string;
    avatar: string;
  };
  category: string;
}
interface TourCardProps {
  tour: Tour;
  index: number;
}
export function TourCard({ tour, index }: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-stone-400 hover:text-rose-500 hover:bg-white transition-colors shadow-sm">
            <Heart size={18} />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-semibold text-stone-800 shadow-sm">
            {tour.category}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-xs text-stone-500 font-medium">
            <MapPin size={14} className="mr-1 text-teal-600" />
            {tour.location}
          </div>
          <div className="flex items-center text-xs text-stone-500">
            <Clock size={14} className="mr-1" />
            {tour.duration}
          </div>
        </div>
        <h3 className="text-lg font-bold text-stone-900 mb-2 line-clamp-2 group-hover:text-teal-700 transition-colors">
          {tour.title}
        </h3>
        <div className="flex items-center mb-4 space-x-1">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold text-stone-900">{tour.rating}</span>
          <span className="text-sm text-stone-400">({tour.reviews})</span>
        </div>
        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          <Link href={`/guides/${tour.guide.name.replace(' ', '-').toLowerCase()}`}>
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
          </Link>
          
          <div className="text-right">
            <div className="text-xs text-stone-400">From</div>
            <div className="text-lg font-bold text-stone-900">${tour.price}</div>
          </div>
        </div>
        
        <div className="mt-4">
           <Link href={`/tour-experiences/${tour.id}`}>
            <Button 
              variant="outline" 
              className="w-full text-sm font-medium text-teal-700 border-teal-700 hover:bg-teal-700 hover:text-white transition-colors"
            >
              View Details
            </Button>
           </Link>
        </div>
      </div>
    </motion.div>
  );
}