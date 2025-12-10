"use client"
import { BookingsFilters } from '@/components/modules/Admin/BookingManagement/BookingFillters'
import { BookingStatus } from '@/components/modules/Admin/BookingManagement/BookingStatusBadge'
import { BookingsSummaryCards } from '@/components/modules/Admin/BookingManagement/BookingSummury'
import { Booking, BookingsTable } from '@/components/modules/Admin/BookingManagement/BookingTable'
import React, { useState, useMemo } from 'react'
// Mock Data Generation
const MOCK_BOOKINGS: Booking[] = [
  { id: 'BK-2024-001', touristName: 'Alice Johnson', guideName: 'John Smith', date: '2024-03-15', status: 'confirmed', price: 150 },
  { id: 'BK-2024-002', touristName: 'Bob Wilson', guideName: 'Sarah Davis', date: '2024-03-16', status: 'pending', price: 200 },
  { id: 'BK-2024-003', touristName: 'Charlie Brown', guideName: 'Mike Miller', date: '2024-03-14', status: 'completed', price: 180 },
  { id: 'BK-2024-004', touristName: 'Diana Prince', guideName: 'John Smith', date: '2024-03-20', status: 'cancelled', price: 300 },
  { id: 'BK-2024-005', touristName: 'Evan Wright', guideName: 'Sarah Davis', date: '2024-03-15', status: 'confirmed', price: 150 },
  { id: 'BK-2024-006', touristName: 'Fiona Green', guideName: 'Mike Miller', date: '2024-03-18', status: 'pending', price: 220 },
  { id: 'BK-2024-007', touristName: 'George King', guideName: 'John Smith', date: '2024-03-14', status: 'completed', price: 160 },
  { id: 'BK-2024-008', touristName: 'Hannah Lee', guideName: 'Sarah Davis', date: '2024-03-22', status: 'confirmed', price: 190 },
  { id: 'BK-2024-009', touristName: 'Ian Clark', guideName: 'Mike Miller', date: '2024-03-25', status: 'pending', price: 210 },
  { id: 'BK-2024-010', touristName: 'Julia Scott', guideName: 'John Smith', date: '2024-03-15', status: 'cancelled', price: 150 },
  { id: 'BK-2024-011', touristName: 'Kevin White', guideName: 'Sarah Davis', date: '2024-03-16', status: 'confirmed', price: 250 },
  { id: 'BK-2024-012', touristName: 'Laura Hall', guideName: 'Mike Miller', date: '2024-03-14', status: 'completed', price: 175 },
  { id: 'BK-2024-013', touristName: 'Mark Young', guideName: 'John Smith', date: '2024-03-28', status: 'pending', price: 300 },
  { id: 'BK-2024-014', touristName: 'Nancy Allen', guideName: 'Sarah Davis', date: '2024-03-15', status: 'confirmed', price: 180 },
  { id: 'BK-2024-015', touristName: 'Oscar Hill', guideName: 'Mike Miller', date: '2024-03-30', status: 'pending', price: 220 },
]
const UNIQUE_GUIDES = Array.from(new Set(MOCK_BOOKINGS.map(b => b.guideName)))
export default function BookingsManagementPage() {
  // State
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<BookingStatus | 'all'>('all')
  const [guideFilter, setGuideFilter] = useState('all')
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS)
  // Derived State: Filtered Bookings
  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      // Search Filter
      const matchesSearch = 
        booking.touristName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchQuery.toLowerCase())
      
      // Status Filter
      const matchesStatus = statusFilter === 'all' || booking.status === statusFilter
      
      // Guide Filter
      const matchesGuide = guideFilter === 'all' || booking.guideName === guideFilter
      
      // Date Range Filter
      const bookingDate = new Date(booking.date)
      const matchesStartDate = !dateRange.start || bookingDate >= new Date(dateRange.start)
      const matchesEndDate = !dateRange.end || bookingDate <= new Date(dateRange.end)
      
      return matchesSearch && matchesStatus && matchesGuide && matchesStartDate && matchesEndDate
    })
  }, [bookings, searchQuery, statusFilter, guideFilter, dateRange])
  // Derived State: Summary Stats
  const stats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0]
    return {
      totalToday: bookings.filter(b => b.date === today).length,
      pending: bookings.filter(b => b.status === 'pending').length,
      completed: bookings.filter(b => b.status === 'completed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length,
    }
  }, [bookings])
  // Handlers
  const handleView = (id: string) => {
    console.log(`View booking details for ${id}`)
    // In a real app, this would navigate to a details page or open a modal
  }
  const handleCancel = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(prev => prev.map(b => 
        b.id === id ? { ...b, status: 'cancelled' } : b
      ))
    }
  }
  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Bookings Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage and oversee all travel bookings, monitor statuses, and handle cancellations.
          </p>
        </div>
        {/* Summary Cards */}
        <BookingsSummaryCards stats={stats} />
        {/* Filters & Controls */}
        <BookingsFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          guideFilter={guideFilter}
          onGuideFilterChange={setGuideFilter}
          guides={UNIQUE_GUIDES}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />
        {/* Main Table */}
        <BookingsTable
          bookings={filteredBookings}
          onView={handleView}
          onCancel={handleCancel}
        />
      </div>
    </div>
  )
}