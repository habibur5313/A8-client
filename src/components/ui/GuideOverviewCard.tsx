import { IGuide } from "@/types/guide.interface";
import { MapPin, Star, Award, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/formatters";

interface GuideOverviewProps {
  guide: IGuide;
}

export function GuideOverviewCard({ guide }: GuideOverviewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
      {/* Header Banner */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-emerald-400 relative">
        <div className="absolute -bottom-12 left-6">
          <Avatar className="h-32 w-32">
                  { guide?.profile?.profilePhoto ? (
                    <AvatarImage
                      src={ (guide?.profile?.profilePhoto as string)}
                      alt={guide?.profile?.name || "Unknown user"}
                    />
                  ) : (
                    <AvatarFallback className="text-3xl">
                      {getInitials(guide?.profile?.name || "Unknown user")}
                    </AvatarFallback>
                  )}
                </Avatar>
        </div>
      </div>

      {/* Content */}
      <div className="pt-14 px-6 pb-6">
        {/* Name + Rating + Fee */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{guide.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center text-orange-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 font-bold text-slate-900">
                  {guide.profile.averageRating}
                </span>
              </div>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 text-sm">
                {guide.profile.totalReviews} reviews
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
              Rate
            </p>
            <p className="text-xl font-bold text-emerald-600">
              {guide.profile.guideFee} bdt/day 
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-3">
          <InfoItem
            icon={<MapPin className="w-4 h-4 text-blue-500" />}
            label={
              <>
                Based in{" "}
                <span className="font-medium text-slate-900">
                  {guide.profile.district}
                </span>
              </>
            }
          />

          <InfoItem
            icon={<Award className="w-4 h-4 text-purple-500" />}
            label={`${guide.profile.experience} Years Experience`}
          />

          <InfoItem
            icon={<Globe className="w-4 h-4 text-emerald-500" />}
            label={
              <div className="flex flex-wrap gap-1">
                {guide?.profile.languages?.length > 0 ? (
                  guide.profile.languages.map((lang, index) => (
                    <span key={lang} className="text-slate-900 font-medium">
                      {lang}
                      {index !== guide.profile.languages.length - 1 ? "," : ""}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400">No languages listed</span>
                )}
              </div>
            }
          />
        </div>

        {/* Skills Section */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {guide?.profile.skills?.length > 0 ? (
              guide.profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-xs font-medium border border-slate-200 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-slate-400 text-sm">No skills listed</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small reusable component for cleaner layout */
function InfoItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-slate-600 text-sm">
      {icon}
      <span>{label}</span>
    </div>
  );
}