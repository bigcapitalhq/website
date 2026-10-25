import { ScrollReveal } from "@/components/scroll-reveal";
import { VerticalFeatureTicker } from "@/components/vertical-feature-ticker";
import { homeContent } from "@/constants/home";

export function Features() {
  const { features } = homeContent;

  return (
    <section
      aria-labelledby="features-title"
      className="relative isolate pb-24 pt-20 md:pb-32 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20 lg:px-8">
        <ScrollReveal>
          <h2
            id="features-title"
            className="max-w-xl text-balance text-[22px] font-medium leading-[1.05] tracking-tight text-white"
          >
            {features.title}
          </h2>

          <p className="mt-5 max-w-md text-pretty text-[18px] leading-7 text-white/50">
            {features.description}
          </p>

          <ul className="sr-only">
            {features.items.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <VerticalFeatureTicker features={features.items} />
        </ScrollReveal>
      </div>
    </section>
  );
}
