import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, ExternalLink } from 'lucide-react'
const payouts = [
  { id: 'PO-7821', date: 'Oct 24, 2023', amount: '$1,250.00', status: 'Completed', method: 'Bank Transfer' },
  { id: 'PO-7820', date: 'Oct 10, 2023', amount: '$850.00', status: 'Completed', method: 'Bank Transfer' },
  { id: 'PO-7819', date: 'Sep 28, 2023', amount: '$1,200.00', status: 'Pending', method: 'PayPal' },
  { id: 'PO-7818', date: 'Sep 15, 2023', amount: '$950.00', status: 'Completed', method: 'Bank Transfer' },
  { id: 'PO-7817', date: 'Aug 30, 2023', amount: '$1,400.00', status: 'Completed', method: 'Bank Transfer' },
  { id: 'PO-7816', date: 'Aug 14, 2023', amount: '$780.00', status: 'Processing', method: 'PayPal' },
  { id: 'PO-7815', date: 'Jul 28, 2023', amount: '$1,100.00', status: 'Completed', method: 'Bank Transfer' },
  { id: 'PO-7814', date: 'Jul 12, 2023', amount: '$920.00', status: 'Completed', method: 'Bank Transfer' },
]
export function PayoutHistoryTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700'
      case 'Pending': return 'bg-amber-100 text-amber-700'
      case 'Processing': return 'bg-blue-100 text-blue-700'
      default: return 'bg-slate-100 text-slate-700'
    }
  }
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Payout History</CardTitle>
        <button className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Transaction ID</th>
                <th className="px-6 py-4 font-medium">Method</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
                <th className="px-6 py-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payouts.map((payout) => (
                <tr key={payout.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{payout.date}</td>
                  <td className="px-6 py-4 text-slate-500 font-mono text-xs">{payout.id}</td>
                  <td className="px-6 py-4 text-slate-600">{payout.method}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payout.status)}`}>
                      {payout.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate-900">{payout.amount}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-slate-400 hover:text-teal-600 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 text-center">
          <button className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors">
            View All Transactions
          </button>
        </div>
      </CardContent>
    </Card>
  )
}