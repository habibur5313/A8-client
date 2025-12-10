/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';              
import { Guide } from '@/fakedata/mockGuides';
interface GuideCardProps {
  guide: Guide;
}
export function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="group flex flex-col rounded-xl bg-white p-5 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={guide.imageUrl} 
            alt={guide.name} 
            className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{guide.name}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-0.5">
              <MapPin className="mr-1 h-3.5 w-3.5 text-teal-500" />
              {guide.location}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-teal-600">${guide.pricePerHour}</div>
          <div className="text-xs text-gray-500">per hour</div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center rounded bg-yellow-50 px-2 py-1">
          <Star className="mr-1 h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold text-gray-900">{guide.rating}</span>
        </div>
        <span className="text-xs text-gray-500">({guide.reviewCount} reviews)</span>
        <span className="mx-1 text-gray-300">•</span>
        <span className="text-xs font-medium text-gray-600">{guide.category}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {guide.languages.slice(0, 3).map((lang : any) => (
          <Badge key={lang} variant="secondary">
            {lang}
          </Badge>
        ))}
        {guide.languages.length > 3 && (
          <Badge variant="outline">+{guide.languages.length - 3}</Badge>
        )}
      </div>
      <p className="mt-4 line-clamp-2 text-sm text-gray-600">
        {guide.bio}
      </p>
      <div className="mt-5 pt-4 border-t border-gray-50">
        <Button  variant="outline" className="group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-200 transition-colors">
          View Profile
        </Button>
      </div>
    </div>
  );
}