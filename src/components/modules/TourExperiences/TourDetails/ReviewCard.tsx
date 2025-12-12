/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/Avatar2';
import { Rating } from '@/components/ui/Rating';

export function ReviewCard({ review }: any) {
  return (
    <Card className="p-6 bg-gray-50/50 border-none">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar src={review.authorAvatar} alt={review.authorName} />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">{review.authorName}</h4>
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
        </div>
        <Rating rating={review.rating} showCount={false} />
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
    </Card>
  );
}
