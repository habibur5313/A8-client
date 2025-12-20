"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const data = [
  { month: 'Jan', earnings: 1200 },
  { month: 'Feb', earnings: 1900 },
  { month: 'Mar', earnings: 1500 },
  { month: 'Apr', earnings: 2100 },
  { month: 'May', earnings: 2400 },
  { month: 'Jun', earnings: 2800 },
  { month: 'Jul', earnings: 3200 },
  { month: 'Aug', earnings: 2900 },
  { month: 'Sep', earnings: 3500 },
  { month: 'Oct', earnings: 3100 },
  { month: 'Nov', earnings: 3800 },
  { month: 'Dec', earnings: 4200 },
]
export function EarningsChart() {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Earnings Overview</CardTitle>
        <select className="text-sm border-slate-200 rounded-md text-slate-600 dark:text-slate-400 dark:border-slate-600 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
          <option>Last 12 Months</option>
          <option>Last 6 Months</option>
          <option>This Year</option>
        </select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0d9488" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 12 }} 
                tickFormatter={(value) => `$${value}`}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                }}
                formatter={(value: number) => [`$${value}`, 'Earnings']}
              />
              <Area 
                type="monotone" 
                dataKey="earnings" 
                stroke="#0d9488" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorEarnings)" 
                activeDot={{ r: 6, fill: '#0d9488', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}