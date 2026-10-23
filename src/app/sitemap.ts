import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/*
 * Only list routes that actually exist. Add new pages here once they ship so
 * crawlers never discover 404s through the sitemap.
 */
const routes = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    changeFrequency,
    priority,
  }));
}
