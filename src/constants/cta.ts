import { externalLinks, routes } from "@/constants/links";

export type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryCta = {
  label: "Start Bookkeeping",
  href: routes.signUp,
} as const satisfies CtaLink;

export const selfHostedCta = {
  label: "Self-Hosted",
  href: externalLinks.dockerDeployment,
  external: true,
} as const satisfies CtaLink;
