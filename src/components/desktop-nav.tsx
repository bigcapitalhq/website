"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  navigationLabels,
  type HeaderNavItem,
} from "@/constants/navigation";
import { isActiveNavPath } from "@/lib/navigation";

const linkClassName =
  "rounded-full px-4 py-2 text-base font-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

interface DesktopNavProps {
  navigation: readonly HeaderNavItem[];
}

export function DesktopNav({ navigation }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={navigationLabels.main}
      className="hidden items-center gap-1 lg:flex"
    >
      {navigation.map((item) => {
        const isActive = isActiveNavPath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            prefetch={item.prefetch}
            aria-current={isActive ? "page" : undefined}
            className={`${linkClassName} ${
              isActive
                ? "bg-white/[0.06] text-white"
                : "text-white/40 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
