interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  iconColor: string;
}
export function StatCard({ title, value, change, changeType = 'neutral', icon, iconColor }: StatCardProps) {
  const changeColors = {
    positive: 'text-emerald-600 bg-emerald-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-slate-600 bg-slate-50',
  };
  return (
    <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${iconColor} flex items-center justify-center`}>
          {icon}
        </div>
        {change && (
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${changeColors[changeType]}`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-slate-600 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-slate-800">{value}</p>
    </div>
  );
}