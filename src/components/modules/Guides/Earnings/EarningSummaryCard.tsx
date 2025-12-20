import React from 'react'
import { DollarSign, Clock, CheckCircle, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
export function EarningsSummaryCards() {
  const stats = [
    {
      label: 'Total Earnings',
      amount: '$12,450.00',
      change: '+12.5% from last month',
      icon: DollarSign,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
      trend: 'up'
    },
    {
      label: 'Pending Withdrawals',
      amount: '$1,200.00',
      change: 'Processing within 24h',
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      trend: 'neutral'
    },
    {
      label: 'Completed Payouts',
      amount: '$11,250.00',
      change: 'Last payout: 2 days ago',
      icon: CheckCircle,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      trend: 'up'
    }
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <Card key={stat.label} className="hover:shadow-md transition-shadow">
          <CardContent className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">{stat.amount}</h3>
              <div className="flex items-center gap-1.5">
                {stat.trend === 'up' && <TrendingUp className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />}
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{stat.change}</span>
              </div>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}