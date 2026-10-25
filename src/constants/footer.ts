import { externalLinks, routes, socialLinks } from "@/constants/links";
import { accountActions } from "@/constants/navigation";

export type FooterLink = {
  label: string;
  href: string;
  badge?: string;
};

export type FooterGroup = {
  title: string;
  links: readonly FooterLink[];
};

export const footerContent = {
  ariaLabel: "Bigcapital Directory",
  copyright: "© 2026 Bigcapital Technology, Inc. All rights reserved.",
  groups: [
    {
      title: "Product",
      links: [
        { label: "Features", href: routes.features },
        { label: "Pricing", href: routes.pricing },
        { label: "Self-Hosted", href: externalLinks.dockerDeployment },
        { label: "Bigcapital Cloud", href: routes.signUp, badge: "New" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: externalLinks.docs },
        { label: "Blog", href: routes.blog },
        { label: "Product Updates", href: routes.updates },
        { label: "Roadmap", href: externalLinks.roadmap },
        { label: "Status", href: externalLinks.status },
      ],
    },
    {
      title: "Open Source",
      links: [
        { label: "GitHub", href: externalLinks.github },
        { label: "Docker Deployment", href: externalLinks.dockerDeployment },
        { label: "AGPL-3.0 License", href: externalLinks.license },
        { label: "OSS Friends", href: externalLinks.ossFriends },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: routes.about },
        { label: "Contact", href: externalLinks.discord },
        { label: "Sign In", href: accountActions.signIn.href },
        { label: "Sign Up", href: accountActions.signUp.href },
      ],
    },
    {
      title: "Legal & Trust",
      links: [
        { label: "Terms of Use", href: externalLinks.terms },
        { label: "Privacy Policy", href: externalLinks.privacy },
        { label: "Security", href: externalLinks.security },
        { label: "Status", href: externalLinks.status },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Discord", href: externalLinks.discord },
        { label: "X (Twitter)", href: socialLinks.x },
        { label: "LinkedIn", href: socialLinks.linkedin },
        { label: "GitHub", href: socialLinks.github },
      ],
    },
  ],
} as const satisfies {
  ariaLabel: string;
  copyright: string;
  groups: readonly FooterGroup[];
};
