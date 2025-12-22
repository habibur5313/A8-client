
// import { IGuideProfile } from "@/types/guide.interface";
// import { GuideCard } from "./GuideCard";

// export default function GuidesClient({ guides }: { guides: IGuideProfile[] }) {
// console.log(guides,"guides")
//   return (
//     <div className="  py-10 px-4 space-y-6 container mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Book a Guide</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
//         {guides.map((guide) => (
//           <GuideCard key={guide.id} guide={guide}/>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import GuidesFilters from "@/components/modules/Guides/GuidesFilters";
import { GuidesPagination } from "@/components/modules/Guides/GuidesPagination";
import { GuideCard } from "@/components/modules/Guides/GuideCard";
import { IGuideProfile } from "@/types/guide.interface";

interface GuidesClientProps {
  guides: IGuideProfile[];
  totalPages: number;
}

const GuidesClient = ({
  guides,
  totalPages,
}: GuidesClientProps) => {
  return (
    <section className="container mx-auto px-4 py-28">
      {/* Filters */}
      <div className="mb-8">
        <GuidesFilters />
      </div>

      {/* Content */}
      {guides.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-semibold mb-2">
            No guides found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search keywords.
          </p>
        </div>
      ) : (
        <>
          {/* Guides Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <GuidesPagination totalPages={totalPages} />
          )}
        </>
      )}
    </section>
  );
};

export default GuidesClient;

