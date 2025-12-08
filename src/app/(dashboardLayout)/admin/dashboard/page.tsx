import { ActivityFeed } from "@/components/ui/Activity";
import { RevenueChart } from "@/components/ui/Revenue";
import { StatCard } from "@/components/ui/StatCard";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { Calendar, List, MessageCircle, TrendingUp } from "lucide-react";

const AdminDashboardPage = async () => {
  const userInfo = await getUserInfo();
return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome back, {userInfo?.name}! 👋</h1>
        <p className="text-slate-600">Here&apos;s what&apos;s happening with your tours today.</p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Bookings"
          value="248"
          change="+12.5%"
          changeType="positive"
          icon={<Calendar className="text-blue-600" size={24} />}
          iconColor="bg-blue-100"
        />
        <StatCard
          title="Active Tours"
          value="12"
          change="+2"
          changeType="positive"
          icon={<List className="text-teal-600" size={24} />}
          iconColor="bg-teal-100"
        />
        <StatCard
          title="New Messages"
          value="18"
          change="+5"
          changeType="positive"
          icon={<MessageCircle className="text-orange-600" size={24} />}
          iconColor="bg-orange-100"
        />
        <StatCard
          title="Profile Score"
          value="85%"
          change="+15%"
          changeType="positive"
          icon={<TrendingUp className="text-emerald-600" size={24} />}
          iconColor="bg-emerald-100"
        />
      </div>
      {/* Chart and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
