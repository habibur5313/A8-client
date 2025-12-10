import React from 'react'
import { StatusBadge, RequestStatus } from '../TourRequest/TourRequestStatusBadge'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, DollarSign, User } from 'lucide-react'
export interface TourRequest {
  id: string
  touristName: string
  destination: string
  tourDate: string
  budget: number
  status: RequestStatus
  guideName: string
}
interface RequestCardProps {
  request: TourRequest
  onApprove: (id: string) => void
  onReject: (id: string) => void
  onViewDetails: (id: string) => void
}
export function RequestCard({ request, onApprove, onReject, onViewDetails }: RequestCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-slate-900">{request.touristName}</h3>
          <div className="flex items-center text-slate-500 text-sm mt-1">
            <User className="w-3.5 h-3.5 mr-1" />
            <span>Guide: {request.guideName}</span>
          </div>
        </div>
        <StatusBadge status={request.status} />
      </div>
      <div className="space-y-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-600" />
          <span>{request.destination}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-sky-600" />
          <span>{new Date(request.tourDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-900">${request.budget.toLocaleString()}</span>
        </div>
      </div>
      <div className="pt-4 mt-auto border-t border-slate-100 flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1 text-xs" 
          onClick={() => onViewDetails(request.id)}
        >
          Details
        </Button>
        {request.status === 'pending' && (
          <>
            <Button 
              variant="destructive" 
              className="flex-1 text-xs bg-rose-600 hover:bg-rose-700" 
              onClick={() => onReject(request.id)}
            >
              Reject
            </Button>
            <Button 
              className="flex-1 text-xs bg-emerald-600 hover:bg-emerald-700 text-white" 
              onClick={() => onApprove(request.id)}
            >
              Approve
            </Button>
          </>
        )}
      </div>
    </div>
  )
}