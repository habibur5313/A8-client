"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { softDeleteGuide } from "@/services/admin/guidesManagement";
import { IGuide } from "@/types/guide.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import GuideFormDialog from "./GuideFormDialog";
import GuideViewDetailDialog from "./GuideViewDetailDialog";

// ===============================
// TABLE COLUMNS
// ===============================
const guidesColumns: Array<{ header: string; accessor: keyof IGuide }> = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Phone",
    accessor: "contactNumber", // FIXED
  },
  {
    header: "District",
    accessor: "district",
  },
];

const GuidesTable = ({ guides }: { guides: IGuide[] }) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [viewingGuide, setViewingGuide] = useState<IGuide | null>(null);
  const [editingGuide, setEditingGuide] = useState<IGuide | null>(null);
  const [deletingGuide, setDeletingGuide] = useState<IGuide | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const refresh = () =>
    startTransition(() => {
      router.refresh();
    });

  // ===============================
  // DELETE GUIDE (soft delete)
  // ===============================
  const confirmDelete = async () => {
    if (!deletingGuide) return;

    try {
      setIsDeleting(true);
      const result = await softDeleteGuide(deletingGuide.id);
      setIsDeleting(false);

      if (result?.success) {
        toast.success("Guide deleted successfully");
        setDeletingGuide(null);
        refresh();
      } else {
        toast.error(result?.message || "Failed to delete guide");
      }
    } catch (err) {
      toast.error("Something went wrong");
      setIsDeleting(false);
    }
  };

  return (
    <>
      {/* ===============================
          GUIDES MANAGEMENT TABLE
      =============================== */}
      <ManagementTable
        data={guides}
        columns={guidesColumns}
        onView={(guide) => setViewingGuide(guide)}
        onEdit={(guide) => setEditingGuide(guide)}
        onDelete={(guide) => setDeletingGuide(guide)}
        getRowKey={(guide) => guide.id}
        emptyMessage="No guides found"
      />

      {/* ===============================
          EDIT GUIDE FORM
      =============================== */}
      <GuideFormDialog
        open={!!editingGuide}
        guide={editingGuide}
        onClose={() => setEditingGuide(null)}
        onSuccess={refresh}
      />

      {/* ===============================
          VIEW GUIDE DETAILS
      =============================== */}
      <GuideViewDetailDialog
        open={!!viewingGuide}
        guide={viewingGuide}
        onClose={() => setViewingGuide(null)}
      />

      {/* ===============================
          DELETE CONFIRMATION
      =============================== */}
      <DeleteConfirmationDialog
        open={!!deletingGuide}
        onOpenChange={(open) => !open && setDeletingGuide(null)}
        onConfirm={confirmDelete}
        isDeleting={isDeleting}
        title="Delete Guide"
        description={`Are you sure you want to delete ${deletingGuide?.name}?`}
      />
    </>
  );
};

export default GuidesTable;
