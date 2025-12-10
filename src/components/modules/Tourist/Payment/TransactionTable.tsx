import React from 'react'
import { Download, FileText } from 'lucide-react'
import { StatusBadge, PaymentStatus } from '../Payment/PaymentStatusBadge'
interface Transaction {
  id: string
  date: string
  tourName: string
  guideName: string
  amount: string
  status: PaymentStatus
}
const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'TRX-9821',
    date: 'Oct 24, 2023',
    tourName: 'Kyoto Ancient Temples Tour',
    guideName: 'Kenji Tanaka',
    amount: '$120.00',
    status: 'paid',
  },
  {
    id: 'TRX-9822',
    date: 'Oct 22, 2023',
    tourName: 'Tokyo Street Food Safari',
    guideName: 'Yuki Sato',
    amount: '$85.00',
    status: 'paid',
  },
  {
    id: 'TRX-9823',
    date: 'Oct 20, 2023',
    tourName: 'Mt. Fuji Day Trip',
    guideName: 'Hiroshi Yamamoto',
    amount: '$320.00',
    status: 'pending',
  },
  {
    id: 'TRX-9824',
    date: 'Oct 15, 2023',
    tourName: 'Osaka Nightlife Experience',
    guideName: 'Sakura Suzuki',
    amount: '$150.00',
    status: 'refunded',
  },
  {
    id: 'TRX-9825',
    date: 'Oct 12, 2023',
    tourName: 'Nara Deer Park Visit',
    guideName: 'Kenji Tanaka',
    amount: '$65.00',
    status: 'paid',
  },
  {
    id: 'TRX-9826',
    date: 'Oct 10, 2023',
    tourName: 'Traditional Tea Ceremony',
    guideName: 'Akiko Nakamura',
    amount: '$45.00',
    status: 'paid',
  },
  {
    id: 'TRX-9827',
    date: 'Oct 05, 2023',
    tourName: 'Hiroshima Peace Memorial',
    guideName: 'Takashi Kobayashi',
    amount: '$210.00',
    status: 'paid',
  },
  {
    id: 'TRX-9828',
    date: 'Sep 28, 2023',
    tourName: 'Arashiyama Bamboo Grove',
    guideName: 'Yuki Sato',
    amount: '$55.00',
    status: 'paid',
  },
]
export function TransactionTable() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <p className="text-sm text-muted-foreground">
          View and manage your payment history for all tours.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground font-medium">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Tour & Guide</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Invoice</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {MOCK_TRANSACTIONS.map((trx) => (
              <tr 
                key={trx.id} 
                className="hover:bg-muted/50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  {trx.date}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">{trx.tourName}</span>
                    <span className="text-xs text-muted-foreground">Guide: {trx.guideName}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">
                  {trx.amount}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={trx.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 hover:underline transition-colors font-medium"
                    aria-label={`Download invoice for ${trx.tourName}`}
                  >
                    <Download className="w-4 h-4 mr-1.5" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t bg-muted/20 flex justify-center">
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
          View all transactions
        </button>
      </div>
    </div>
  )
}