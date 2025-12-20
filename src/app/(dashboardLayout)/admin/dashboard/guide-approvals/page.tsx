"use client";
import { useState, useMemo } from 'react';
import { Users } from 'lucide-react';
import { ApplicationStatus, mockApplications } from '@/fakedata/applicationData';
import { SearchBar } from '@/components/modules/Admin/GuideApprovals/Searchbar';
import { StatusFilter } from '@/components/modules/Admin/GuideApprovals/StatusFilter';
import { ApplicationTable } from '@/components/modules/Admin/GuideApprovals/ApplicationTable';
import { ApplicationCard } from '@/components/modules/Admin/GuideApprovals/ApplicationCard';
export default function GuideApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'All'>('All');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [applications, setApplications] = useState(mockApplications);
  const handleApprove = (id: string) => {
    console.log(`Approving application ${id}`);
    setApplications(apps => 
      apps.map(app => app.id === id ? { ...app, status: 'Approved' } : app)
    );
  };
  const handleReject = (id: string) => {
    console.log(`Rejecting application ${id}`);
    setApplications(apps => 
      apps.map(app => app.id === id ? { ...app, status: 'Rejected' } : app)
    );
  };
  const handleViewDetails = (id: string) => {
    console.log(`Viewing details for application ${id}`);
  };
  const toggleSort = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };
  const filteredAndSortedApplications = useMemo(() => {
    return applications
      .filter((app) => {
        const matchesSearch =
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        const dateA = new Date(a.submittedDate).getTime();
        const dateB = new Date(b.submittedDate).getTime();
        return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
      });
  }, [applications, searchQuery, statusFilter, sortDirection]);
  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <div className="p-2 bg-teal-100 rounded-lg mr-3">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
                Guide Applications
              </h2>
            </div>
            <p className="mt-1 text-sm text-gray-500 ml-12">
              Review and manage incoming guide applications.
            </p>
          </div>
        </div>
        {/* Filters and Search */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 gap-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search applicants..."
          />
          <StatusFilter
            currentFilter={statusFilter}
            onFilterChange={setStatusFilter}
          />
        </div>
        {/* Content */}
        <div className="mt-4">
          {filteredAndSortedApplications.length === 0 ? (
            <div className="text-center py-12  rounded-lg shadow-sm border border-gray-200">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No applications found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter to find what youre looking for.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop View */}
              <div className="hidden md:block">
                <ApplicationTable
                  applications={filteredAndSortedApplications}
                  onApprove={handleApprove}
                  onReject={handleReject}
                  onViewDetails={handleViewDetails}
                  onSortDate={toggleSort}
                  sortDirection={sortDirection}
                />
              </div>
              {/* Mobile View */}
              <div className="md:hidden">
                {filteredAndSortedApplications.map((app) => (
                  <ApplicationCard
                    key={app.id}
                    application={app}
                    onApprove={handleApprove}
                    onReject={handleReject}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Footer Stats */}
        <div className="mt-4 text-sm text-gray-500 text-right">
          Showing {filteredAndSortedApplications.length} of {applications.length} applications
        </div>
      </div>
    </div>
  );
}