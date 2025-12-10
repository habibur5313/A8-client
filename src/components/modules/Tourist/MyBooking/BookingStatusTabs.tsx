import React from 'react';
import { BookingStatus } from '@/types/booking.interface';
interface StatusTabsProps {
  currentTab: BookingStatus | 'all';
  onTabChange: (tab: BookingStatus | 'all') => void;
}
export function StatusTabs({ currentTab, onTabChange }: StatusTabsProps) {
  const tabs: { id: BookingStatus | 'all'; label: string }[] = [
    { id: 'all', label: 'All Bookings' },
    { id: 'pending', label: 'Pending' },
    { id: 'confirmed', label: 'Confirmed' },
    { id: 'completed', label: 'Completed' },
    { id: 'canceled', label: 'Canceled' },
  ];
  return (
    <div className="border-b border-gray-200 mb-6 overflow-x-auto">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
              ${
                currentTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
            aria-current={currentTab === tab.id ? 'page' : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}