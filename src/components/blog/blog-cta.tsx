import Link from "next/link";
import { blogContent } from "@/constants/blog";

export function BlogCta() {
  const { cta } = blogContent;

  return (
    <section
      aria-labelledby="blog-cta-title"
      className="border-t border-white/10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 container-px py-16 md:flex-row md:items-end md:justify-between md:px-6 md:py-20 lg:px-8">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
            {cta.eyebrow}
          </p>

          <h2
            id="blog-cta-title"
            className="mt-4 max-w-xl text-balance text-[28px] font-medium leading-[1.1] tracking-tight text-white/50 md:text-[36px]"
          >
            {cta.title}
          </h2>

          <p className="mt-3 max-w-md text-pretty text-[16px] leading-7 text-white/50">
            {cta.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={cta.ctas.primary.href}
            prefetch={false}
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-7 text-base font-normal text-background transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            {cta.ctas.primary.label}
          </Link>

          <a
            href={cta.ctas.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 text-base font-normal text-white transition-colors hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            {cta.ctas.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
