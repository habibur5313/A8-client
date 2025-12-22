import DashboardNavbar from "@/components/modules/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/modules/Dashboard/DashboardSidebar";
import React from "react";

export const dynamic = "force-dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Travel Guide",
  description: "Dashboard | Travel Guide",
};

export default function CommonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="flex h-screen overflow-hidden">
          <DashboardSidebar />
          <div className="flex flex-1 flex-col overflow-hidden">
            <DashboardNavbar />
            <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">
              <div>{children}</div>
            </main>
          </div>
        </div>
  );
}
