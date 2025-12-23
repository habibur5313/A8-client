import { Skeleton } from "@/components/ui/skeleton";

export default function GuidesPageSkeleton() {
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Page Header Skeleton */}
        <div className="space-y-3">
          <Skeleton className="h-8 w-64 sm:w-96" />
          <Skeleton className="h-4 w-80" />
        </div>

        {/* Filters Skeleton */}
        <div className="space-y-3">
          <div className="flex gap-3 flex-wrap">
            <Skeleton className="h-10 w-60" />
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>

        {/* Guides Grid Skeleton */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <GuideCardSkeleton key={i} />
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-10 rounded-md" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card Skeleton ---------------- */

function GuideCardSkeleton() {
  return (
    <div className="rounded-2xl border p-6 space-y-4 bg-white dark:bg-gray-800">
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <Skeleton className="h-20 w-20 rounded-xl" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      {/* Rating */}
      <Skeleton className="h-4 w-32" />

      {/* Details */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-10 w-32 rounded-lg" />
      </div>
    </div>
  );
}
