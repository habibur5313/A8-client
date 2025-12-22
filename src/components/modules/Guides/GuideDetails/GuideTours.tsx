/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { IBooking } from "@/types/booking.interface";

interface GuideToursProps {
  bookings: IBooking[];
}

export default function GuideTours({ bookings }: GuideToursProps) {
  const tours = bookings
    .map((booking) => booking.listing)
    .filter((listing) => listing && !listing.isDeleted);

  if (tours.length === 0) return null;


  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Popular Tours</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <Link href={`/tour-experiences/${tour.id}`} key={tour.id}>
            <Card
            className="overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={tour?.image || "/tour-placeholder.jpg"}
              alt={tour?.title}
              width={500}
              height={300}
              className="h-48 w-full object-cover"
            />

            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold text-lg line-clamp-1">
                {tour?.title}
              </h3>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {tour?.description}
              </p>

              <div className="flex justify-between items-center pt-2">
                <Badge variant="outline">{tour?.category}</Badge>
                <span className="font-semibold">৳ {tour?.price}</span>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
