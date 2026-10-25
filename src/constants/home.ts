import { primaryCta, selfHostedCta } from "@/constants/cta";

export type Pillar = {
  title: string;
  description: string;
};

export const homeContent = {
  intro: {
    title: "AI-native open-source core accounting infrastructure",
    description:
      "Control your business bookkeeping with automated accounting and run intelligent reports for faster decision-making.",
    ctas: {
      primary: primaryCta,
      secondary: selfHostedCta,
    },
  },
  showcase: {
    sectionLabel: "Product showcase",
    carouselLabel: "Product screenshots",
  },
  trustedBy: {
    title: "Trusted by growing finance teams",
  },
  features: {
    title: "Discover the features you need",
    description:
      "Nine connected modules that keep your books accurate, your reports current, and your team in sync.",
    items: [
      "Sales Invoicing",
      "Customizable Invoices",
      "Financial Reports",
      "Inventory Tracking",
      "Expense Accounting",
      "Multi-currency Accounting",
      "Receivable Accounts",
      "Payable Accounts",
      "Accural Accounting",
      "Cash Accounting",
      "Tax Supported",
      "Bank Feeds Syncing",
      "Bank Reconciliation",
      "General Ledger",
      "Role-based Access",
      "Multiple Branches",
    ],
  },
  builtForScale: {
    title: "Built for complexity. Ready for scale.",
    pillars: [
      {
        title: "Multi-entity, multi-currency",
        description:
          "Track branches, warehouses, and currencies in a single ledger, with consolidated reports that stay accurate as you expand.",
      },
      {
        title: "Real-time reporting",
        description:
          "Balance sheets, P&L, and cash flow statements update as transactions land, so you never wait for month-end to see where you stand.",
      },
      {
        title: "Automation that grows with you",
        description:
          "Recurring invoices, bank feeds, and approval workflows remove repetitive work without adding headcount.",
      },
    ] satisfies readonly Pillar[],
  },
  faq: {
    title: "Frequently asked questions",
  },
  footerCta: {
    title: "Let's see what Bigcapital can do for your business.",
    cta: primaryCta,
  },
} as const;
