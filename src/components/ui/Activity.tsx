import { Calendar, MessageCircle, MapPin, Clock } from 'lucide-react';
interface Activity {
  id: number;
  type: 'booking' | 'message' | 'tour';
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  iconColor: string;
}
export function ActivityFeed() {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'booking',
      title: 'New Booking',
      description: 'Sarah Johnson booked "Paris City Tour"',
      time: '2 hours ago',
      icon: <Calendar size={16} />,
      iconColor: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      description: 'Mike Chen: "What time does the tour start?"',
      time: '4 hours ago',
      icon: <MessageCircle size={16} />,
      iconColor: 'bg-teal-100 text-teal-600',
    },
    {
      id: 3,
      type: 'tour',
      title: 'Tour Completed',
      description: 'Rome Historical Walk - 5★ rating received',
      time: '6 hours ago',
      icon: <MapPin size={16} />,
      iconColor: 'bg-orange-100 text-orange-600',
    },
    {
      id: 4,
      type: 'booking',
      title: 'Booking Confirmed',
      description: 'Emma Wilson confirmed "Venice Gondola Tour"',
      time: '1 day ago',
      icon: <Calendar size={16} />,
      iconColor: 'bg-blue-100 text-blue-600',
    },
  ];
  return (
    <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/60 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-1">Recent Activity</h2>
        <p className="text-sm text-slate-500">Latest updates and notifications</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50/80 transition-colors">
            <div className={`w-8 h-8 rounded-lg ${activity.iconColor} flex items-center justify-center flex-shrink-0`}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800">{activity.title}</p>
              <p className="text-sm text-slate-600 truncate">{activity.description}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0">
              <Clock size={12} />
              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}