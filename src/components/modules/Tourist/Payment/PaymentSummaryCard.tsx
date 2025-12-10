import React from 'react'
import { LucideIcon } from 'lucide-react'
interface SummaryCardProps {
  title: string
  amount: string
  icon: LucideIcon
  description?: string
}
export function SummaryCard({ title, amount, icon: Icon, description }: SummaryCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
      <div className="flex items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium text-muted-foreground tracking-tight">
          {title}
        </h3>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="pt-2">
        <div className="text-2xl font-bold">{amount}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}