import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { IGuideProfile } from "@/types/guide.interface";

export default function GuideHeader({ guide }: { guide: IGuideProfile }) {
  return (
    <div className="flex gap-6 items-center">
      <Image
        src={guide?.profilePhoto || "/avatar.png"}
        alt={guide?.name}
        width={120}
        height={120}
        className="rounded-full border"
      />

      <div>
        <h1 className="text-2xl font-bold">{guide?.name}</h1>
        <p className="text-muted-foreground">{guide?.designation}</p>

        <div className="flex items-center gap-2 mt-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">
            {guide?.averageRating.toFixed(1)}
          </span>
          <span className="text-muted-foreground">
            ({guide?.totalReviews} reviews)
          </span>
        </div>

        <div className="flex gap-2 mt-2">
          {guide?.languages.map((lang: string) => (
            <Badge key={lang} variant="secondary">
              {lang}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
