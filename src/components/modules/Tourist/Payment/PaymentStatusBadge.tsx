import React from 'react'
import { CheckCircle2, Clock, RotateCcw } from 'lucide-react'
export type PaymentStatus = 'paid' | 'pending' | 'refunded'
interface StatusBadgeProps {
  status: PaymentStatus
}
export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    paid: 'bg-green-100 text-green-700 border-green-200',
    pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    refunded: 'bg-blue-100 text-blue-700 border-blue-200',
  }
  const icons = {
    paid: <CheckCircle2 className="w-3 h-3 mr-1.5" />,
    pending: <Clock className="w-3 h-3 mr-1.5" />,
    refunded: <RotateCcw className="w-3 h-3 mr-1.5" />,
  }
  const labels = {
    paid: 'Paid',
    pending: 'Pending',
    refunded: 'Refunded',
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}
    >
      {icons[status]}
      {labels[status]}
    </span>
  )
}