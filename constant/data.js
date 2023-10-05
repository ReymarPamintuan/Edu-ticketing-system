export const menuItems = [
  {
    title: "Dashboard",
    icon: "bi:cursor",
    link: "dashboard",
    isHide: true,
  },

  {
    title: "Add New Entry",
    isHide: true,
    icon: "heroicons-outline:mail",
    link: "add-new-entry",
  },

  {
    title: "Evaluations",
    icon: "uil:award",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Forms",
        childlink: "forms",
      },
      {
        childtitle: "Formative",
        childlink: "formative",
      },
      {
        childtitle: "Summative",
        childlink: "summative",
      },
      {
        childtitle: "Best Practices",
        childlink: "best-practices",
      },
    ],
  },

  {
    title: "My Score",
    icon: "carbon:favorite",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "My Report Card",
        childlink: "my-report-card",
      },
      {
        childtitle: "Group Report Card",
        childlink: "group-report-card",
      },
    ],
  },

  {
    title: "ScoreCards",
    icon: "icon-park-outline:trophy",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "{ScoreCard 1}",
        childlink: "scorecard-1",
      },
      {
        childtitle: "{ScoreCard 2}",
        childlink: "scorecard-2",
      },
      {
        childtitle: "{ScoreCard 3}",
        childlink: "scorecard-3",
      },
      {
        childtitle: "{ScoreCard N}",
        childlink: "scorecard-n",
      },
    ],
  },

  {
    title: "QuestionBoard",
    icon: "bi:question-circle",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Create Survey",
        childlink: "create-survey",
      },
      {
        childtitle: "Manage Surveys",
        childlink: "manage-survey",
      },
      {
        childtitle: "Review Answers",
        childlink: "review-answers",
      },
      {
        childtitle: "Unanswered Surveys",
        childlink: "unanswered-surveys",
      },
    ],
  },

  {
    title: "RTI",
    icon: "ep:pie-chart",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Record RTI",
        childlink: "record-rti",
      },
      {
        childtitle: "RTI Tracker",
        childlink: "rti-tracker",
      },
      {
        childtitle: "RTI Settings",
        childlink: "rti-settings",
      },
    ],
  },

  {
    title: "Reports",
    icon: "la:chart-bar-solid",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "ScoreBoard",
        childlink: "scoreboard",
      },
      {
        childtitle: "FactorBoard",
        childlink: "factorboard",
      },
      {
        childtitle: "KudosBoard",
        childlink: "kudosboard",
      },
      {
        childtitle: "Belding Board",
        childlink: "belding-board",
      },
      {
        childtitle: "VersusBoard",
        childlink: "versusboard",
      },
      {
        childtitle: "Org Chart",
        childlink: "org-chart",
      },
      {
        childtitle: "Usage Board",
        childlink: "usage-board",
      },
    ],
  },

  {
    title: "Ticketing",
    icon: "tdesign:discount",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Dashboard",
        childlink: "ticketing-dashboard",
      },
      {
        childtitle: "My Tickets",
        childlink: "my-tickets",
      },
      {
        childtitle: "Create Ticket",
        childlink: "create-ticket",
      },
      {
        childtitle: "Reports",
        childlink: "reports",
        multi_menu: [
          {
            multiTitle: "Ticket Reports",
            multiLink: "ticket-reports",
          },
          {
            multiTitle: "Financial Reports",
            multiLink: "financial-reports",
          },
          {
            multiTitle: "Export Financials",
            multiLink: "export-financials",
          },
        ],
      },
      {
        childtitle: "Settings",
        childlink: "settings",
        multi_menu: [
          {
            multiTitle: "Statuses",
            multiLink: "statuses",
          },
          {
            multiTitle: "Priorities",
            multiLink: "priorities",
          },
          {
            multiTitle: "Categories",
            multiLink: "categories",
          },
          {
            multiTitle: "Locations",
            multiLink: "locations",
          },
          {
            multiTitle: "Customers",
            multiLink: "customers",
          },
        ],
      },
    ],
  },

  {
    isHeadr: true,
    title: "SETTINGS",
  },
  {
    title: "Factors",
    icon: "heroicons-outline:lock-closed",
    link: "#",
    child: [
      {
        childtitle: "Manage Factors",
        childlink: "manage-factors",
      },
      {
        childtitle: "Add New Factor",
        childlink: "add-new-factor",
      },
    ],
  },
  {
    title: "Goals",
    icon: "heroicons-outline:view-boards",
    link: "#",
    isHide: false,
    child: [
      {
        childtitle: "Manage Goals",
        childlink: "goals-manage-goals",
      },
      {
        childtitle: "Add New Goal",
        childlink: "goals-add-new-goals",
      },
    ],
  },
  {
    title: "Categories",
    icon: "simple-line-icons:layers",
    link: "#",
    child: [
      {
        childtitle: "Manage Categories",
        childlink: "manage-categories",
      },
      {
        childtitle: "Add Category",
        childlink: "add-category",
      },
      {
        childtitle: "Manage Category Group",
        childlink: "manage-category-group",
      },
      {
        childtitle: "Add Category Group",
        childlink: "add-category-group",
      },
    ],
  },
  {
    title: "Organization",
    icon: "bi:gear",
    link: "#",
    isHide: false,
    child: [
      {
        childtitle: "Setup",
        childlink: "setup",
      },
      {
        childtitle: "Widget Settings",
        childlink: "widget-settings",
      },
    ],
  },
  {
    title: "Users & Groups",
    icon: "heroicons-outline:view-boards",
    link: "#",
    isHide: false,
    child: [
      {
        childtitle: "Manage Users",
        childlink: "manage-users",
      },
      {
        childtitle: "Add New User",
        childlink: "add-new-user",
      },
      {
        childtitle: "User Groups",
        childlink: "user-groups",
      },
      {
        childtitle: "Add/Manage Roles",
        childlink: "add-manage-roles",
      },
      {
        childtitle: "Notifications",
        childlink: "notifications",
      },
      {
        childtitle: "Bulk Import/Update",
        childlink: "bulk-import-update",
      },
    ],
  },
  {
    isHeadr: "SUPPORT",
    title: "Elements",
  },
  {
    title: "Knowledge Base",
    icon: "heroicons-outline:home",
    link: "knowledge-base",
    isHide: true,
  },
  {
    title: "Help Articles",
    icon: "heroicons-outline:home",
    link: "help-articles",
    isHide: true,
  },
  {
    title: "Contact Support",
    icon: "heroicons-outline:home",
    link: "contact-support",
    isHide: true,
  },
];

export const topMenu = [
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },

          // {
          //   m_childtitle: "Testimonial",
          //   m_childlink: "testimonial",
          // },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blank page",
            m_childlink: "blank-page",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "error-page",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "under-construction",
          },
        ],
      },
    ],
  },

  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

export const notifications = [
  {
    title: "Core updated to v3.4.20!",
    // desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",

    // image: "/assets/images/all-img/user.png",
    link: "#",
  },
];

export const CompanyName = [
  {
    name: "Titus Parent",
    value: "TITUS",
  },
  {
    name: "Company XYZ",
    value: "XYZ",
  },
  {
    name: "Company ABC",
    value: "ABC",
  },
  {
    name: "Company DEF",
    value: "DEF",
  },
  {
    name: "Company HIJ",
    value: "HIJ",
  },
  {
    name: "Company HIJ",
    value: "HIJ",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

export const meets = [
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: "/assets/images/svg/path.svg",
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: "/assets/images/svg/dc.svg",
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];

export const files = [
  {
    img: "/assets/images/icon/file-1.svg",
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-1.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/zip-1.svg",
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-2.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/scr-1.svg",
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];
