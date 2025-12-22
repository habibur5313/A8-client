import GuideDetailsClient from "@/components/modules/Guides/GuideDetails/GuideDetailsClient";
import GuideDetailsSkeleton from "@/components/shared/GuideDetailsSkeleton";
import { getGuideById } from "@/services/admin/guidesManagement";
import { Suspense } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ guideId: string }>;
}) => {
  const { guideId } = await params;

  // Fetch guide data from server
  const guideResult = await getGuideById(guideId);
  const guide = guideResult.data;

  return {
    title: `${guide?.name} | Travel Guide`,
    description: `${guide?.about} | Travel Guide`,
  };
};

interface PageProps {
  params: { guideId: string };
}

export default async function GuideDetailsPage({ params }: PageProps) {
  const { guideId } = await params;

  // Fetch guide data from server
  const guideResult = await getGuideById(guideId);
  const guide = guideResult.data;

  return (
    <Suspense fallback={<GuideDetailsSkeleton/>}>
      <GuideDetailsClient guide={guide} />
    </Suspense>
  );
}
