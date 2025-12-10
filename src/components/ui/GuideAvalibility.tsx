"use client"
import { useState } from 'react'
import { Power } from 'lucide-react'
export function AvailabilityToggle() {
  const [isAvailable, setIsAvailable] = useState(true)
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900">Guide Availability</h3>
        <div className={`p-2 rounded-full ${isAvailable ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
          <Power className="w-5 h-5" />
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`text-sm font-medium ${isAvailable ? 'text-emerald-600' : 'text-slate-500'}`}>
          {isAvailable ? 'Available for Tours' : 'Not Available'}
        </span>
        
        <button
          onClick={() => setIsAvailable(!isAvailable)}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isAvailable ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-200'
          }`}
          aria-pressed={isAvailable}
          aria-label="Toggle availability"
        >
          <span
            className={`${
              isAvailable ? 'translate-x-7' : 'translate-x-1'
            } inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 shadow-sm`}
          />
        </button>
      </div>
      <p className="text-xs text-slate-400 mt-3">
        Toggle to manage your visibility to tourists instantly.
      </p>
    </div>
  )
}