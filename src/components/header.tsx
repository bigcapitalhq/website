import Link from "next/link";
import { AccountAction } from "@/components/account-action";
import { DesktopNav } from "@/components/desktop-nav";
import { GitHubStars } from "@/components/github-stars";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { routes } from "@/constants/links";
import {
  accountActions,
  mainNavigation,
  navigationLabels,
} from "@/constants/navigation";
import { bigcapitalCloudPopover } from "@/constants/popover";
import { getGitHubStars } from "@/lib/github";

/*
 * The product and company routes are not implemented in this app yet, so only
 * the content routes that exist opt into prefetching.
 */
export async function Header() {
  const githubStars = await getGitHubStars();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 md:bg-background/80 md:backdrop-blur-xl">
      <div className="mx-auto grid h-[72px] w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-4 container-px md:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8 xl:border-x xl:border-white/10">
        <Link
          href={routes.home}
          prefetch={false}
          aria-label={navigationLabels.home}
          className="rounded-md justify-self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Logo className="h-auto w-[175px] text-white opacity-80" />
        </Link>

        <DesktopNav navigation={mainNavigation} />

        <div className="hidden items-center justify-self-end gap-2 lg:flex">
          <GitHubStars
            stars={githubStars}
            className="h-9 px-3.5 text-sm"
          />
          <AccountAction
            action={accountActions.signIn}
            popover={bigcapitalCloudPopover}
            className="rounded-full px-3.5 py-1.5 text-base font-normal text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          />
          <AccountAction
            action={accountActions.signUp}
            popover={bigcapitalCloudPopover}
            className="rounded-full bg-white px-3.5 py-1.5 text-base font-normal text-background transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          />
        </div>

        <MobileMenu navigation={mainNavigation} githubStars={githubStars} />
      </div>
    </header>
  );
}
