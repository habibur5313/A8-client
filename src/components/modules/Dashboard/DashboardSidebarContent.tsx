"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getIconComponent } from "@/lib/icon-mapper";
import { NavSection } from "@/types/dashboard.interface";
import { UserInfo } from "@/types/user.interface";
import { Map } from "lucide-react";

interface DashboardSidebarContentProps {
  userInfo: UserInfo;
  navItems: NavSection[];
  dashboardHome: string;
}

const DashboardSidebarContent = ({
  userInfo,
  navItems,
  dashboardHome,
}: DashboardSidebarContentProps) => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-r border-slate-200/60 dark:border-slate-800/60 flex-col">
      
      {/* Logo / Brand */}
      <div className="p-6 border-b border-slate-200/60 dark:border-slate-800/60">
        <Link href={dashboardHome} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
            <Map className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-50">TravelGuide</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-6">
          {navItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              {section.title && (
                <h4 className="mb-2 px-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {section.title}
                </h4>
              )}

              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = getIconComponent(item.icon);
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                          isActive
                            ? "bg-linear-to-r from-blue-500 to-teal-500 text-white shadow-lg shadow-blue-500/25"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:text-slate-800 dark:hover:text-slate-50"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* Bottom User Info */}
      <div className="p-4 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80">
          <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
            {userInfo.profile.name.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-50 truncate">
              {userInfo.profile.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">
              {userInfo.role.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebarContent;
