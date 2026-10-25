import { externalLinks, socialLinks } from "@/constants/links";

export const siteContent = {
  name: "Bigcapital",
  legalName: "Bigcapital Technology, Inc.",
  title: "Bigcapital | AI-Native Accounting Software",
  description:
    "Open-source, AI-native accounting software for automated bookkeeping, invoicing, expenses, inventory, and real-time financial reporting. Cloud or self-hosted.",
  twitterHandle: "@BigcapitalHQ",
  license: externalLinks.license,
  locale: "en",
  ogLocale: "en_US",
  category: "finance",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, Docker",
  social: socialLinks,
  keywords: [
    "accounting software",
    "open-source accounting",
    "AI accounting",
    "bookkeeping software",
    "invoicing software",
    "financial reporting",
    "inventory management",
    "self-hosted accounting",
    "cloud accounting",
  ],
} as const;
