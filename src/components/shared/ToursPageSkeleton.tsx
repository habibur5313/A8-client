'use client';

import { Card } from '@/components/ui/card';

export default function ToursPageSkeleton() {
  return (
    <section className="min-h-screen py-16 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 space-y-10">

        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="h-8 w-56 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-96 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
        </div>

        {/* Filters Skeleton */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-4">
          <div className="flex gap-3">
            <div className="h-10 flex-1 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>

        {/* Tours Grid Skeleton */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              {/* Image */}
              <div className="h-52 bg-gray-200 dark:bg-gray-700" />

              {/* Content */}
              <div className="p-5 space-y-4">
                <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />

                <div className="flex gap-4 pt-2">
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center gap-2 pt-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
