import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function GuideDetailsSkeleton() {
  return (
    <div className="container mx-auto py-28 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* LEFT CONTENT */}
      <div className="lg:col-span-2 space-y-10">
        
        {/* ===== Guide Header Skeleton ===== */}
        <div className="flex gap-6 items-center">
          <Skeleton className="h-28 w-28 rounded-full" />

          <div className="space-y-3">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-32" />

            <div className="flex gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>

            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* ===== About Skeleton ===== */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <Skeleton className="h-6 w-44" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-4 w-36" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ===== Skills Skeleton ===== */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <Skeleton className="h-6 w-52" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <div className="flex gap-2 flex-wrap">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-7 w-20 rounded-full" />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <div className="flex gap-2 flex-wrap">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-7 w-16 rounded-full" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ===== Tours Skeleton ===== */}
        <div>
          <Skeleton className="h-6 w-44 mb-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-4 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />

                  <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="lg:sticky lg:top-24 h-fit">
        <Card className="shadow-xl">
          <CardContent className="p-6 space-y-4">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />

            <div className="border-t pt-4 space-y-3">
              <Skeleton className="h-5 w-32" />

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-5 w-5 rounded" />
                ))}
              </div>

              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}