import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { homeContent } from "@/constants/home";

export function FooterCta() {
  const { footerCta } = homeContent;

  return (
    <section
      aria-labelledby="footer-cta-title"
      className="relative isolate overflow-hidden"
    >
      <ScrollReveal className="relative mx-auto flex w-full max-w-7xl flex-col items-center p-[80px] text-center">
        <h2
          id="footer-cta-title"
          className="max-w-5xl text-balance text-[48px] font-semibold leading-[56px] tracking-tighter text-white/50"
        >
          {footerCta.title}
        </h2>

        <Link
          href={footerCta.cta.href}
          prefetch={false}
          className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-7 text-base font-normal text-background transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
        >
          {footerCta.cta.label}
        </Link>
      </ScrollReveal>
    </section>
  );
}
