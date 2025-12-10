import React from 'react'
import { StatusBadge } from '../TourRequest/TourRequestStatusBadge'
import { Button } from '@/components/ui/button'
import { Eye, Check, X } from 'lucide-react'
import { TourRequest } from './TourRequestCard'
interface RequestTableProps {
  requests: TourRequest[]
  onApprove: (id: string) => void
  onReject: (id: string) => void
  onViewDetails: (id: string) => void
}
export function RequestTable({ requests, onApprove, onReject, onViewDetails }: RequestTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600 font-medium">
          <tr>
            <th className="px-6 py-4">Tourist & Guide</th>
            <th className="px-6 py-4">Destination</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Budget</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {requests.map((request) => (
            <tr 
              key={request.id} 
              className="group hover:bg-slate-50/50 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="font-medium text-slate-900">{request.touristName}</div>
                <div className="text-xs text-slate-500 mt-0.5">Guide: {request.guideName}</div>
              </td>
              <td className="px-6 py-4 text-slate-600">{request.destination}</td>
              <td className="px-6 py-4 text-slate-600">
                {new Date(request.tourDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 font-medium text-slate-900">
                ${request.budget.toLocaleString()}
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={request.status} />
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onViewDetails(request.id)}
                    title="View Details"
                    className="h-8 w-8 text-slate-500 hover:text-slate-900"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  {request.status === 'pending' && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onReject(request.id)}
                        title="Reject"
                        className="h-8 w-8 text-rose-500 hover:text-rose-700 hover:bg-rose-50"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onApprove(request.id)}
                        title="Approve"
                        className="h-8 w-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}