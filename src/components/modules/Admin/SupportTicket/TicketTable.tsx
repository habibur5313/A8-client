import { useState } from 'react';
import { ArrowUpDown, Eye, CheckSquare } from 'lucide-react';
import { Ticket } from '@/types/ticket.interface';
import { Badge } from '@/components/ui/badge2';
interface TicketTableProps {
  tickets: Ticket[];
  selectedTickets: string[];
  onSelectTicket: (id: string) => void;
  onSelectAll: (ids: string[]) => void;
  onTicketClick: (ticket: Ticket) => void;
  onStatusChange: (id: string, status: Ticket['status']) => void;
}
export function TicketTable({ 
  tickets, 
  selectedTickets, 
  onSelectTicket, 
  onSelectAll,
  onTicketClick,
  onStatusChange
}: TicketTableProps) {
  const [sortField, setSortField] = useState<keyof Ticket>('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const handleSort = (field: keyof Ticket) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };
  const sortedTickets = [...tickets].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    // Handle nested objects if needed, for now simple fields
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Open': return 'info';
      case 'In Progress': return 'warning';
      case 'Closed': return 'success';
      default: return 'default';
    }
  };
  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'warning';
      case 'Low': return 'secondary';
      default: return 'default';
    }
  };
  const allSelected = tickets.length > 0 && selectedTickets.length === tickets.length;
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 w-10">
                <input 
                  type="checkbox" 
                  className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                  checked={allSelected}
                  onChange={(e) => onSelectAll(e.target.checked ? tickets.map(t => t.id) : [])}
                />
              </th>
              <th 
                className="px-4 py-3 cursor-pointer hover:text-slate-700"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center gap-1">
                  ID <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">User</th>
              <th 
                className="px-4 py-3 cursor-pointer hover:text-slate-700"
                onClick={() => handleSort('createdAt')}
              >
                <div className="flex items-center gap-1">
                  Date <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sortedTickets.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-slate-500">
                  No tickets found matching your filters.
                </td>
              </tr>
            ) : (
              sortedTickets.map((ticket) => (
                <tr 
                  key={ticket.id} 
                  className={`hover:bg-slate-50 transition-colors ${selectedTickets.includes(ticket.id) ? 'bg-slate-50' : ''}`}
                >
                  <td className="px-4 py-3">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                      checked={selectedTickets.includes(ticket.id)}
                      onChange={() => onSelectTicket(ticket.id)}
                    />
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-600">{ticket.id}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    <button onClick={() => onTicketClick(ticket)} className="hover:underline text-left">
                      {ticket.subject}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="text-slate-900">{ticket.user.name}</span>
                      <span className="text-xs text-slate-500">{ticket.user.email}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={getStatusBadgeVariant(ticket.status)}>
                      {ticket.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={getPriorityBadgeVariant(ticket.priority)}>
                      {ticket.priority}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => onTicketClick(ticket)}
                        className="p-1 text-slate-400 hover:text-slate-600 rounded"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      {ticket.status !== 'Closed' && (
                        <button 
                          onClick={() => onStatusChange(ticket.id, 'Closed')}
                          className="p-1 text-slate-400 hover:text-green-600 rounded"
                          title="Close Ticket"
                        >
                          <CheckSquare className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}