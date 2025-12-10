"use client";
import { useState, useMemo } from "react";
import { Download } from "lucide-react";
import {
  FilterState,
  Transaction,
  TransactionStats,
} from "@/types/payment.interface";
import { SummaryCards } from "@/components/modules/Admin/Payments/SummaryCard";
import { SearchBar } from "@/components/modules/Admin/GuideApprovals/Searchbar";
import { TransactionFilters } from "@/components/modules/Admin/Payments/TransactionFilter";
import { TransactionsTable } from "@/components/modules/Admin/Payments/TransactionTable";
import TablePagination from "@/components/shared/TablePagination";
// Mock Data Generation
const generateMockTransactions = (count: number): Transaction[] => {
  const types = ["Booking", "Withdrawal", "Refund"] as const;
  const statuses = ["Completed", "Pending", "Refunded"] as const;
  const roles = ["Tourist", "Guide"] as const;
  const names = [
    "Alex Johnson",
    "Maria Garcia",
    "James Smith",
    "Sarah Wilson",
    "Michael Brown",
    "Emily Davis",
  ];
  return Array.from({ length: count }, (_, i) => {
    const type = types[Math.floor(Math.random() * types.length)];
    // Logic to make status somewhat realistic based on type
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    if (type === "Withdrawal" && Math.random() > 0.7) status = "Pending";
    if (type === "Refund") status = "Refunded";
    return {
      id: `TRX-${10000 + i}`,
      user: {
        name: names[Math.floor(Math.random() * names.length)],
        role: roles[Math.floor(Math.random() * roles.length)],
        email: `user${i}@example.com`,
      },
      type,
      amount: Math.floor(Math.random() * 5000) + 50,
      date: new Date(
        Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
      ).toISOString(),
      status,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
const mockTransactions = generateMockTransactions(50);
const mockStats: TransactionStats = {
  totalRevenue: 124500,
  pendingWithdrawals: 12,
  completedWithdrawals: 450,
  refundRequests: 5,
};
export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    dateFrom: "",
    dateTo: "",
    type: "All",
    status: "All",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Filter Logic
  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter((t) => {
      // Search
      const matchesSearch =
        t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.user.name.toLowerCase().includes(searchQuery.toLowerCase());
      // Filters
      const matchesType = filters.type === "All" || t.type === filters.type;
      const matchesStatus =
        filters.status === "All" || t.status === filters.status;

      let matchesDate = true;
      if (filters.dateFrom) {
        matchesDate =
          matchesDate && new Date(t.date) >= new Date(filters.dateFrom);
      }
      if (filters.dateTo) {
        matchesDate =
          matchesDate && new Date(t.date) <= new Date(filters.dateTo);
      }
      return matchesSearch && matchesType && matchesStatus && matchesDate;
    });
  }, [searchQuery, filters]);
  // Pagination Logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleClearFilters = () => {
    setFilters({
      dateFrom: "",
      dateTo: "",
      type: "All",
      status: "All",
    });
    setSearchQuery("");
    setCurrentPage(1);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Payments & Transactions
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage all financial transactions, withdrawals, and refunds.
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <Download
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Export Report
            </button>
          </div>
        </div>
        {/* Summary Cards */}
        <div className="mb-8">
          <SummaryCards stats={mockStats} />
        </div>
        {/* Main Content Area */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                All Transactions
              </h3>
              <SearchBar
                value={searchQuery}
                onChange={(val) => {
                  setSearchQuery(val);
                  setCurrentPage(1);
                }}
                placeholder="Search by ID or User..."
              />
            </div>

            <TransactionFilters
              filters={filters}
              onFilterChange={(f) => {
                setFilters(f);
                setCurrentPage(1);
              }}
              onClearFilters={handleClearFilters}
            />
          </div>
          <TransactionsTable transactions={paginatedTransactions} />

          <TablePagination currentPage={currentPage} totalPages={totalPages} />

          {/* <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredTransactions.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          /> */}
        </div>
      </div>
    </div>
  );
}
