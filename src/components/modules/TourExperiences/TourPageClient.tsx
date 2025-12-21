"use client";
import { TourCard } from "./TourCard";
import { ITour } from "@/types/tour.interface";
import { Pagination } from "./ToursPagination";
import TourFilters from "./TourFilters";

interface TourPageClientProps {
  tours: ITour[];
  totalPages: number;
}

export default function TourPageClient({
  tours,
  totalPages,
}: TourPageClientProps) {

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Page Header */}
        <div className="space-y-3">
          <h1 className="text-xl font-semibold sm:text-2xl sm:font-bold md:text-4xl text-stone-900 dark:text-white">
                 Explore Experiences
                 <span className="ml-3 text-sm font-normal text-stone-500 dark:text-stone-400">
                   {tours?.length || 0} results found
                </span>
              </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover unique experiences guided by local experts
          </p>
        </div>

        {/* Search + Filters */}
        <TourFilters/>

        {/* Tours Grid */}
        {tours.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No tours found
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour: ITour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </div>
    </section>
  );
}
