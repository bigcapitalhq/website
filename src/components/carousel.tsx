"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
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
  autoAdvanceInterval?: number;
  isAutoAdvanceRunning: boolean;
  prefersReducedMotion: boolean;
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
  const remainingAutoAdvanceTime = useRef(autoAdvanceInterval ?? 0);

  const isAutoAdvanceRunning =
    Boolean(autoAdvanceInterval) &&
    !isPaused &&
    isDocumentVisible &&
    !prefersReducedMotion &&
    items.length > 1;

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

  // Restart the countdown whenever the active slide changes.
  useEffect(() => {
    remainingAutoAdvanceTime.current = autoAdvanceInterval ?? 0;
  }, [activeIndex, autoAdvanceInterval]);

  useEffect(() => {
    if (!isAutoAdvanceRunning || !autoAdvanceInterval) {
      return;
    }

    const startedAt = performance.now();
    const timeout = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, remainingAutoAdvanceTime.current);

    return () => {
      window.clearTimeout(timeout);
      remainingAutoAdvanceTime.current = Math.max(
        0,
        remainingAutoAdvanceTime.current - (performance.now() - startedAt),
      );
    };
  }, [
    activeIndex,
    autoAdvanceInterval,
    isAutoAdvanceRunning,
    items.length,
  ]);

  return (
    <CarouselContext.Provider
      value={{
        items,
        activeIndex,
        setActiveIndex,
        autoAdvanceInterval,
        isAutoAdvanceRunning,
        prefersReducedMotion,
      }}
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
      className={`relative aspect-[1262/744] w-full overflow-hidden bg-[#17181b] ${className}`}
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
  const {
    items,
    activeIndex,
    setActiveIndex,
    autoAdvanceInterval,
    isAutoAdvanceRunning,
    prefersReducedMotion,
  } = useCarousel();
  const showProgress =
    Boolean(autoAdvanceInterval) &&
    !prefersReducedMotion &&
    items.length > 1;

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
            className={`relative block h-1 w-7 overflow-hidden rounded-full transition-colors duration-300 ${
              index === activeIndex
                ? "bg-white/25"
                : "bg-white/15 group-hover:bg-white/50"
            }`}
          >
            {index === activeIndex && (
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left rounded-full bg-white/60"
                style={
                  showProgress
                    ? {
                        animation: `carousel-progress ${autoAdvanceInterval}ms linear forwards`,
                        animationPlayState: isAutoAdvanceRunning
                          ? "running"
                          : "paused",
                      }
                    : undefined
                }
              />
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
