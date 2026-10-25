import { routes } from "@/constants/links";

export const legalContent = {
  eyebrow: "Legal",
  tocLabel: "On this page",
  documentsLabel: "Legal documents",
  relatedLabel: "Related",
  documents: {
    terms: {
      slug: "terms-of-use",
      label: "Terms of Use",
      href: routes.terms,
    },
    privacy: {
      slug: "privacy-policy",
      label: "Privacy Policy",
      href: routes.privacy,
    },
  },
} as const;
