const DEFAULT_SITE_URL = "https://bigcapital.app";

function normalizeSiteUrl(value: string | undefined) {
  const candidate = value?.trim();

  if (!candidate) return DEFAULT_SITE_URL;

  try {
    return new URL(candidate).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const siteConfig = {
  name: "Bigcapital",
  legalName: "Bigcapital Technology, Inc.",
  url: siteUrl,
  title: "Bigcapital | AI-Native Accounting Software",
  description:
    "Open-source, AI-native accounting software for automated bookkeeping, invoicing, expenses, inventory, and real-time financial reporting. Cloud or self-hosted.",
  twitterHandle: "@BigcapitalHQ",
  license:
    "https://github.com/bigcapitalhq/bigcapital/blob/develop/LICENSE",
  social: {
    x: "https://twitter.com/BigcapitalHQ",
    linkedin: "https://www.linkedin.com/company/bigcapital-technology",
    github: "https://github.com/bigcapitalhq",
  },
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

/*
 * Preview and local deployments should never be indexed. Vercel exposes the
 * deployment environment at build time; elsewhere we fall back to NODE_ENV.
 */
export const isProductionDeployment =
  process.env.VERCEL_ENV === undefined
    ? process.env.NODE_ENV === "production"
    : process.env.VERCEL_ENV === "production";
