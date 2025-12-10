export type TransactionType = 'Booking' | 'Withdrawal' | 'Refund';
export type TransactionStatus = 'Completed' | 'Pending' | 'Refunded';
export interface Transaction {
  id: string;
  user: {
    name: string;
    role: 'Tourist' | 'Guide';
    email: string;
  };
  type: TransactionType;
  amount: number;
  date: string;
  status: TransactionStatus;
}
export interface TransactionStats {
  totalRevenue: number;
  pendingWithdrawals: number;
  completedWithdrawals: number;
  refundRequests: number;
}
export interface FilterState {
  dateFrom: string;
  dateTo: string;
  type: TransactionType | 'All';
  status: TransactionStatus | 'All';
}