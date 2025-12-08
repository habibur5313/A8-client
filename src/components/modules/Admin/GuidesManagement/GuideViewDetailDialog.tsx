"use client";

import InfoRow from "@/components/shared/InoRow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { formatDateTime, getInitials } from "@/lib/formatters";
import { IGuide } from "@/types/guide.interface";
import {
  Briefcase,
  Calendar,
  Languages,
  Mail,
  Phone,
  Star,
  Award,
  ShieldCheck,
} from "lucide-react";

interface IGuideViewDialogProps {
  open: boolean;
  onClose: () => void;
  guide: IGuide | null;
}

const GuideViewDetailDialog = ({ open, onClose, guide }: IGuideViewDialogProps) => {
  if (!guide) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Guide Profile</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg mb-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src={guide.profilePhoto || undefined} alt={guide.name} />
              <AvatarFallback className="text-2xl">
                {getInitials(guide.name)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">{guide.name}</h2>

              <p className="text-muted-foreground mb-2 flex items-center justify-center sm:justify-start gap-2">
                <Mail className="h-4 w-4" />
                {guide.email}
              </p>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge variant={guide.isDeleted ? "destructive" : "default"}>
                  {guide.isDeleted ? "Inactive" : "Active"}
                </Badge>

                <Badge variant={guide.isAvailable ? "secondary" : "outline"}>
                  {guide.isAvailable ? "Available" : "Unavailable"}
                </Badge>

                {guide.isVerified && (
                  <Badge className="bg-green-600 text-white flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" /> Verified ID
                  </Badge>
                )}

                {guide.averageRating > 0 && (
                  <Badge variant="secondary" className="text-sm">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {guide.averageRating.toFixed(1)} Rating
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Information Sections */}
          <div className="space-y-6">
            {/* Professional Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-lg">Professional Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow label="Experience" value={`${guide.experience} years`} />

                <InfoRow label="Guide Fee" value={`${guide.guideFee} BDT`} />

                <InfoRow
                  label="Qualification"
                  value={guide.qualification || "Not specified"}
                />

                <InfoRow
                  label="Registration Number"
                  value={guide.registrationNumber || "Not specified"}
                />

                <InfoRow
                  label="Current Working Place"
                  value={guide.currentWorkingPlace || "Not specified"}
                />
              </div>
            </div>

            <Separator />

            {/* Languages */}
            {guide.languages?.length > 0 && (
              <>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Languages className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-lg">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.languages.map((lang, idx) => (
                      <Badge key={idx} variant="outline" className="px-4 py-2 text-sm">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
              </>
            )}

            {/* Skills */}
            {guide.skills?.length > 0 && (
              <>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-lg">Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="px-4 py-2 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
              </>
            )}

            {/* Contact Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Phone className="h-5 w-5 text-orange-600" />
                <h3 className="font-semibold text-lg">Contact Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow label="Contact Number" value={guide.contactNumber} />

                <InfoRow label="Email" value={guide.email} />

                <div className="md:col-span-2">
                  <InfoRow label="Address" value={guide.address || "Not provided"} />
                </div>
              </div>
            </div>

            <Separator />

            {/* Meta Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-lg">Record Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow
                  label="Joined On"
                  value={formatDateTime(guide.createdAt)}
                />

                <InfoRow
                  label="Last Updated"
                  value={formatDateTime(guide.updatedAt)}
                />

                <InfoRow label="Total Reviews" value={guide.totalReviews} />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuideViewDetailDialog;
