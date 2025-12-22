import React from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EarningsSummaryCards } from '@/components/modules/Guides/Earnings/EarningSummaryCard'
import { EarningsChart } from '@/components/modules/Guides/Earnings/EarningChart'
import { PayoutHistoryTable } from '@/components/modules/Guides/Earnings/PayoutHistoryTable'
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Earnings Dashboard | Travel Guide",
//   description: "Earnings Dashboard | Travel Guide",
// };
export default function Earnings() {
  return (
    <div className="min-h-screen  flex font-sans text-slate-900 dark:text-slate-50">
        <main className="flex-1 p-4 md:p-8">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Earnings Dashboard</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Track your income and manage withdrawals.</p>
            </div>
            <Button size="lg" className="shadow-md shadow-teal-600/20">
              <Plus className="h-5 w-5 mr-2" />
              Request Withdrawal
            </Button>
          </div>
          {/* Dashboard Widgets */}
          <EarningsSummaryCards />
          
          <EarningsChart />
          
          <PayoutHistoryTable />
        </main>
    </div>
  )
}