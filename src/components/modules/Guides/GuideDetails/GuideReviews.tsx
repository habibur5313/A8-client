/* eslint-disable @typescript-eslint/no-explicit-any */
import { IReview } from "@/types/tour.interface";
import { Star } from "lucide-react";

export default function GuideReviews({ reviews }: {reviews: IReview[]}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">What Travelers Say</h2>

      <div className="space-y-4">
        {reviews.map((review: any, i: number) => (
          <div key={i} className="border rounded-lg p-4">
            <div className="flex justify-between">
              <p className="font-medium">{review.tourist.name}</p>
              <div className="flex gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {review.rating}
              </div>
            </div>

            <p className="text-muted-foreground mt-2">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
