import { externalLinks } from "@/constants/links";

export const updatesContent = {
  metadata: {
    title: "Updates",
    description: "A changelog of the latest updates for Bigcapital",
  },
  layout: {
    title: "Changelog",
    description: "A changelog of the latest updates for Bigcapital",
    followLabel: "Follow us on X",
    followHref: externalLinks.communityX,
  },
  detail: {
    backLabel: "← Back to Updates",
    metadataDescription: (date: string, title: string) =>
      `A Bigcapital product update from ${date}: ${title}`,
  },
} as const;
