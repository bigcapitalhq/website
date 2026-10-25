import { ScrollReveal } from "@/components/scroll-reveal";
import { homeContent } from "@/constants/home";

export function BuiltForScale() {
  const { builtForScale } = homeContent;

  return (
    <section
      aria-labelledby="built-for-scale-title"
      className="relative isolate pb-24 md:pb-[100px]"
    >
      <div className="mx-auto w-full max-w-7xl container-px md:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            id="built-for-scale-title"
            className="text-balance text-center text-[36px] font-normal leading-[1.1] tracking-tighter text-[#ffffff42] md:text-[47px]"
          >
            {builtForScale.title}
          </h2>
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-10 md:mt-20">
          {builtForScale.pillars.map((pillar, index) => {
            const imageOnLeft = index % 2 === 1;

            return (
              <ScrollReveal
                key={pillar.title}
                delay={index * 90}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10"
              >
                <div
                  aria-hidden="true"
                  className={`aspect-[3/2] w-full rounded-lg bg-[#17181b] ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                />

                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                  <h3 className="text-balance text-[20px] font-medium tracking-tight text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-md text-pretty text-[18px] leading-7 text-white/50">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-white/10"
      />
    </section>
  );
}
