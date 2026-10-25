import { PlaidLogo, PlaidLogoSprite } from "@/components/plaid-logo";
import { ScrollReveal } from "@/components/scroll-reveal";
import { homeContent } from "@/constants/home";

export function TrustedBy() {
  return (
    <section
      aria-labelledby="trusted-by-title"
      className="relative pb-12 md:pb-16"
    >
      <PlaidLogoSprite />

      <ScrollReveal className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <h2
          id="trusted-by-title"
          className="text-center text-[13px] font-medium uppercase tracking-[0.2em] text-white/40"
        >
          {homeContent.trustedBy.title}
        </h2>

        {/* Placeholder logos: decorative until real customer marks are available. */}
        <div
          aria-hidden="true"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:justify-between"
        >
          {Array.from({ length: 7 }, (_, index) => (
            <PlaidLogo
              key={index}
              className="h-8 w-auto shrink-0 text-white/50"
            />
          ))}
        </div>
      </ScrollReveal>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-white/10"
      />
    </section>
  );
}
