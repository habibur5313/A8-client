export type ApplicationStatus = 'Pending' | 'Approved' | 'Rejected';
export interface Application {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  submittedDate: string; // ISO date string
  status: ApplicationStatus;
  avatarUrl?: string;
}
export const mockApplications: Application[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    contactNumber: '+1 (555) 123-4567',
    submittedDate: '2023-10-24T10:30:00Z',
    status: 'Pending',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    contactNumber: '+1 (555) 987-6543',
    submittedDate: '2023-10-23T14:15:00Z',
    status: 'Approved',
    avatarUrl: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: '3',
    name: 'Jessica Williams',
    email: 'jess.w@example.com',
    contactNumber: '+1 (555) 456-7890',
    submittedDate: '2023-10-22T09:00:00Z',
    status: 'Rejected',
    avatarUrl: 'https://i.pravatar.cc/150?u=jessica',
  },
  {
    id: '4',
    name: 'David Rodriguez',
    email: 'david.r@example.com',
    contactNumber: '+1 (555) 234-5678',
    submittedDate: '2023-10-21T16:45:00Z',
    status: 'Pending',
    avatarUrl: 'https://i.pravatar.cc/150?u=david',
  },
  {
    id: '5',
    name: 'Emily Johnson',
    email: 'emily.j@example.com',
    contactNumber: '+1 (555) 876-5432',
    submittedDate: '2023-10-20T11:20:00Z',
    status: 'Approved',
    avatarUrl: 'https://i.pravatar.cc/150?u=emily',
  },
  {
    id: '6',
    name: 'Robert Kim',
    email: 'r.kim@example.com',
    contactNumber: '+1 (555) 345-6789',
    submittedDate: '2023-10-19T13:10:00Z',
    status: 'Pending',
  },
  {
    id: '7',
    name: 'Amanda Martinez',
    email: 'amanda.m@example.com',
    contactNumber: '+1 (555) 654-3210',
    submittedDate: '2023-10-18T15:30:00Z',
    status: 'Rejected',
    avatarUrl: 'https://i.pravatar.cc/150?u=amanda',
  },
  {
    id: '8',
    name: 'James Wilson',
    email: 'james.w@example.com',
    contactNumber: '+1 (555) 789-0123',
    submittedDate: '2023-10-17T08:45:00Z',
    status: 'Approved',
  },
];