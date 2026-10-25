"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the transition starts, in milliseconds. */
  delay?: number;
  /** Distance in pixels the content travels while fading in. */
  distance?: number;
}

/**
 * Fades content up as it enters the viewport. Content is rendered visible on
 * the server, so it stays readable without JavaScript; the hidden state is only
 * applied once the component has hydrated.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  distance = 28,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    /*
     * Anything already on screen when the page loads stays put. Hiding it after
     * hydration would cause a visible flash instead of a transition.
     */
    if (node.getBoundingClientRect().top < window.innerHeight) {
      return;
    }

    node.dataset.scrollReveal = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;

        node.dataset.scrollReveal = "visible";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-distance": `${distance}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={["scroll-reveal", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
