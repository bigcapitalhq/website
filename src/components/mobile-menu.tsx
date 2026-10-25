"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  accountActions,
  navigationLabels,
  type NavItem,
} from "@/constants/navigation";
import { isActiveNavPath } from "@/lib/navigation";

interface MobileMenuProps {
  navigation: readonly NavItem[];
}

const linkClassName =
  "rounded-xl px-3 py-3 text-base font-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function MobileMenu({ navigation }: MobileMenuProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={
          menuOpen ? navigationLabels.closeMenu : navigationLabels.openMenu
        }
        className="relative -right-2 flex h-10 w-10 items-center justify-center justify-self-end rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
      >
        {menuOpen ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        )}
      </button>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-y border-white/10 bg-background container-px py-4 md:px-6 lg:hidden"
        >
          <nav aria-label={navigationLabels.mobile} className="flex flex-col">
            {navigation.map((item) => {
              const isActive = isActiveNavPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
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

          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              href={accountActions.signIn.href}
              prefetch={false}
              onClick={() => setMenuOpen(false)}
              className="flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-base font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {accountActions.signIn.label}
            </Link>
            <Link
              href={accountActions.signUp.href}
              prefetch={false}
              onClick={() => setMenuOpen(false)}
              className="flex h-11 items-center justify-center rounded-full bg-white px-5 text-base font-semibold text-background transition-colors hover:bg-white/85"
            >
              {accountActions.signUp.label}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
