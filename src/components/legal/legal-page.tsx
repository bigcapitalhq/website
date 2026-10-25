import Link from "next/link";
import { legalContent } from "@/constants/legal";
import type { LegalDocument, LegalHeading } from "@/lib/legal";

type LegalPageProps = {
  document: LegalDocument;
};

export function LegalPage({ document }: LegalPageProps) {
  const otherDocument = Object.values(legalContent.documents).find(
    (entry) => entry.slug !== document.slug,
  );

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 flex-col focus:outline-none"
    >
      <header className="border-b border-white/10">
        <div className="container-px pb-10 pt-16 md:px-6 md:pb-14 md:pt-24 lg:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              {legalContent.eyebrow}
            </p>

            <h1 className="mt-5 max-w-3xl text-balance text-[32px] font-semibold leading-[1.05] tracking-tighter text-white md:text-[44px]">
              {document.title}
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-[16px] leading-7 text-white/50 md:text-[17px]">
              {document.description}
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 container-px py-12 md:px-6 md:py-16 lg:px-8">
        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
          {document.headings.length > 0 ? (
            <aside className="lg:order-last lg:sticky lg:top-24 lg:self-start">
              <details className="group border-b border-white/10 pb-4 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 [&::-webkit-details-marker]:hidden">
                  {legalContent.tocLabel}
                  <span
                    aria-hidden="true"
                    className="text-base leading-none text-white/30 transition-transform group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>

                <div className="mt-4">
                  <LegalTableOfContents headings={document.headings} />
                </div>
              </details>

              <div className="hidden lg:block">
                <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                  {legalContent.tocLabel}
                </h2>

                <div className="mt-4">
                  <LegalTableOfContents headings={document.headings} />
                </div>
              </div>
            </aside>
          ) : null}

          <article className="min-w-0">
            <div
              className="legal-content"
              dangerouslySetInnerHTML={{ __html: document.contentHtml }}
            />

            {otherDocument ? (
              <nav
                aria-label={legalContent.documentsLabel}
                className="mt-16 border-t border-white/10 pt-6"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                  {legalContent.relatedLabel}
                </p>

                <Link
                  href={otherDocument.href}
                  className="mt-3 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-white transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {otherDocument.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </nav>
            ) : null}
          </article>
        </div>
      </div>
    </main>
  );
}

function LegalTableOfContents({
  headings,
}: {
  headings: readonly LegalHeading[];
}) {
  return (
    <nav aria-label={legalContent.tocLabel}>
      <ol className="space-y-2.5 border-l border-white/10 pl-4">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="block rounded-sm text-[13px] leading-5 text-white/50 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
