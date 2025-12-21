'use client';

export default function TourDetailsSkeleton() {
  return (
    <div className="min-h-screen pb-20 mt-16 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-6 flex items-start justify-between">
          <div className="space-y-3 w-2/3">
            <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="flex gap-4">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
          </div>
        </div>

        {/* Image Slider Skeleton */}
        <div className="h-[400px] md:h-[500px] mb-8 bg-gray-200 dark:bg-gray-700 rounded-2xl" />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1 space-y-10">
            {/* Info grid */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center space-y-3">
                  <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full" />
                  <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              ))}
            </div>

            {/* Description */}
            <section className="space-y-4">
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </section>

            {/* Guide Info */}
            <section className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl">
              <div className="flex gap-4 items-center mb-4">
                <div className="h-32 w-32 bg-gray-200 dark:bg-gray-700 rounded-full" />
                <div className="space-y-3">
                  <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              </div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mt-2" />
            </section>

            {/* Reviews */}
            <section className="space-y-6">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl space-y-3"
                >
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
                      <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                      </div>
                    </div>
                    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              ))}
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="w-full lg:w-96">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 space-y-6 sticky top-24">
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-12 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
