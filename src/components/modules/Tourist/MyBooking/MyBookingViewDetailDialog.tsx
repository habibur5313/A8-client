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
import { IBooking } from "@/types/booking.interface";
import { Calendar, User, Users } from "lucide-react";

interface IBookingViewDialogProps {
  open: boolean;
  onClose: () => void;
  booking: IBooking | null;
}

const MyBookingViewDetailDialog = ({
  open,
  onClose,
  booking,
}: IBookingViewDialogProps) => {
  if (!booking) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-4xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Booking Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Booking Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg mb-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              {booking.guide?.profilePhoto ? (
                <AvatarImage
                  src={booking.guide.profilePhoto}
                  alt={booking.guide.name}
                />
              ) : (
                <AvatarFallback className="text-2xl">G</AvatarFallback>
              )}
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">
                Guide: {booking.guide?.name}
              </h2>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-2">
                <Badge variant={booking.isDeleted ? "destructive" : "default"}>
                  {booking.isDeleted ? "Inactive" : "Active"}
                </Badge>

                <Badge variant="secondary">{booking.status}</Badge>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="space-y-6">
            {/* Tourist & Guide Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-lg">Tourist & Guide</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow
                  label="Tourist"
                  value={booking.tourist?.name || "N/A"}
                />
                <InfoRow label="Guide" value={booking.guide?.name || "N/A"} />
                <InfoRow
                  label="Tourist Email"
                  value={booking.tourist?.email || "N/A"}
                />
                <InfoRow
                  label="Guide Email"
                  value={booking.guide?.email || "N/A"}
                />
              </div>
            </div>

            <Separator />

            {/* Booking Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Booking Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow
                  label="Booking Date"
                  value={formatDateTime(booking.bookingDate)}
                />
                <InfoRow label="Status" value={booking.status} />
              </div>
            </div>

            <Separator />

            {/* Meta */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-lg">Record Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow
                  label="Created At"
                  value={formatDateTime(booking.createdAt)}
                />
                <InfoRow
                  label="Last Updated"
                  value={formatDateTime(booking.updatedAt)}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MyBookingViewDetailDialog;
