import BookGuideClient from "@/components/modules/Tourist/BookGuide/BookGuideClient";
import { queryStringFormatter } from "@/lib/formatters";
import { getGuides } from "@/services/admin/guidesManagement";


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
