import { Ticket } from "@/types/ticket.interface";

const generateMockTickets = (): Ticket[] => {
  const tickets: Ticket[] = [
    {
      id: 'T-1001',
      subject: 'Login page is throwing 500 error',
      description: 'I cannot log in to my account. It keeps showing a server error.',
      user: { name: 'Alice Johnson', email: 'alice@example.com' },
      status: 'Open',
      priority: 'High',
      createdAt: '2023-10-25T09:00:00Z',
      updatedAt: '2023-10-25T09:00:00Z',
      messages: [
        { id: 'm1', sender: 'Alice Johnson', content: 'I cannot log in.', timestamp: '2023-10-25T09:00:00Z', isAgent: false }
      ]
    },
    {
      id: 'T-1002',
      subject: 'Feature request: Dark mode',
      description: 'It would be great to have a dark mode for the dashboard.',
      user: { name: 'Bob Smith', email: 'bob@example.com' },
      status: 'In Progress',
      priority: 'Low',
      createdAt: '2023-10-24T14:30:00Z',
      updatedAt: '2023-10-25T10:00:00Z',
      messages: [
        { id: 'm2', sender: 'Bob Smith', content: 'Any update on dark mode?', timestamp: '2023-10-24T14:30:00Z', isAgent: false },
        { id: 'm3', sender: 'Support Agent', content: 'We are working on it!', timestamp: '2023-10-25T10:00:00Z', isAgent: true }
      ]
    },
    {
      id: 'T-1003',
      subject: 'Billing discrepancy in October invoice',
      description: 'I was charged twice for the subscription.',
      user: { name: 'Charlie Brown', email: 'charlie@example.com' },
      status: 'Open',
      priority: 'High',
      createdAt: '2023-10-26T08:15:00Z',
      updatedAt: '2023-10-26T08:15:00Z',
      messages: []
    },
    {
      id: 'T-1004',
      subject: 'How to export data?',
      description: 'I need to export my project data to CSV.',
      user: { name: 'Diana Prince', email: 'diana@example.com' },
      status: 'Closed',
      priority: 'Medium',
      createdAt: '2023-10-20T11:20:00Z',
      updatedAt: '2023-10-21T09:45:00Z',
      messages: []
    },
    {
      id: 'T-1005',
      subject: 'Mobile app crashes on startup',
      description: 'Using iPhone 13, iOS 17. App crashes immediately.',
      user: { name: 'Evan Wright', email: 'evan@example.com' },
      status: 'Open',
      priority: 'High',
      createdAt: '2023-10-26T10:00:00Z',
      updatedAt: '2023-10-26T10:00:00Z',
      messages: []
    },
    {
      id: 'T-1006',
      subject: 'Update email address',
      description: 'I need to change my account email.',
      user: { name: 'Fiona Gallagher', email: 'fiona@example.com' },
      status: 'In Progress',
      priority: 'Low',
      createdAt: '2023-10-23T16:45:00Z',
      updatedAt: '2023-10-24T09:00:00Z',
      messages: []
    },
    {
      id: 'T-1007',
      subject: 'Integration with Slack not working',
      description: 'The webhook seems to be failing.',
      user: { name: 'George Martin', email: 'george@example.com' },
      status: 'Open',
      priority: 'Medium',
      createdAt: '2023-10-25T13:20:00Z',
      updatedAt: '2023-10-25T13:20:00Z',
      messages: []
    },
    {
      id: 'T-1008',
      subject: 'Account locked out',
      description: 'Too many failed attempts, please unlock.',
      user: { name: 'Hannah Abbott', email: 'hannah@example.com' },
      status: 'Closed',
      priority: 'High',
      createdAt: '2023-10-19T08:00:00Z',
      updatedAt: '2023-10-19T08:30:00Z',
      messages: []
    },
    {
      id: 'T-1009',
      subject: 'Question about API limits',
      description: 'What is the rate limit for the free tier?',
      user: { name: 'Ian Malcolm', email: 'ian@example.com' },
      status: 'Closed',
      priority: 'Low',
      createdAt: '2023-10-18T15:10:00Z',
      updatedAt: '2023-10-18T16:00:00Z',
      messages: []
    },
    {
      id: 'T-1010',
      subject: 'Slow performance on dashboard',
      description: 'Loading graphs takes more than 10 seconds.',
      user: { name: 'Jack Sparrow', email: 'jack@example.com' },
      status: 'In Progress',
      priority: 'Medium',
      createdAt: '2023-10-22T10:30:00Z',
      updatedAt: '2023-10-24T11:15:00Z',
      messages: []
    },
    {
      id: 'T-1011',
      subject: 'Typo in documentation',
      description: 'Page 3, paragraph 2 has a typo.',
      user: { name: 'Karen Page', email: 'karen@example.com' },
      status: 'Open',
      priority: 'Low',
      createdAt: '2023-10-26T11:00:00Z',
      updatedAt: '2023-10-26T11:00:00Z',
      messages: []
    },
    {
      id: 'T-1012',
      subject: 'Refund request',
      description: 'I am not satisfied with the product.',
      user: { name: 'Liam Neeson', email: 'liam@example.com' },
      status: 'Open',
      priority: 'High',
      createdAt: '2023-10-26T09:30:00Z',
      updatedAt: '2023-10-26T09:30:00Z',
      messages: []
    },
    {
      id: 'T-1013',
      subject: 'Cannot upload avatar',
      description: 'Upload fails with generic error.',
      user: { name: 'Mia Wallace', email: 'mia@example.com' },
      status: 'In Progress',
      priority: 'Medium',
      createdAt: '2023-10-24T12:00:00Z',
      updatedAt: '2023-10-25T14:20:00Z',
      messages: []
    },
    {
      id: 'T-1014',
      subject: 'Delete my account',
      description: 'Please remove all my data.',
      user: { name: 'Noah Centineo', email: 'noah@example.com' },
      status: 'Closed',
      priority: 'Medium',
      createdAt: '2023-10-15T09:00:00Z',
      updatedAt: '2023-10-15T10:00:00Z',
      messages: []
    },
    {
      id: 'T-1015',
      subject: 'Custom domain setup',
      description: 'DNS records are not propagating.',
      user: { name: 'Olivia Wilde', email: 'olivia@example.com' },
      status: 'Open',
      priority: 'High',
      createdAt: '2023-10-26T07:45:00Z',
      updatedAt: '2023-10-26T07:45:00Z',
      messages: []
    }
  ];
  return tickets;
};
export const mockTickets = generateMockTickets();