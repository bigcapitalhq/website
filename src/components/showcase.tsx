import Image from "next/image";
import {
  Carousel,
  CarouselControls,
  CarouselViewport,
} from "@/components/carousel";
import { ScrollReveal } from "@/components/scroll-reveal";
import { homeContent } from "@/constants/home";

const slides = homeContent.showcase.slides.map((slide) => (
  <Image
    key={slide.src}
    src={slide.src}
    alt={slide.alt}
    fill
    sizes="(min-width: 1280px) 1216px, (min-width: 1024px) calc(100vw - 64px), (min-width: 768px) calc(100vw - 48px), 950px"
    // Cover keeps the screenshots edge-to-edge; anchoring to the top keeps
    // headers visible when a screenshot is taller than the carousel viewport.
    className="object-cover object-top"
  />
));

export function Showcase() {
  return (
    <section
      id="showcase"
      aria-label={homeContent.showcase.sectionLabel}
      className="relative isolate scroll-mt-24 pb-16 md:pb-20"
    >
      <div className="mx-auto w-full max-w-7xl container-px md:px-6 lg:px-8">
        <ScrollReveal distance={32}>
          <Carousel
            items={slides}
            label={homeContent.showcase.carouselLabel}
            autoAdvanceInterval={5000}
          >
            <div className="-mx-[18px] overflow-x-auto overscroll-x-contain md:mx-0 md:overflow-visible">
              <div className="w-[950px] md:w-full">
                <div className="relative overflow-hidden rounded-none bg-[#17181b] md:rounded-[10px]">
                  <div className="flex h-[25px] items-center bg-[#1c2127] px-3.5">
                    <div
                      className="flex items-center gap-2.5"
                      aria-hidden="true"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    </div>
                  </div>

                  <CarouselViewport />
                </div>
              </div>
            </div>

            <CarouselControls className="mt-2.5" />
          </Carousel>
        </ScrollReveal>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-white/10"
      />
    </section>
  );
}
