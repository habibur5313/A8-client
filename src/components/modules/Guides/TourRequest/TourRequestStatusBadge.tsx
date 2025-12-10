import React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2, Clock, XCircle } from 'lucide-react'
export type RequestStatus = 'pending' | 'approved' | 'rejected'
interface StatusBadgeProps {
  status: RequestStatus
}
export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
    rejected: "bg-rose-100 text-rose-700 border-rose-200"
  }
  const icons = {
    pending: Clock,
    approved: CheckCircle2,
    rejected: XCircle
  }
  const Icon = icons[status]
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
      styles[status]
    )}>
      <Icon className="w-3.5 h-3.5" />
      <span className="capitalize">{status}</span>
    </span>
  )
}