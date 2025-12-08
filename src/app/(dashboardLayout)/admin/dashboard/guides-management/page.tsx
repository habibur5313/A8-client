import GuideFilters from "@/components/modules/Admin/GuidesManagement/GuideFilters";
import GuidesManagementHeader from "@/components/modules/Admin/GuidesManagement/GuidesManagementHeader";
import GuidesTable from "@/components/modules/Admin/GuidesManagement/GuidesTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getGuides } from "@/services/admin/guidesManagement";
import { Suspense } from "react";

const AdminGuidesManagementPage = async ({ searchParams }: { searchParams: Promise<Record<string, string | string[]>> }) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const guidesResult = await getGuides(queryString);
  console.log(guidesResult)

  const totalPages = Math.ceil(
    (guidesResult?.meta?.total || 1) / (guidesResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <GuidesManagementHeader />
      <GuideFilters />
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <GuidesTable guides={guidesResult.data} />
        <TablePagination
          currentPage={guidesResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminGuidesManagementPage;
