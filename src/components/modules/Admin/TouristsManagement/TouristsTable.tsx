"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { softDeleteTourist } from "@/services/admin/touristsManagement";
import { ITouristProfile } from "@/types/tourist.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import TouristFormDialog from "./TouristFormDialog";
import { touristsColumns } from "./TouristsColumns";
import TouristViewDetailDialog from "./TouristViewDetailDialog";

interface TouristsTableProps {
  tourists: ITouristProfile[];
}

const TouristsTable = ({ tourists }: TouristsTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingTourist, setDeletingTourist] = useState<ITouristProfile | null>(null);
  const [viewingTourist, setViewingTourist] = useState<ITouristProfile | null>(null);
  const [editingTourist, setEditingTourist] = useState<ITouristProfile | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);


  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (tourist: ITouristProfile) => setViewingTourist(tourist);
  const handleEdit = (tourist: ITouristProfile) => setEditingTourist(tourist);
  const handleDelete = (tourist: ITouristProfile) => setDeletingTourist(tourist);

  const confirmDelete = async () => {
    if (!deletingTourist) return;

    setIsDeleting(true);
    const result = await softDeleteTourist(deletingTourist.id);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Tourist deleted successfully");
      setDeletingTourist(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete tourist");
    }
  };

  return (
    <>
      <ManagementTable
        data={tourists}
        columns={touristsColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(tourist) => tourist.id}
        emptyMessage="No tourists found"
      />

      {/* Edit Tourist Form Dialog */}
      <TouristFormDialog
        open={!!editingTourist}
        onClose={() => setEditingTourist(null)}
        tourist={editingTourist!}
        onSuccess={() => {
          setEditingTourist(null);
          handleRefresh();
        }}
      />

      {/* View Tourist Detail Dialog */}
      <TouristViewDetailDialog
        open={!!viewingTourist}
        onClose={() => setViewingTourist(null)}
        tourist={viewingTourist}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingTourist}
        onOpenChange={(open) => !open && setDeletingTourist(null)}
        onConfirm={confirmDelete}
        title="Delete Tourist"
        description={`Are you sure you want to delete ${deletingTourist?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default TouristsTable;
