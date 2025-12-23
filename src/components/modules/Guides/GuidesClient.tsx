"use client";

import { GuideCard } from "./GuideCard";
import { IGuideProfile } from "@/types/guide.interface";
import { GuidesPagination } from "./GuidesPagination";
import GuidesFilters from "./GuidesFilters";

interface GuidesClientProps {
  guides: IGuideProfile[];
  totalPages: number;
}

export default function GuidesClient({
  guides,
  totalPages,
}: GuidesClientProps) {
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Page Header */}
        <div className="space-y-3">
          <h1 className="text-xl font-semibold sm:text-2xl sm:font-bold md:text-4xl text-stone-900 dark:text-white">
            Explore Local Guides
            <span className="ml-3 text-sm font-normal text-stone-500 dark:text-stone-400">
              {guides?.length || 0} results found
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400">
            Find experienced local guides to make your journey unforgettable
          </p>
        </div>

        {/* Search + Filters */}
        <GuidesFilters />

        {/* Guides Grid */}
        {guides.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No guides found
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && <GuidesPagination totalPages={totalPages} />}
      </div>
    </section>
  );
}
