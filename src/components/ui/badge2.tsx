import React from 'react';
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'destructive' | 'success' | 'warning' | 'info';
  className?: string;
}
export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/80",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
    destructive: "bg-red-100 text-red-700 hover:bg-red-100/80", // High priority
    success: "bg-green-100 text-green-700 hover:bg-green-100/80", // Closed
    warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80", // In Progress
    info: "bg-blue-100 text-blue-700 hover:bg-blue-100/80", // Open
    outline: "text-slate-950 border border-slate-200 hover:bg-slate-100",
  };
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}