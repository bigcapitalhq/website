import { routes } from "@/constants/links";

export type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

export type HeaderNavItem = NavItem & {
  prefetch: boolean;
};

export const mainNavigation = [
  { label: "Blog", href: routes.blog, prefetch: true },
  { label: "Updates", href: routes.updates, prefetch: true },
] as const satisfies readonly HeaderNavItem[];

// Authentication routes are not available in this app yet. Keep the account
// entry points disabled until they ship.
export const accountActionsDisabled: boolean = true;

export const accountActions = {
  signIn: {
    label: "Sign In",
    href: routes.signIn,
    disabled: accountActionsDisabled,
  },
  signUp: {
    label: "Sign Up",
    href: routes.signUp,
    disabled: accountActionsDisabled,
  },
} as const satisfies Record<string, NavItem>;

export const navigationLabels = {
  home: "Bigcapital home",
  main: "Main navigation",
  mobile: "Mobile navigation",
  openMenu: "Open menu",
  closeMenu: "Close menu",
} as const;
