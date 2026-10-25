import { faqAnswerText, faqs } from "@/lib/faqs";
import type { BlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const softwareId = `${siteConfig.url}/#software`;
const webpageId = `${siteConfig.url}/#webpage`;
const faqId = `${siteConfig.url}/#faq`;

const organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon-512.png`,
  sameAs: [
    siteConfig.social.x,
    siteConfig.social.linkedin,
    siteConfig.social.github,
  ],
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: { "@id": organizationId },
};

const softwareApplication = {
  "@type": "SoftwareApplication",
  "@id": softwareId,
  name: siteConfig.name,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, Docker",
  description: siteConfig.description,
  url: siteConfig.url,
  isAccessibleForFree: true,
  license: siteConfig.license,
  sameAs: [siteConfig.social.github],
  publisher: { "@id": organizationId },
};

const webPage = {
  "@type": "WebPage",
  "@id": webpageId,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  isPartOf: { "@id": websiteId },
  about: { "@id": softwareId },
  inLanguage: "en",
};

const faqPage = {
  "@type": "FAQPage",
  "@id": faqId,
  isPartOf: { "@id": webpageId },
  inLanguage: "en",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqAnswerText(faq),
    },
  })),
};

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
};

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [webPage, softwareApplication, faqPage],
};

export function createBlogStructuredData(posts: readonly BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog#blog`,
    name: "Bigcapital Blog",
    description:
      "Product announcements, engineering notes, and practical guidance on open-source accounting from the Bigcapital team.",
    url: `${siteConfig.url}/blog`,
    inLanguage: "en",
    publisher: { "@id": organizationId },
    blogPost: posts.map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`;

      return {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        url,
        author: {
          "@type": "Person",
          name: post.author.name,
        },
      };
    }),
  };
}

export function createPostStructuredData(post: BlogPost) {
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        headline: post.title,
        description: post.description,
        ...(post.cover
          ? { image: `${siteConfig.url}${post.cover.src}` }
          : {}),
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en",
        author: {
          "@type": "Person",
          name: post.author.name,
        },
        publisher: { "@id": organizationId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteConfig.url}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };
}
