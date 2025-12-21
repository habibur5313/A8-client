// import { AboutSection } from "@/components/modules/Guides/AboutSection";
// import { BookingCard } from "@/components/modules/Guides/BookingCard";
// import { GuideHero } from "@/components/modules/Guides/GuideHero";
// import { GuideStats } from "@/components/modules/Guides/GuideStat";
// import { ReviewsSection } from "@/components/modules/Guides/ReviewSection";
// import { SkillsSection } from "@/components/modules/Guides/SkillsSection";
// import { ToursSection } from "@/components/modules/Guides/ToursSection";

// export default function GuideDetailPage({guideId}: {guideId: string}) {
//   console.log("Guide ID:", guideId);
//   return (
//     <div className="min-h-screen bg-stone-50 pb-20">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <GuideHero />
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
//           {/* Main Content Column */}
//           <div className="lg:col-span-8">
//             <GuideStats />
//             <div className="h-px bg-stone-200 w-full mb-8" />
//             <AboutSection />
//             <SkillsSection />
//             <div className="h-px bg-stone-200 w-full mb-8" />
//             <ToursSection />
//             <div className="h-px bg-stone-200 w-full mb-8" />
//             <ReviewsSection />
//           </div>
//           {/* Sidebar Column */}
//           <div className="lg:col-span-4">
//             <BookingCard />
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }


import { getGuideById } from "@/services/admin/guidesManagement";

interface PageProps {
  params: { guideId: string };
}

export default async function GuideDetailsPage({ params }: PageProps) {
  const { guideId } = await params;

  // Fetch tour data from server
  const guideResult = await getGuideById(guideId);
  const guide = guideResult.data;

  console.log(guide,"guide");

  // return <TourDetailsClient guide={guide} />;
}
