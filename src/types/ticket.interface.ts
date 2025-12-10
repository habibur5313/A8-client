export type TicketStatus = 'Open' | 'In Progress' | 'Closed';
export type TicketPriority = 'High' | 'Medium' | 'Low';
export interface User {
  name: string;
  email: string;
  avatar?: string;
}
export interface Ticket {
  id: string;
  subject: string;
  description: string;
  user: User;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string; // ISO date string
  updatedAt: string;
  messages: {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
    isAgent: boolean;
  }[];
}