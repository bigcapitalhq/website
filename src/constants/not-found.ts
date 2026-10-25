import { routes } from "@/constants/links";

export const notFoundContent = {
  metadata: {
    title: "Page not found",
  },
  eyebrow: "404",
  title: "Page not found",
  description: "The page you are looking for does not exist or has moved.",
  cta: {
    label: "Back to home",
    href: routes.home,
  },
} as const;
