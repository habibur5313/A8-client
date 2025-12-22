import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IGuideProfile } from "@/types/guide.interface";

interface GuideSkillsProps {
  guide: IGuideProfile;
}

export default function GuideSkills({ guide }: GuideSkillsProps) {
  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <h2 className="text-xl font-semibold">Expertise & Languages</h2>

        {/* SKILLS */}
        <div>
          <p className="mb-2 font-medium">Expertise</p>
          <div className="flex flex-wrap gap-2">
            {guide?.skills.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div>
          <p className="mb-2 font-medium">Languages</p>
          <div className="flex flex-wrap gap-2">
            {guide?.languages.map((lang) => (
              <Badge key={lang} variant="secondary">
                {lang}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
