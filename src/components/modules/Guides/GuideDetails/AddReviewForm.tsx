"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

export default function AddReviewForm({ guideId }: { guideId: string }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="border-t pt-4 space-y-3">
      <h3 className="font-semibold">Leave a Review</h3>

      {/* RATING */}
      <div className="flex gap-1">
        {[1,2,3,4,5].map((r) => (
          <Star
            key={r}
            onClick={() => setRating(r)}
            className={`w-5 h-5 cursor-pointer ${
              rating >= r
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>

      {/* COMMENT */}
      <Textarea
        placeholder="Write your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button className="w-full">Submit Review</Button>
    </div>
  );
}
