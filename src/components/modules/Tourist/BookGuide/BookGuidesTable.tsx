"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { IBooking } from "@/types/booking.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { softDeleteBooking } from "@/services/tourist/bookGuideManagement";
import { bookingColumns } from "./BookGuidesColumns";
import BookGuideViewDetailDialog from "./BookGuideViewDetailDialog";


const BookGuidesTable = ({ bookings }: { bookings: IBooking[] }) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [viewingBooking, setViewingBooking] = useState<IBooking | null>(null);
  const [deletingBooking, setDeletingBooking] = useState<IBooking | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const refresh = () =>
    startTransition(() => {
      router.refresh();
    });

  // ===============================
  // DELETE BOOKING
  // ===============================
  const confirmDelete = async () => {
    if (!deletingBooking) return;

    try {
      setIsDeleting(true);
      const result = await softDeleteBooking(deletingBooking.id);
      setIsDeleting(false);

      if (result?.success) {
        toast.success("Booking deleted successfully");
        setDeletingBooking(null);
        refresh();
      } else {
        toast.error(result?.message || "Failed to delete booking");
      }
    } catch (err) {
      toast.error("Something went wrong");
      setIsDeleting(false);
    }
  };

  return (
    <>
      {/* ===============================
          BOOKINGS TABLE
      =============================== */}
      <ManagementTable
        data={bookings}
        columns={bookingColumns}
        onView={(booking) => setViewingBooking(booking)}
        onDelete={(booking) => setDeletingBooking(booking)}
        getRowKey={(booking) => booking.id}
        emptyMessage="No bookings found"
      />

      {/* ===============================
          VIEW BOOKING DETAILS
      =============================== */}
      <BookGuideViewDetailDialog
        open={!!viewingBooking}
        booking={viewingBooking}
        onClose={() => setViewingBooking(null)}
      />

      {/* ===============================
          DELETE CONFIRMATION
      =============================== */}
      <DeleteConfirmationDialog
        open={!!deletingBooking}
        onOpenChange={(open) => !open && setDeletingBooking(null)}
        onConfirm={confirmDelete}
        isDeleting={isDeleting}
        title="Delete Booking"
        description={`Are you sure you want to delete Booking #${deletingBooking?.id}?`}
      />
    </>
  );
};

export default BookGuidesTable;
