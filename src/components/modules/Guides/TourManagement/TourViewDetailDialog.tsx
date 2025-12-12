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
import { formatDateTime } from "@/lib/formatters";
import { ITour } from "@/types/tour.interface";
import { Calendar, Languages, MapPin, DollarSign } from "lucide-react";

interface ITourViewDialogProps {
  open: boolean;
  onClose: () => void;
  tour: ITour | null;
}

const TourViewDetailDialog = ({ open, onClose, tour }: ITourViewDialogProps) => {
  if (!tour) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Tour Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Tour Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg mb-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              {tour.images?.[0] ? (
                <AvatarImage src={tour.images[0]} alt={tour.title} />
              ) : (
                <AvatarFallback className="text-2xl">T</AvatarFallback>
              )}
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">{tour.title}</h2>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-2">
                <Badge variant={tour.isDeleted ? "destructive" : "default"}>
                  {tour.isDeleted ? "Inactive" : "Active"}
                </Badge>

                <Badge variant="secondary">
                  {tour.category || "Uncategorized"}
                </Badge>
              </div>
            </div>
          </div>

          {/* Tour Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-lg">Location & Pricing</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow label="Location" value={tour.location || "N/A"} />
                <InfoRow label="Price" value={tour.price ? `${tour.price} BDT` : "N/A"} />
                <InfoRow label="Max Group Size" value={tour.maxGroupSize || "N/A"} />
                <InfoRow label="Duration" value={tour.duration || "N/A"} />
              </div>
            </div>

            <Separator />

            {/* Languages */}
            {tour.language && tour.language?.length > 0 && (
              <>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Languages className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-lg">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tour.language.map((lang, idx) => (
                      <Badge key={idx} variant="outline" className="px-4 py-2 text-sm">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
              </>
            )}

            {/* Meta Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-lg">Record Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow label="Created At" value={formatDateTime(tour.createdAt)} />
                <InfoRow label="Last Updated" value={formatDateTime(tour.updatedAt)} />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourViewDetailDialog;
