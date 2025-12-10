import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);

  return [
    {
      items: [
        {
          title: "Dashboard",
          href: defaultDashboard,
          icon: "LayoutDashboard",
          roles: ["TOURIST", "GUIDE", "ADMIN", "SUPER_ADMIN"],
        },
        {
          title: "My Profile",
          href: `/my-profile`,
          icon: "User",
          roles: ["TOURIST", "GUIDE", "ADMIN", "SUPER_ADMIN"],
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Change Password",
          href: "/change-password",
          icon: "Settings",
          roles: ["TOURIST", "GUIDE", "ADMIN", "SUPER_ADMIN"],
        },
      ],
    },
  ];
};

/* -------------------------------------------------------------------------- */
/*                                  GUIDE NAV                                 */
/* -------------------------------------------------------------------------- */

export const guideNavItems: NavSection[] = [
  {
    title: "Guide Panel",
    items: [
      {
        title: "My Schedules",
        href: "/guide/dashboard/my-schedules",
        icon: "Clock",
        roles: ["GUIDE"],
      },
      {
        title: "Tour Requests",
        href: "/guide/dashboard/tour-requests",
        icon: "ListChecks",
        roles: ["GUIDE"],
      },
      {
        title: "Earnings",
        href: "/guide/dashboard/earnings",
        icon: "Wallet",
        roles: ["GUIDE"],
      },
      {
        title: "Reviews",
        href: "/guide/dashboard/reviews",
        icon: "Star",
        roles: ["GUIDE"],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                TOURIST NAV                                 */
/* -------------------------------------------------------------------------- */

export const touristNavItems: NavSection[] = [
  {
    title: "Bookings",
    items: [
      {
        title: "Book a Guide",
        href: "/tourist/dashboard/book-guide",
        icon: "Map",
        roles: ["TOURIST"],
      },
      {
        title: "My Bookings",
        href: "/tourist/dashboard/my-bookings",
        icon: "CalendarRange",
        roles: ["TOURIST"],
      },
      {
        title: "Payments",
        href: "/tourist/dashboard/payments",
        icon: "CreditCard",
        roles: ["TOURIST"],
      },
      {
        title: "Reviews",
        href: "/tourist/dashboard/reviews",
        icon: "MessageSquare",
        roles: ["TOURIST"],
      },
      {
        title: "Support",
        href: "/tourist/dashboard/support",
        icon: "LifeBuoy",
        roles: ["TOURIST"],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ADMIN NAV                                  */
/* -------------------------------------------------------------------------- */

export const adminNavItems: NavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Admins",
        href: "/admin/dashboard/admins-management",
        icon: "Shield",
        roles: ["ADMIN", "SUPER_ADMIN"],
      },
      {
        title: "Guides",
        href: "/admin/dashboard/guides-management",
        icon: "UsersRound",
        roles: ["ADMIN", "SUPER_ADMIN"],
      },
      {
        title: "Tourists",
        href: "/admin/dashboard/tourists-management",
        icon: "Users",
        roles: ["ADMIN", "SUPER_ADMIN"],
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        title: "Bookings",
        href: "/admin/dashboard/bookings",
        icon: "CalendarCheck",
        roles: ["ADMIN", "SUPER_ADMIN"],
      },
      {
        title: "Guide Applications",
        href: "/admin/dashboard/guide-approvals",
        icon: "FileCheck",
        roles: ["ADMIN", "SUPER_ADMIN"],
      },
      {
        title: "Payments",
        href: "/admin/dashboard/payments",
        icon: "DollarSign",
        roles: ["ADMIN", "SUPER_ADMIN"],
      },
      {
        title: "Support Tickets",
        href: "/admin/dashboard/support-tickets",
        icon: "Ticket",
        roles: ["ADMIN", "SUPER_ADMIN"],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                               MERGE BY ROLE                                 */
/* -------------------------------------------------------------------------- */

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const common = getCommonNavItems(role);

  switch (role) {
    case "ADMIN":
      return [...common, ...adminNavItems];

    case "GUIDE":
      return [...common, ...guideNavItems];

    case "TOURIST":
      return [...common, ...touristNavItems];

    default:
      return common;
  }
};
