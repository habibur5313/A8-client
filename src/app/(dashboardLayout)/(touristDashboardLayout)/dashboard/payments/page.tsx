import React from 'react'
import { Wallet, CreditCard, RotateCcw } from 'lucide-react'
import { SummaryCard } from '@/components/modules/Tourist/Payment/PaymentSummaryCard'
import { TransactionTable } from '@/components/modules/Tourist/Payment/TransactionTable'

export default function PaymentsHistoryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Payments History</h1>
          <p className="text-muted-foreground">
            Track your spending, pending payments, and refunds across all your trips.
          </p>
        </div>
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <SummaryCard
            title="Total Spent"
            amount="$2,450.00"
            icon={Wallet}
            description="+12% from last month"
          />
          <SummaryCard
            title="Pending Payments"
            amount="$320.00"
            icon={CreditCard}
            description="2 invoices due soon"
          />
          <SummaryCard
            title="Refunds Processed"
            amount="$150.00"
            icon={RotateCcw}
            description="1 refund completed"
          />
        </div>
        {/* Transactions Table */}
        <TransactionTable />
      </div>
    </div>
  )
}