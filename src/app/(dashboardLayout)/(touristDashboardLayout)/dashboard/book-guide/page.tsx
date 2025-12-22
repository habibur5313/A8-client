import BookGuideClient from "@/components/modules/Tourist/BookGuide/BookGuideClient";
import { queryStringFormatter } from "@/lib/formatters";
import { getGuides } from "@/services/admin/guidesManagement";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Guide | Travel Guide",
  description: "Book Guide | Travel Guide",
};


export default async function BookGuidePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const guideRes = await getGuides(queryString);
  const guides = guideRes?.data || [];

  return <BookGuideClient guides={guides} />;
}
