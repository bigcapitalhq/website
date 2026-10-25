"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { uiLabels } from "@/constants/ui";

interface CarouselProps {
  items: ReactNode[];
  label: string;
  children: ReactNode;
  autoAdvanceInterval?: number;
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

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => {
      query.removeEventListener("change", updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}

export function Carousel({
  items,
  label,
  children,
  autoAdvanceInterval,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(!document.hidden);
    };

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (
      !autoAdvanceInterval ||
      isPaused ||
      !isDocumentVisible ||
      prefersReducedMotion ||
      items.length < 2
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, autoAdvanceInterval);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    autoAdvanceInterval,
    isPaused,
    isDocumentVisible,
    prefersReducedMotion,
    items.length,
  ]);

  return (
    <CarouselContext.Provider
      value={{ items, activeIndex, setActiveIndex }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className="w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            setIsPaused(false);
          }
        }}
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
          aria-label={`${index + 1} ${uiLabels.carousel.slidePositionSeparator} ${items.length}`}
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
          aria-label={`${uiLabels.carousel.goToSlidePrefix} ${index + 1}`}
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
