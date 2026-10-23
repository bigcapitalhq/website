import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

/*
 * The destination routes are not implemented in this app yet, so prefetching
 * them only generates 404 RSC requests. Re-enable prefetch once they ship.
 */
const navigation = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 md:bg-background/80 md:backdrop-blur-xl">
      <div className="mx-auto grid h-[72px] w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-4 border-x border-white/10 px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link
          href="/"
          prefetch={false}
          aria-label="Bigcapital home"
          className="rounded-md justify-self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Logo className="h-auto w-[175px] text-white opacity-80" />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="rounded-full px-4 py-2 text-base font-normal text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-2 md:flex">
          <Link
            href="/sign-in"
            prefetch={false}
            className="rounded-full px-3.5 py-1.5 text-base font-normal text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            prefetch={false}
            className="rounded-full bg-white px-3.5 py-1.5 text-base font-normal text-background transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Sign Up
          </Link>
        </div>

        <MobileMenu navigation={navigation} />
      </div>
    </header>
  );
}
