import { externalLinks, routes, socialLinks } from "@/constants/links";
import { accountActions } from "@/constants/navigation";
import {
  bigcapitalCloudPopover,
  type PopoverContent,
} from "@/constants/popover";

export type FooterLink = {
  label: string;
  href: string;
  badge?: string;
  disabled?: boolean;
  popover?: PopoverContent;
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
        { label: "Self-Hosted", href: externalLinks.dockerDeployment },
        {
          label: "Bigcapital Cloud",
          href: routes.signUp,
          badge: "Soon",
          disabled: true,
          popover: bigcapitalCloudPopover,
        },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: externalLinks.docs },
        { label: "API Reference", href: externalLinks.apiReference },
        { label: "Blog", href: routes.blog },
        { label: "Product Updates", href: routes.updates },
      ],
    },
    {
      title: "Open Source",
      links: [
        { label: "GitHub", href: externalLinks.github },
        { label: "Docker Deployment", href: externalLinks.dockerDeployment },
        { label: "AGPL-3.0 License", href: externalLinks.license },
        // { label: "OSS Friends", href: externalLinks.ossFriends },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: routes.about },
        { label: "Contact", href: externalLinks.discord },
        {
          label: "Sign In",
          href: accountActions.signIn.href,
          disabled: accountActions.signIn.disabled,
        },
        {
          label: "Sign Up",
          href: accountActions.signUp.href,
          disabled: accountActions.signUp.disabled,
        },
      ],
    },
    {
      title: "Legal & Trust",
      links: [
        { label: "Terms of Use", href: routes.terms },
        { label: "Privacy Policy", href: routes.privacy },
        { label: "Security", href: externalLinks.security },
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
