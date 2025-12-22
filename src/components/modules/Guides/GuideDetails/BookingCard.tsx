/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AddReviewForm from "./AddReviewForm";

export default function BookingCard({ guide }: any) {
  return (
    <Card className="shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">৳ {guide?.guideFee}</h2>
        <p className="text-muted-foreground">per day</p>

        <Button className="w-full">Request to Book</Button>

        {/* REVIEW FORM */}
        <AddReviewForm guideId={guide?.id} />
      </CardContent>
    </Card>
  );
}
