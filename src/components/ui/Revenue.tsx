"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5100 },
  { month: 'Mar', revenue: 4800 },
  { month: 'Apr', revenue: 6200 },
  { month: 'May', revenue: 7500 },
  { month: 'Jun', revenue: 8100 },
];
export function RevenueChart() {
  return (
    <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/60 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-1">Revenue Overview</h2>
        <p className="text-sm text-slate-500">Monthly booking revenue</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="month" 
            stroke="#64748b"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#64748b"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="url(#colorGradient)" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}