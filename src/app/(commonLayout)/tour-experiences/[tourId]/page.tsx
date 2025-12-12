import { Clock, Users, Globe, MapPin, Share2, Heart } from "lucide-react";
import { IReview, ITour } from "@/types/tour.interface";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/badge";
import { ImageSlider } from "@/components/ui/ImageSlider";
import { Avatar } from "@/components/ui/Avatar2";
import { ItineraryTimeline } from "@/components/ui/ItineraryTimeline";
import { ReviewCard } from "@/components/modules/TourExperiences/TourDetails/ReviewCard";
import { BookingWidget } from "@/components/modules/TourExperiences/TourDetails/BookingWidget";
const TOUR_DETAILS: ITour = {
  id: "t1",
  title: "Hidden Gems of Kyoto: Old Streets, Temples & Tea Ceremony",
  image: "",
  images: [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?auto=format&fit=crop&q=80&w=1200",
  ],
  price: 85,
  rating: 4.9,
  reviewCount: 243,
  duration: "5 hours",
  category: "Culture",
  guide: {
    id: "g2",
    name: "Yuki Tanaka",
    avatar: "https://i.pravatar.cc/150?u=yuki",
  },
  location: "Kyoto, Japan",
  maxGroupSize: 8,
  language: ["English", "Japanese"],
  description:
    "Step back in time as we explore the preserved districts of Higashiyama and Gion. We'll visit secret temples away from the crowds, walk through bamboo groves, and end with a traditional tea ceremony in a private garden. This tour is designed for those who want to understand the deep spiritual and cultural roots of Kyoto.",
};
const ITINERARY = [
  {
    time: "09:00 AM",
    title: "Meeting Point",
    description:
      "Meet at Sanjo Station, Exit 4. Look for the guide with the blue umbrella.",
  },
  {
    time: "09:30 AM",
    title: "Hidden Temples",
    description:
      "Visit a 400-year-old Zen temple that most tourists miss. Learn about meditation practices.",
  },
  {
    time: "11:00 AM",
    title: "Gion District Walk",
    description:
      "Explore the geisha district, learn about the architecture and history of the tea houses.",
  },
  {
    time: "12:30 PM",
    title: "Local Lunch",
    description:
      "Enjoy a traditional Kyoto-style lunch (Kaiseki lite) at a local restaurant.",
  },
  {
    time: "02:00 PM",
    title: "Tea Ceremony",
    description: "Private tea ceremony experience with a tea master.",
  },
];
const REVIEWS: IReview[] = [
  {
    id: "r1",
    authorName: "Michael Brown",
    authorAvatar: "https://i.pravatar.cc/150?u=michael",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Yuki was an amazing guide! The tea ceremony was the highlight of our trip to Japan. Highly recommended.",
  },
  {
    id: "r2",
    authorName: "Emma Davis",
    authorAvatar: "https://i.pravatar.cc/150?u=emma",
    rating: 4,
    date: "1 month ago",
    comment:
      "Great tour, very informative. A bit of walking involved so wear comfortable shoes.",
  },
];
export default function TourDetails({ tourId }: { tourId: string }) {
  console.log("Tour ID:", tourId); // For debugging purposes
  return (
    <div className="min-h-screen bg-gray-50 pb-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs could go here */}

        {/* Title Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {TOUR_DETAILS.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {TOUR_DETAILS.location}
                </span>
                <Rating
                  rating={TOUR_DETAILS.rating}
                  count={TOUR_DETAILS.reviewCount}
                />
                <Badge>{TOUR_DETAILS.category}</Badge>
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
        </div>
        {/* Image Gallery */}
        <div className="h-[400px] md:h-[500px] mb-8">
          <ImageSlider
            images={TOUR_DETAILS.images || []}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-10">
            {/* Key Info */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center text-center p-2">
                <Clock className="h-6 w-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold">
                  Duration
                </span>
                <span className="font-medium text-gray-900">
                  {TOUR_DETAILS.duration}
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-2 border-l border-gray-100">
                <Users className="h-6 w-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold">
                  Group Size
                </span>
                <span className="font-medium text-gray-900">
                  Max {TOUR_DETAILS.maxGroupSize}
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-2 border-l border-gray-100">
                <Globe className="h-6 w-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold">
                  Languages
                </span>
                <span className="font-medium text-gray-900">
                  {TOUR_DETAILS.language?.join(", ")}
                </span>
              </div>
            </div>
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About this tour
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {TOUR_DETAILS.description}
              </p>
            </section>
            {/* Guide Info */}
            <section className="bg-blue-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Avatar
                  src={TOUR_DETAILS.guide.avatar}
                  alt={TOUR_DETAILS.guide.name}
                  size="lg"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Guided by {TOUR_DETAILS.guide.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">
                    Certified Local Guide
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                I love sharing the hidden stories of my city. Join me for an
                unforgettable experience!
              </p>
              <button className="text-blue-700 font-bold text-sm hover:underline">
                View Profile
              </button>
            </section>
            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Itinerary
              </h2>
              <ItineraryTimeline steps={ITINERARY} />
            </section>
            {/* Meeting Point Map Placeholder */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Meeting Point
              </h2>
              <div className="h-64 bg-gray-200 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-red-500" />
                    <div>
                      <p className="font-bold text-gray-900">
                        Sanjo Station, Exit 4
                      </p>
                      <p className="text-xs text-gray-500">Kyoto, Japan</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Reviews */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Reviews ({TOUR_DETAILS.reviewCount})
              </h2>
              <div className="space-y-4">
                {REVIEWS.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </section>
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <BookingWidget price={TOUR_DETAILS.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
