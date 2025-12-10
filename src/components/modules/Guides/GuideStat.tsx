import { Card } from '@/components/ui/card'
import { Languages, Calendar, Users, Award } from 'lucide-react'
export function GuideStats() {
  const stats = [
    {
      icon: Languages,
      label: "Languages",
      value: "English, Italian, Spanish",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Calendar,
      label: "Experience",
      value: "8 Years",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: Users,
      label: "Tours Hosted",
      value: "350+",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: Award,
      label: "Specialty",
      value: "History & Art",
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="flex p-4 flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className={`p-3 rounded-full mb-3 ${stat.bg} ${stat.color}`}>
            <stat.icon className="w-6 h-6" />
          </div>
          <span className="text-sm text-stone-500 font-medium mb-1">{stat.label}</span>
          <span className="text-stone-900 font-bold">{stat.value}</span>
        </Card>
      ))}
    </div>
  )
}