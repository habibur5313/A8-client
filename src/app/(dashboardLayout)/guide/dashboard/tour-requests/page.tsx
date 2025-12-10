"use client"
import React, { useState, useMemo } from 'react'
import { TourRequest } from '@/components/modules/Guides/TourRequest/TourRequestCard'
import { FilterBar } from '@/components/modules/Guides/TourRequest/TorFillterbar'
import { RequestCard } from '@/components/modules/Guides/TourRequest/TourRequestCard'
import { Plus, Search } from 'lucide-react'
import { Button } from '@/components/ui/button2'
import { RequestTable } from '@/components/modules/Guides/TourRequest/TourRequestTable'
// Mock Data
const MOCK_REQUESTS: TourRequest[] = [
  { id: '1', touristName: 'Sarah Johnson', destination: 'Bali, Indonesia', tourDate: '2024-06-15', budget: 2500, status: 'pending', guideName: 'Made Sujana' },
  { id: '2', touristName: 'Michael Chen', destination: 'Kyoto, Japan', tourDate: '2024-07-20', budget: 3200, status: 'approved', guideName: 'Yuki Tanaka' },
  { id: '3', touristName: 'Emma Williams', destination: 'Santorini, Greece', tourDate: '2024-08-10', budget: 2800, status: 'rejected', guideName: 'Nikos Papadopoulos' },
  { id: '4', touristName: 'James Wilson', destination: 'Cape Town, SA', tourDate: '2024-09-05', budget: 4500, status: 'pending', guideName: 'Thabo Mbeki' },
  { id: '5', touristName: 'Sofia Rodriguez', destination: 'Machu Picchu, Peru', tourDate: '2024-06-22', budget: 3100, status: 'approved', guideName: 'Carlos Quispe' },
  { id: '6', touristName: 'David Kim', destination: 'Reykjavik, Iceland', tourDate: '2024-11-12', budget: 5200, status: 'pending', guideName: 'Helga Jonsdottir' },
  { id: '7', touristName: 'Lisa Wang', destination: 'Paris, France', tourDate: '2024-07-14', budget: 2900, status: 'approved', guideName: 'Marie Laurent' },
  { id: '8', touristName: 'Robert Brown', destination: 'Cairo, Egypt', tourDate: '2024-10-01', budget: 1800, status: 'rejected', guideName: 'Ahmed Hassan' },
]
export default function TourRequestsPage() {
  const [requests, setRequests] = useState<TourRequest[]>(MOCK_REQUESTS)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  // Handlers
  const handleApprove = (id: string) => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ))
  }
  const handleReject = (id: string) => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ))
  }
  const handleViewDetails = (id: string) => {
    console.log('View details for:', id)
  }
  // Filtering Logic
  const filteredRequests = useMemo(() => {
    return requests.filter(req => {
      // Search Filter
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch = 
        req.touristName.toLowerCase().includes(searchLower) || 
        req.guideName.toLowerCase().includes(searchLower) ||
        req.destination.toLowerCase().includes(searchLower)
      // Status Filter
      const matchesStatus = statusFilter === 'all' || req.status === statusFilter
      // Date Filter
      let matchesDate = true
      if (startDate) {
        matchesDate = matchesDate && new Date(req.tourDate) >= new Date(startDate)
      }
      if (endDate) {
        matchesDate = matchesDate && new Date(req.tourDate) <= new Date(endDate)
      }
      return matchesSearch && matchesStatus && matchesDate
    })
  }, [requests, searchQuery, statusFilter, startDate, endDate])
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-emerald-50 via-sky-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tour Requests</h1>
              <p className="text-slate-500 mt-1">Manage and review incoming tour booking requests.</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              New Request
            </Button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Filters */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          startDate={startDate}
          onStartDateChange={setStartDate}
          endDate={endDate}
          onEndDateChange={setEndDate}
        />
        {/* Results Info */}
        <div className="flex items-center justify-between text-sm text-slate-500 px-1">
          <span>Showing {filteredRequests.length} requests</span>
          {(searchQuery || statusFilter !== 'all' || startDate || endDate) && (
            <button 
              onClick={() => {
                setSearchQuery('')
                setStatusFilter('all')
                setStartDate('')
                setEndDate('')
              }}
              className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
        {/* Content */}
        {filteredRequests.length > 0 ? (
          <>
            {/* Desktop View */}
            <div className="hidden md:block">
              <RequestTable
                requests={filteredRequests}
                onApprove={handleApprove}
                onReject={handleReject}
                onViewDetails={handleViewDetails}
              />
            </div>
            {/* Mobile View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {filteredRequests.map(req => (
                <RequestCard
                  key={req.id}
                  request={req}
                  onApprove={handleApprove}
                  onReject={handleReject}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
            <div className="mx-auto w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-slate-300" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No requests found</h3>
            <p className="text-slate-500 mt-1">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </main>
    </div>
  )
}