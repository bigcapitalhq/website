import { siteContent } from "@/constants/site";

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
  ...siteContent,
  url: siteUrl,
} as const;

/*
 * Preview and local deployments should never be indexed. Vercel exposes the
 * deployment environment at build time; elsewhere we fall back to NODE_ENV.
 */
export const isProductionDeployment =
  process.env.VERCEL_ENV === undefined
    ? process.env.NODE_ENV === "production"
    : process.env.VERCEL_ENV === "production";
