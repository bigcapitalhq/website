import type { MetadataRoute } from "next";
import { isProductionDeployment, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
