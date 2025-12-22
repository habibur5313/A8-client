import { Card, CardContent } from "@/components/ui/card";
import { IGuideProfile } from "@/types/guide.interface";

interface GuideAboutProps {
  guide: IGuideProfile;
}

export default function GuideAbout({ guide }: GuideAboutProps) {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">About the Guide</h2>

        <p className="text-muted-foreground leading-relaxed">
          {guide?.about}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Info label="Experience" value={`${guide?.experience} years`} />
          <Info label="Qualification" value={guide?.qualification} />
          <Info label="Working Place" value={guide?.currentWorkingPlace} />
          <Info
            label="Location"
            value={`${guide?.address}, ${guide?.district}`}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
