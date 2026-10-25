import type { MetadataRoute } from "next";
import { routes } from "@/constants/links";
import { getPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { getUpdates } from "@/lib/updates";

/*
 * Only list routes that actually exist. Add new pages here once they ship so
 * crawlers never discover 404s through the sitemap.
 */
const staticRoutes = [
  {
    path: routes.home,
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: routes.terms,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: routes.privacy,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

function urlFor(path: string) {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, updates] = await Promise.all([getPosts(), getUpdates()]);

  const staticEntries = staticRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: urlFor(path),
      changeFrequency,
      priority,
    }),
  );

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: urlFor("/blog"),
      lastModified: posts[0]?.publishedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: urlFor(`/blog/${post.slug}`),
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const updateEntries: MetadataRoute.Sitemap = [
    {
      url: urlFor("/updates"),
      lastModified: updates[0]?.publishedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...updates.map((update) => ({
      url: urlFor(`/updates/${update.id}`),
      lastModified: update.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticEntries, ...blogEntries, ...updateEntries];
}
