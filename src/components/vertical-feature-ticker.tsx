"use client";

import { useEffect, useState } from "react";

interface VerticalFeatureTickerProps {
  features: readonly string[];
}

/* Number of rows visible at once. The active feature sits on the middle row. */
const VISIBLE_ROWS = 9;
/* Extra copies above and below keep the loop seamless while it slides. */
const COPIES = 3;
const ROTATION_MS = 700;
const INTERVAL_MS = 2000;

export function VerticalFeatureTicker({
  features,
}: VerticalFeatureTickerProps) {
  const count = features.length;
  const [offset, setOffset] = useState(0);
  const [instant, setInstant] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const intervalId = window.setInterval(() => {
      setOffset((value) => (value >= count ? 0 : value + 1));
    }, INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [count, reduceMotion]);

  /*
   * After the ninth step the stack is visually identical to the start, so it
   * can be snapped back without the user seeing a jump.
   */
  useEffect(() => {
    if (reduceMotion || offset !== count) return;

    const timeoutId = window.setTimeout(() => {
      setInstant(true);
      setOffset(0);
    }, ROTATION_MS + 50);

    return () => window.clearTimeout(timeoutId);
  }, [count, offset, reduceMotion]);

  useEffect(() => {
    if (!instant) return;

    /* Wait for the snapped frame to paint before re-enabling transitions. */
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => setInstant(false));
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [instant]);

  const centerRow = count * 2 - offset;
  const translateRows = (VISIBLE_ROWS - 1) / 2 - centerRow;
  const rowColorTransition = instant
    ? "transition-none"
    : "transition-colors duration-500 motion-reduce:transition-none";

  const rows = Array.from({ length: count * COPIES }, (_, row) => {
    const featureIndex = (count - (row % count)) % count;

    return {
      featureIndex,
      row,
      title: features[featureIndex],
    };
  });

  return (
    <div className="w-full">
      <div
        aria-hidden="true"
        className="relative mx-auto w-full max-w-2xl select-none"
      >
        <div
          className="relative overflow-hidden [--row-h:52px]"
          style={{ height: `calc(var(--row-h) * ${VISIBLE_ROWS})` }}
        >
          <div
            className="absolute inset-x-0 top-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
            style={{
              transform: `translateY(calc(var(--row-h) * ${translateRows}))`,
              transition: instant ? "none" : undefined,
            }}
          >
            {rows.map(({ row, title }) => {
              const isActive = row === centerRow;

              return (
                <div
                  key={row}
                  className="flex h-[var(--row-h)] items-center"
                >
                  <span
                    className={`whitespace-nowrap text-[24px] leading-none tracking-[-0.01em] sm:text-[28px] lg:text-[30px] xl:text-[36px] ${
                      isActive ? "font-medium text-white" : "text-white/20"
                    } ${rowColorTransition}`}
                  >
                    {title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent md:h-24" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent md:h-24" />
        </div>
      </div>
    </div>
  );
}
