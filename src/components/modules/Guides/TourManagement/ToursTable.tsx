"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { ITour } from "@/types/tour.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import TourFormDialog from "./TourFormDialog";
import { tourColumns } from "./ToursColumns";
import TourViewDetailDialog from "./TourViewDetailDialog";
import { softDeleteListing } from "@/services/guide/tourManagement";


const ToursTable = ({ tours }: { tours: ITour[] }) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [viewingTour, setViewingTour] = useState<ITour | null>(null);
  const [editingTour, setEditingTour] = useState<ITour | null>(null);
  const [deletingTour, setDeletingTour] = useState<ITour | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const refresh = () =>
    startTransition(() => {
      router.refresh();
    });

  // ===============================
  // DELETE TOUR (soft delete)
  // ===============================
  const confirmDelete = async () => {
    if (!deletingTour) return;

    try {
      setIsDeleting(true);
      const result = await softDeleteListing(deletingTour.id);
      setIsDeleting(false);

      if (result?.success) {
        toast.success("Tour deleted successfully");
        setDeletingTour(null);
        refresh();
      } else {
        toast.error(result?.message || "Failed to delete tour");
      }
    } catch (err) {
      toast.error("Something went wrong");
      setIsDeleting(false);
    }
  };

  return (
    <>
      {/* ===============================
          TOURS MANAGEMENT TABLE
      =============================== */}
      <ManagementTable
        data={tours}
        columns={tourColumns}
        onView={(tour) => setViewingTour(tour)}
        onEdit={(tour) => setEditingTour(tour)}
        onDelete={(tour) => setDeletingTour(tour)}
        getRowKey={(tour) => tour.id}
        emptyMessage="No tours found"
      />

      {/* ===============================
          EDIT TOUR FORM
      =============================== */}
      <TourFormDialog
        open={!!editingTour}
        tour={editingTour}
        onClose={() => setEditingTour(null)}
        onSuccess={refresh}
      />

      {/* ===============================
          VIEW TOUR DETAILS
      =============================== */}
      <TourViewDetailDialog
        open={!!viewingTour}
        tour={viewingTour}
        onClose={() => setViewingTour(null)}
      />

      {/* ===============================
          DELETE CONFIRMATION
      =============================== */}
      <DeleteConfirmationDialog
        open={!!deletingTour}
        onOpenChange={(open) => !open && setDeletingTour(null)}
        onConfirm={confirmDelete}
        isDeleting={isDeleting}
        title="Delete Tour"
        description={`Are you sure you want to delete ${deletingTour?.title}?`}
      />
    </>
  );
};

export default ToursTable;
