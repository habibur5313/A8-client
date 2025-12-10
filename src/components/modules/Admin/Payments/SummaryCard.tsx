import { TransactionStats } from '@/types/payment.interface';
import { DollarSign, TrendingUp, ArrowDownLeft, RefreshCw } from 'lucide-react';
interface SummaryCardsProps {
  stats: TransactionStats;
}
export function SummaryCards({ stats }: SummaryCardsProps) {
  const cards = [
    {
      name: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      change: '+12.5%',
      changeType: 'increase',
      description: 'vs last month'
    },
    {
      name: 'Pending Withdrawals',
      value: stats.pendingWithdrawals.toString(),
      icon: ArrowDownLeft,
      change: '4 pending',
      changeType: 'neutral',
      description: 'needs review'
    },
    {
      name: 'Completed Withdrawals',
      value: stats.completedWithdrawals.toString(),
      icon: TrendingUp,
      change: '+2.1%',
      changeType: 'increase',
      description: 'vs last month'
    },
    {
      name: 'Refund Requests',
      value: stats.refundRequests.toString(),
      icon: RefreshCw,
      change: '-1.2%',
      changeType: 'decrease', // decrease in refunds is good
      description: 'vs last month'
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.name}
          className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow-sm rounded-lg overflow-hidden border border-gray-100"
        >
          <dt>
            <div className="absolute bg-teal-500 rounded-md p-3">
              <card.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{card.name}</p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                card.changeType === 'increase' ? 'text-green-600' : 
                card.changeType === 'decrease' ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              {card.change}
              <span className="ml-1 font-normal text-gray-400 text-xs">
                 {card.description}
              </span>
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}