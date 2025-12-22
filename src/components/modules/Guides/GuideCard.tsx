import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { getInitials } from "@/lib/formatters";
import { IGuideProfile } from "@/types/guide.interface";
import {
  Star,
  MapPin,
  Globe,
  BadgeCheck,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

interface GuideCardProps {
  guide: IGuideProfile;
}

export function GuideCard({ guide }: GuideCardProps) {
  const rating = guide.averageRating ?? 0;
  const reviewsCount = guide.reviews?.length ?? 0;

  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-border
        bg-background/80 backdrop-blur
        shadow-sm hover:shadow-2xl
        transition-all duration-300
      "
    >
      {/* TOP GRADIENT */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-sky-500/10 to-purple-500/10" />

      <div className="relative p-6 flex flex-col h-full">
        {/* HEADER */}
        <div className="flex gap-4 items-center">
          <Avatar className="h-20 w-20 border-2 border-white shadow">
            {guide.profilePhoto ? (
              <AvatarImage src={guide.profilePhoto} alt={guide.name} />
            ) : (
              <AvatarFallback className="text-xl">
                {getInitials(guide.name)}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-1">
              <h3 className="text-lg font-bold">{guide.name}</h3>
              {guide.isVerified && (
                <BadgeCheck className="w-5 h-5 text-blue-500" />
              )}
            </div>

            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="w-4 h-4 mr-1 text-sky-500" />
              {guide.district}
            </div>

            <p className="text-xs text-muted-foreground mt-1">
              {guide.designation || "Professional Tour Guide"}
            </p>
          </div>
        </div>

        {/* RATING + STATUS */}
        <div className="flex items-center mt-4">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
          <span className="text-sm font-semibold">
            {rating > 0 ? rating.toFixed(1) : "New"}
          </span>

          <span className="text-xs text-muted-foreground ml-1">
            ({reviewsCount} reviews)
          </span>

          <span
            className={`ml-auto text-xs px-3 py-1 rounded-full font-medium
              ${
                guide.isAvailable
                  ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                  : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
              }`}
          >
            {guide.isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* INFO */}
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-indigo-500" />
            {guide.experience} years experience
          </div>

          <div className="flex items-center">
            <Globe className="w-4 h-4 mr-2 text-teal-500" />
            {guide.languages.join(", ")}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="text-2xl font-bold text-sky-500">
                ৳{guide.guideFee}
                <span className="text-sm font-normal text-muted-foreground">
                  /day
                </span>
              </p>
            </div>

            <Link href={`/gguide/${guide.id}`}>
              <button
                className="
                  px-4 py-2 rounded-xl text-sm font-semibold
                  bg-sky-500 text-white
                  hover:bg-sky-600
                  transition
                "
              >
                View Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
