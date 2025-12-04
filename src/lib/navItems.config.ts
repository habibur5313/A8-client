""
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
                    roles: ["TOURIST", "GUIDE", "ADMIN"],
                },
                {
                    title: "My Profile",
                    href: `/my-profile`,
                    icon: "User",
                    roles: ["TOURIST", "GUIDE", "ADMIN"],
                },

            ]
        },
        {
            title: "Settings",
            items: [
                {
                    title: "Change Password",
                    href: "/change-password",
                    icon: "Settings", // ✅ String
                    roles: ["TOURIST"],
                },
            ],
        },
    ]
}

export const guideNavItems: NavSection[] = [
    {
        title: "Tourist Management",
        items: [
            {
                title: "My Schedules",
                href: "/guide/dashboard/my-schedules",
                icon: "Clock", // ✅ String
                roles: ["GUIDE"],
            }
        ],
    }
]

export const touristNavItems: NavSection[] = [
    {
        title: "Appointments",
        items: [
        ],
    },

]

export const adminNavItems: NavSection[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Admins",
                href: "/admin/dashboard/admins-management",
                icon: "Shield", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Guides",
                href: "/admin/dashboard/guides-management",
                icon: "Stethoscope", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Tourists",
                href: "/admin/dashboard/tourists-management",
                icon: "Users", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    },
]

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
    const commonNavItems = getCommonNavItems(role);

    switch (role) {
        case "ADMIN":
            return [...commonNavItems, ...adminNavItems];
        case "GUIDE":
            return [...commonNavItems, ...guideNavItems];
        case "TOURIST":
            return [...commonNavItems, ...touristNavItems];
        default:
            return [];
    }
}