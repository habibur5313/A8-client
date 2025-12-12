
import { IGuideProfile } from "@/types/guide.interface";
import { ModernGuideCard } from "./GuideCard";

export default function BookGuideClient({ guides }: { guides: IGuideProfile[] }) {

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Book a Guide</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <ModernGuideCard key={guide.id} guide={guide}/>
        ))}
      </div>
    </div>
  );
}
