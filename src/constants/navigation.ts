import { routes } from "@/constants/links";

export type NavItem = {
  label: string;
  href: string;
};

export type HeaderNavItem = NavItem & {
  prefetch: boolean;
};

export const mainNavigation = [
  { label: "Blog", href: routes.blog, prefetch: true },
  { label: "Updates", href: routes.updates, prefetch: true },
] as const satisfies readonly HeaderNavItem[];

export const accountActions = {
  signIn: { label: "Sign In", href: routes.signIn },
  signUp: { label: "Sign Up", href: routes.signUp },
} as const satisfies Record<string, NavItem>;

export const navigationLabels = {
  home: "Bigcapital home",
  main: "Main navigation",
  mobile: "Mobile navigation",
  openMenu: "Open menu",
  closeMenu: "Close menu",
} as const;
