import Link from "next/link";
import { homeContent } from "@/constants/home";

const { intro } = homeContent;

export function Intro() {
  return (
    <section
      aria-labelledby="intro-title"
      className="relative isolate overflow-hidden pb-[75px] pt-[165px]"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start px-6 text-left lg:px-8">
        <div>
          <h1
            id="intro-title"
            className="text-[58px] font-medium leading-[60px] tracking-tighter text-white"
          >
            {intro.title}
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-[20px] leading-[30px] text-white/50">
            {intro.description}
          </p>
        </div>

        <div className="mt-5 flex w-full flex-col items-start justify-start gap-3 sm:w-auto sm:flex-row">
          <Link
            href={intro.ctas.primary.href}
            prefetch={false}
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-7 text-base font-normal text-background transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            {intro.ctas.primary.label}
          </Link>

          <a
            href={intro.ctas.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 text-base font-normal text-white transition-colors hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            {intro.ctas.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
