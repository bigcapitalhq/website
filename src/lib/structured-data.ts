import { faqAnswerText, faqs } from "@/lib/faqs";
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
