"use client";

import { useId, useState } from "react";
import { faqs, type FaqEntry } from "@/lib/faqs";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleId = useId();

  return (
    <section
      id="faq"
      aria-labelledby={titleId}
      className="relative isolate py-20 md:py-[100px]"
    >
      <div className="mx-auto w-full max-w-180 px-6">
        <h2
          id={titleId}
          className="text-balance text-2xl font-[470] leading-snug tracking-tight text-white md:text-3xl"
        >
          Frequently asked questions
        </h2>

        <div className="mt-8 divide-y divide-white/[0.09]">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-white/10"
      />
    </section>
  );
}

function FaqAnswer({ faq }: { faq: FaqEntry }) {
  return (
    <>
      <p>
        {faq.answer}
        {faq.link ? (
          <>
            {" "}
            <a
              href={faq.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {faq.link.label}
            </a>
            {faq.link.after}
          </>
        ) : null}
      </p>

      {faq.secondaryAnswer ? <p>{faq.secondaryAnswer}</p> : null}
    </>
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div>
      <button
        type="button"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full cursor-pointer select-none items-center justify-between py-5 text-left text-sm font-[470] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {faq.question}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`size-4 shrink-0 text-[oklch(66%_0_0)] transition-transform duration-200 motion-reduce:transition-none ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <path
            d="M8 3v10M3 8h10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5">
            <div className="faq-answer">
              <FaqAnswer faq={faq} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
