"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface CarouselProps {
  items: ReactNode[];
  label: string;
  /* Time in milliseconds between automatic slide changes. Disabled by default. */
  interval?: number | null;
  children: ReactNode;
}

interface CarouselContextValue {
  items: ReactNode[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("Carousel components must be used within <Carousel>.");
  }

  return context;
}

export function Carousel({ items, label, interval, children }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!interval || items.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, interval);

    return () => window.clearInterval(intervalId);
  }, [interval, items.length]);

  return (
    <CarouselContext.Provider
      value={{ items, activeIndex, setActiveIndex }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className="w-full"
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

interface CarouselViewportProps {
  className?: string;
}

export function CarouselViewport({
  className = "",
}: CarouselViewportProps) {
  const { items, activeIndex } = useCarousel();

  return (
    <div
      className={`relative aspect-[1262/758] w-full overflow-hidden bg-[#17181b] ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${items.length}`}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
            index === activeIndex
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

interface CarouselControlsProps {
  className?: string;
}

export function CarouselControls({ className = "" }: CarouselControlsProps) {
  const { items, activeIndex, setActiveIndex } = useCarousel();

  return (
    <div className={`flex justify-center gap-1 ${className}`}>
      {items.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setActiveIndex(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex ? "true" : undefined}
          className="group flex h-8 w-9 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span
            className={`block h-1 w-7 rounded-full transition-colors duration-300 ${
              index === activeIndex
                ? "bg-white/50"
                : "bg-white/15 group-hover:bg-white/50"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
