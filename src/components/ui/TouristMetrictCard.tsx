import { LucideIcon } from 'lucide-react'
interface MetricCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  color: 'blue' | 'teal' | 'green' | 'yellow' | 'purple'
}
export function MetricCard({ label, value, icon: Icon, color }: MetricCardProps) {
  const colorStyles = {
    blue: 'bg-sky-100 text-sky-600',
    teal: 'bg-teal-100 text-teal-600',
    green: 'bg-emerald-100 text-emerald-600',
    yellow: 'bg-amber-100 text-amber-600',
    purple: 'bg-purple-100 text-purple-600',
  }
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
      <div className={`p-3 rounded-lg ${colorStyles[color]}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  )
}