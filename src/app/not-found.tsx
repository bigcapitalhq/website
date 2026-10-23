import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center focus:outline-none"
    >
      <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/40">
        404
      </p>

      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-pretty text-base leading-7 text-white/50">
        The page you are looking for does not exist or has moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-white px-7 text-base font-normal text-background transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Back to home
      </Link>
    </main>
  );
}
