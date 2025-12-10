import { Badge } from '@/components/ui/badge2';
import { Button } from '@/components/ui/button';
import { Ticket } from '@/types/ticket.interface';
import { X, User, Clock, Tag, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
interface TicketDetailsPanelProps {
  ticket: Ticket | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (id: string, status: Ticket['status']) => void;
}
export function TicketDetailsPanel({ ticket, isOpen, onClose, onStatusChange }: TicketDetailsPanelProps) {
  if (!ticket) return null;
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
      case 'Medium': return 'warning'; // Using warning color for medium
      case 'Low': return 'secondary';
      default: return 'default';
    }
  };
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      {/* Panel */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-mono text-slate-500">{ticket.id}</span>
                <Badge variant={getStatusBadgeVariant(ticket.status)}>{ticket.status}</Badge>
              </div>
              <h2 className="text-lg font-semibold text-slate-900 line-clamp-1">{ticket.subject}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs uppercase font-semibold tracking-wider">
                  <User className="h-3 w-3" /> Requested By
                </div>
                <div className="font-medium text-slate-900">{ticket.user.name}</div>
                <div className="text-sm text-slate-500">{ticket.user.email}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 mb-1 text-xs uppercase font-semibold tracking-wider">
                  <Clock className="h-3 w-3" /> Submitted
                </div>
                <div className="font-medium text-slate-900">{new Date(ticket.createdAt).toLocaleDateString()}</div>
                <div className="text-sm text-slate-500">{new Date(ticket.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
              </div>
            </div>
            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-slate-500" /> Description
              </h3>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-slate-700 text-sm leading-relaxed">
                {ticket.description}
              </div>
            </div>
            {/* Priority & Tags */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Tag className="h-4 w-4 text-slate-500" /> Properties
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">Priority:</span>
                  <Badge variant={getPriorityBadgeVariant(ticket.priority)}>{ticket.priority}</Badge>
                </div>
              </div>
            </div>
            {/* Actions Area */}
            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onStatusChange(ticket.id, 'Open')}
                  disabled={ticket.status === 'Open'}
                >
                  <AlertCircle className="h-4 w-4 mr-2" /> Reopen
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onStatusChange(ticket.id, 'In Progress')}
                  disabled={ticket.status === 'In Progress'}
                >
                  <Clock className="h-4 w-4 mr-2" /> Mark In Progress
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={ticket.status !== 'Closed' ? "text-green-700 hover:text-green-800 hover:bg-green-50 border-green-200" : ""}
                  onClick={() => onStatusChange(ticket.id, 'Closed')}
                  disabled={ticket.status === 'Closed'}
                >
                  <CheckCircle className="h-4 w-4 mr-2" /> Close Ticket
                </Button>
              </div>
            </div>
            {/* Reply Input (Mock) */}
            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Add Internal Note</h3>
              <textarea 
                className="w-full p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-400 focus:outline-none min-h-[100px]"
                placeholder="Type a note for the team..."
              />
              <div className="mt-2 flex justify-end">
                <Button size="sm">
                  <Send className="h-3 w-3 mr-2" /> Post Note
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}