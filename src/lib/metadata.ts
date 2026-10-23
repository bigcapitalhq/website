import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path: string;
  type?: "website" | "article";
};

/*
 * Builds page-level metadata without losing the shared Open Graph and Twitter
 * fields. Next.js shallow-merges metadata, so a page that defines `openGraph`
 * replaces the root object entirely; this helper keeps every field together.
 */
export function createPageMetadata({
  title,
  description = siteConfig.description,
  path,
  type = "website",
}: PageMetadataOptions): Metadata {
  const socialTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: socialTitle,
      description,
    },
  };
}
