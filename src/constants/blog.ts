import { primaryCta, selfHostedCta } from "@/constants/cta";
import { siteContent } from "@/constants/site";

export const blogAuthor = {
  name: "Ahmed Bouhuolia",
  role: "Founder & CEO",
  bio: "Founder & CEO at Bigcapital. Writing about open-source accounting, product, and company updates.",
} as const;

export const blogContent = {
  metadata: {
    title: "Blog",
    description:
      "Product announcements, engineering notes, and practical guidance on open-source accounting from the Bigcapital team.",
  },
  index: {
    title: "Blog",
    description:
      "Product announcements, engineering notes, and practical guidance on open-source accounting.",
    countLabel: "Posts",
    allPostsLabel: "All posts",
    sortLabel: "Latest first",
    empty: "No posts have been published yet.",
  },
  list: {
    ariaLabel: "Blog posts",
    latestLabel: "Latest",
    readingTimeSuffix: "min read",
  },
  post: {
    eyebrow: "Blog",
    readingTimeSuffix: "min read",
    readNextLabel: "Read next",
    allPostsLabel: "All posts →",
    nextPostLabel: "Next post",
  },
  cta: {
    eyebrow: siteContent.name,
    title: "Put your books on autopilot.",
    description:
      "Automated bookkeeping, real-time reports, and a ledger your team can trust.",
    ctas: {
      primary: primaryCta,
      secondary: selfHostedCta,
    },
  },
  structuredData: {
    name: "Bigcapital Blog",
    description:
      "Product announcements, engineering notes, and practical guidance on open-source accounting from the Bigcapital team.",
    breadcrumbs: {
      home: "Home",
      blog: "Blog",
    },
  },
  og: {
    alt: "Bigcapital Blog",
    eyebrow: "BLOG",
    fallbackTitle: "Bigcapital Blog",
    fallbackDescription:
      "Product announcements and engineering notes from the Bigcapital team.",
  },
} as const;
