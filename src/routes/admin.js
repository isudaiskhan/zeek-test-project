import { HelpSharp, SubdirectoryArrowRight } from "@mui/icons-material";
import Image from "next/image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // description: "Class and studio",
    icon: (
      <Image
        src="/images/1.svg"
        alt="dashboard"
        width={20}
        height={20}
        priority
      />
    ),
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/zeek",
    name: "Zeek AI",
    icon: (
      <Image
        src="/images/2.svg"
        alt="Zeek AI"
        width={20}
        height={20}
        priority
      />
    ),
    sidebar: true,
    isPrivate: true,
  },

  {
    path: "/dashboard/crm",
    name: "CRM",
    icon: (
      <Image src="/images/3.svg" alt="CRM" width={20} height={20} priority />
    ),
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "#",
    name: "Campaigns",
    icon: (
      <Image src="/images/4.svg" alt="Users" width={20} height={20} priority />
    ),
    sidebar: true,
    isPrivate: true,
    subRoutes: [
      {
        path: "/dashboard/campaigns/notification",
        name: "Notification",
        icon: <SubdirectoryArrowRight />,
      },
      {
        path: "/dashboard/campaigns/segments",
        name: "Segments",
        icon: <SubdirectoryArrowRight />,
      },
    ],
  },

  {
    path: "/dashboard/analytics",
    name: "Analytics",
    icon: (
      <Image
        src="/images/5.svg"
        alt="Analytics"
        width={20}
        height={20}
        priority
      />
    ),
    sidebar: true,
    isPrivate: true,
  },

  {
    path: "/dashboard/reviews",
    name: "Reviews",
    icon: (
      <Image
        src="/images/6.svg"
        alt="Reviews"
        width={20}
        height={20}
        priority
      />
    ),
    sidebar: true,
    isPrivate: true,
  },

  {
    path: "/dashboard/loyalty",
    name: "Loyalty",
    icon: (
      <Image
        src="/images/7.svg"
        alt="Loyalty"
        width={24}
        height={24}
        priority
      />
    ),
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/promotions",
    name: "Promotions",
    icon: <LocalOfferIcon fontSize="small" sx={{ color: "#888888" }} />,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/branches",
    name: "Branches",
    icon: (
      <Image
        src="/images/8.svg"
        alt="Branches"
        width={20}
        height={20}
        priority
      />
    ),
    sidebar: true,
    isPrivate: true,
  },

  {
    path: "/dashboard/employees",
    name: "Employees",
    icon: (
      <Image
        src="/images/9.svg"
        alt="Employees"
        width={20}
        height={20}
        priority
      />
    ),
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/help-center",
    name: "Help Center",
    icon: <HelpSharp />,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/business-profile",
    name: "Business Profile",
    icon: (
      <Image
        src="/images/sato-sidebar.svg"
        alt="Business Profile"
        width={20}
        height={20}
        priority
      />
    ),
    sidebar: true,
    isPrivate: true,
  },
];

export const helpCenterRoutes = [
  {
    path: "/dashboard/help-center/faq",
    name: "FAQ",
    sidebar: true,
  },
  {
    path: "/dashboard/help-center/help-desk",
    name: "Help Desk",
    sidebar: true,
  },
];

export const businessProfileRoutes = [
  {
    path: "/dashboard/business-profile/profile",
    name: "Profile",
    sidebar: true,
  },
  {
    path: "/dashboard/business-profile/security",
    name: "Security",
    sidebar: true,
  },

  {
    path: "/dashboard/business-profile/menu",
    name: "Menu",
    sidebar: true,
  },

  {
    path: "/dashboard/business-profile/media-gallery",
    name: "Media Gallery",
    sidebar: true,
  },

  {
    path: "/dashboard/business-profile/points-management",
    name: "Points Management",
    sidebar: true,
  },

  {
    path: "/dashboard/business-profile/roles-permissions",
    name: "Roles and Permissions",
    sidebar: true,
  },

  {
    path: "/dashboard/business-profile/analytics-settings",
    name: "Analytics Settings",
    sidebar: true,
  },

  {
    path: "/dashboard/business-profile/subscription-billing",
    name: "Subscription & Billing",
    sidebar: true,
  },
];
