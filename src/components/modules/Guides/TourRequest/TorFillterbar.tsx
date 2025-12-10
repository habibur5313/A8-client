import React from 'react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select2'
import { Search } from 'lucide-react'
interface FilterBarProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  statusFilter: string
  onStatusChange: (value: string) => void
  startDate: string
  onStartDateChange: (value: string) => void
  endDate: string
  onEndDateChange: (value: string) => void
}
export function FilterBar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange
}: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-1 bg-white/50 backdrop-blur-sm rounded-2xl">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search by tourist or guide name..."
          className="pl-9 bg-white border-slate-200 focus:border-emerald-500 focus:ring-emerald-200"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-1 md:pb-0">
        <Select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-36 bg-white border-slate-200 focus:border-emerald-500 focus:ring-emerald-200"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </Select>
        <div className="flex items-center gap-2">
          <Input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="w-auto bg-white border-slate-200 focus:border-emerald-500 focus:ring-emerald-200"
          />
          <span className="text-slate-400">-</span>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="w-auto bg-white border-slate-200 focus:border-emerald-500 focus:ring-emerald-200"
          />
        </div>
      </div>
    </div>
  )
}