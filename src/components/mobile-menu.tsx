"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  navigation: readonly {
    label: string;
    href: string;
  }[];
}

export function MobileMenu({ navigation }: MobileMenuProps) {
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
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center justify-self-end rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-y border-white/10 bg-background px-6 py-4 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-normal text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              href="/sign-in"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
              className="flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-base font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
              className="flex h-11 items-center justify-center rounded-full bg-white px-5 text-base font-semibold text-background transition-colors hover:bg-white/85"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
