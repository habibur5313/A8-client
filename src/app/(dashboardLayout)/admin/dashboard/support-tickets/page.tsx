"use client";
import { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import { Ticket } from '@/types/ticket.interface';
import { mockTickets } from '@/fakedata/mockTickets';
import { FilterBar } from '@/components/modules/Admin/SupportTicket/FilterBar';
import { TicketTable } from '@/components/modules/Admin/SupportTicket/TicketTable';
import { TicketDetailsPanel } from '@/components/modules/Admin/SupportTicket/TicketDetailPanel';
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Support Tickets | Travel Guide",
//   description: "Support Tickets | Travel Guide",
// };
export default function SupportTicket() {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  // Filtering Logic
  const filteredTickets = useMemo(() => {
    return tickets.filter(ticket => {
      const matchesSearch = 
        ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.user.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
      const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tickets, searchQuery, statusFilter, priorityFilter]);
  // Handlers
  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsPanelOpen(true);
  };
  const handleStatusChange = (id: string, newStatus: Ticket['status']) => {
    setTickets(prev => prev.map(t => 
      t.id === id ? { ...t, status: newStatus, updatedAt: new Date().toISOString() } : t
    ));
    
    // Update selected ticket if it's the one being modified
    if (selectedTicket && selectedTicket.id === id) {
      setSelectedTicket(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };
  const handleSelectTicket = (id: string) => {
    setSelectedTickets(prev => 
      prev.includes(id) ? prev.filter(tid => tid !== id) : [...prev, id]
    );
  };
  const handleSelectAll = (ids: string[]) => {
    setSelectedTickets(ids);
  };
  const handleBulkAction = (action: 'close' | 'delete') => {
    if (action === 'close') {
      setTickets(prev => prev.map(t => 
        selectedTickets.includes(t.id) ? { ...t, status: 'Closed' } : t
      ));
    }
    // Reset selection after action
    setSelectedTickets([]);
  };
  return (
    <div className="min-h-screen ">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Support Tickets</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and respond to user support requests.</p>
        </div>
        {/* Filters */}
        <FilterBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          priorityFilter={priorityFilter}
          onPriorityFilterChange={setPriorityFilter}
        />
        {/* Table */}
        <TicketTable 
          tickets={filteredTickets}
          selectedTickets={selectedTickets}
          onSelectTicket={handleSelectTicket}
          onSelectAll={handleSelectAll}
          onTicketClick={handleTicketClick}
          onStatusChange={handleStatusChange}
        />
        {/* Bulk Actions Bar */}
        {selectedTickets.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-6 z-30 animate-in slide-in-from-bottom-4">
            <span className="font-medium">{selectedTickets.length} selected</span>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleBulkAction('close')}
                className="text-sm hover:text-green-400 transition-colors font-medium"
              >
                Mark as Closed
              </button>
              <button 
                onClick={() => setSelectedTickets([])}
                className="ml-4 p-1 hover:bg-slate-800 rounded-full"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
        {/* Details Panel */}
        <TicketDetailsPanel 
          ticket={selectedTicket}
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
}