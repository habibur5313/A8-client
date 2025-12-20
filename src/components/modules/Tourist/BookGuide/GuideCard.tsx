import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/formatters";
import { IGuideProfile } from "@/types/guide.interface";
import { Star, MapPin,  Globe, BadgeCheck, Briefcase, Languages } from "lucide-react";
import Link from "next/link";


interface GuideCardProps {
  guide: IGuideProfile;
}

export function ModernGuideCard({ guide }: GuideCardProps) {


  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden p-6 flex flex-col">
      
      {/* Header Section */}
      <div className="flex items-center gap-4">
        {/* <img
          src={guide.profilePhoto || "/placeholder-user.jpg"}
          alt={guide.name}
          className="w-20 h-20 rounded-xl object-cover border"
        /> */}
        <Avatar className="h-32 w-32">
                  { guide.profilePhoto ? (
                    <AvatarImage
                      src={(guide.profilePhoto as string)}
                      alt={guide.name || "Unknown user"}
                    />
                  ) : (
                    <AvatarFallback className="text-3xl">
                      {getInitials(guide.name || "Unknown user")}
                    </AvatarFallback>
                  )}
                </Avatar>

        <div className="flex-1">
          <div className="flex items-center gap-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{guide.name}</h3>
            {guide.isVerified && (
              <BadgeCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            )}
          </div>

          <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 text-sm">
            <MapPin className="w-4 h-4 mr-1 text-sky-600 dark:text-sky-400" />
            {guide.district}
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{guide.designation}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mt-4">
        <Star className="w-4 h-4 text-amber-400 dark:text-amber-400 fill-amber-400 dark:fill-amber-400 mr-1" />
        <span className="text-sm font-semibold">{guide.averageRating.toFixed(1)}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({guide?.reviews?.length} reviews)</span>
        {/* <span className="text-xs text-gray-500 ml-1">({guide.totalReviews} reviews)</span> */}

        {guide.isAvailable ? (
          <span className="ml-auto text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full">
            Available
          </span>
        ) : (
          <span className="ml-auto text-xs bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-3 py-1 rounded-full">
            Not Available
          </span>
        )}
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-400">
          <Briefcase className="w-4 h-4 mr-2 text-indigo-500 dark:text-indigo-400" />
          {guide.experience} years experience
        </div>

        <div className="flex items-center text-sm text-gray-700 dark:text-gray-400">
          <Globe className="w-4 h-4 mr-2 text-teal-500 dark:text-teal-400" />
          Speaks: {guide.languages.join(", ")}
        </div>

        <div className="flex items-center text-sm text-gray-700 dark:text-gray-400">
          <Languages className="w-4 h-4 mr-2 text-purple-500 dark:text-purple-400" />
          Skills: {guide.skills.join(", ")}
        </div>

        <div className="flex items-center text-sm text-gray-700 dark:text-gray-400">
          🎓 {guide.qualification}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <div className="text-right mb-4">
          <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">৳{guide.guideFee}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400"> / day</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href={`/gguide/${guide.id}`}>
          <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            View Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
