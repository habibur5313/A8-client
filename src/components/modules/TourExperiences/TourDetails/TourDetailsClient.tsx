/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Clock, Users, Globe, MapPin, Share2, Heart } from 'lucide-react';
import { BookingWidget } from './BookingWidget';
import { ReviewCard } from './ReviewCard';
import { Badge } from '@/components/ui/badge';
import { ImageSlider } from '@/components/ui/ImageSlider';
import { Rating } from '@/components/ui/Rating';
import { createBooking } from '@/services/tourist/bookGuideManagement';
import {  Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/formatters';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function TourDetailsClient({ tour }: any) {

  const router = useRouter()

  const handleBooking = async (date: string) => {
    if (!date) {
      alert('Please select a date!');
      return;
    }

    const formData = new FormData();
    formData.append('listingId', tour.id);
    formData.append('bookingDate', date);

    const result = await createBooking(null, formData);
    if (result.success) {
      toast.success("booking successfully")
      router.push("/payment")

    }
    else alert('Booking failed: ' + result.message);
  };

  const reviews = tour?.guide?.reviews || [];
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title and actions */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{tour?.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {tour?.location}
              </span>
              <Rating rating={averageRating} count={reviews.length} />
              <Badge>{tour?.category}</Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="h-[400px] md:h-[500px] mb-8">
          <ImageSlider images={Array.isArray(tour?.image) ? tour.image : [tour?.image]} className="h-full w-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1 space-y-10">
            {/* Tour info */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center text-center p-2">
                <Clock className="h-6 w-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold">Duration</span>
                <span className="font-medium text-gray-900">{tour?.duration}</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 border-l border-gray-100">
                <Users className="h-6 w-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold">Group Size</span>
                <span className="font-medium text-gray-900">Max {tour?.maxGroupSize}</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 border-l border-gray-100">
                <Globe className="h-6 w-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold">Languages</span>
                <span className="font-medium text-gray-900">{tour?.language.join(', ')}</span>
              </div>
            </div>

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this tour</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{tour?.description}</p>
            </section>

            {/* Guide info */}
            <section className="bg-blue-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                {/* <Avatar src={tour?.guide?.profilePhoto || ''} alt={tour?.guide?.name || ''} size="lg" /> */}
                <Avatar className="h-32 w-32">
                  { tour?.guide?.profilePhoto ? (
                    <AvatarImage
                      src={ (tour?.guide?.profilePhoto as string)}
                      alt={tour?.guide?.name || "Unknown user"}
                    />
                  ) : (
                    <AvatarFallback className="text-3xl">
                      {getInitials(tour?.guide?.name || "Unknown user")}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Guided by {tour?.guide?.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">Certified Local Guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                I love sharing the hidden stories of my city. Join me for an unforgettable experience!
              </p>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews ({reviews.length})</h2>
              <div className="space-y-4">
                {reviews.map((review: any) => (
                  <ReviewCard
                    key={review.id}
                    review={{
                      id: review.id,
                      authorName: 'Anonymous',
                      authorAvatar: '',
                      rating: review.rating,
                      date: new Date(review.createdAt).toLocaleDateString(),
                      comment: review.comment,
                    }}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Booking sidebar */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <BookingWidget
              price={tour?.price}
              onBooking={(date: string) => handleBooking(date)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
