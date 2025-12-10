import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skills = [
    "Art History", "Local Cuisine", "Wine Tasting", "Photography", 
    "Hiking", "Family Friendly", "Museum Expert", "Nightlife"
  ]
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-stone-900 mb-4">Expertise & Interests</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="default" className="px-4 py-2 text-sm bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors cursor-default">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}