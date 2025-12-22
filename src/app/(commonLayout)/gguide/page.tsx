import GuidesClient from "@/components/modules/Guides/GuidesClient";
import { queryStringFormatter } from "@/lib/formatters";
import { getGuides } from "@/services/admin/guidesManagement";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Guides | Travel Guide",
  description: " Guides | Travel Guide",
};


export default async function GuidesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const guideRes = await getGuides(queryString);
  const guides = guideRes?.data || [];

  return <GuidesClient totalPages={guides.totalPages} guides={guides} />;
}
