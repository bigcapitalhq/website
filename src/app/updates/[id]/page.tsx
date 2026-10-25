import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { createPageMetadata } from "@/lib/metadata";
import { getUpdate, getUpdates } from "@/lib/updates";

type UpdatePageProps = {
  params: Promise<{ id: string }>;
};

export const ensureStatic = "navigation";

export async function generateStaticParams() {
  const updates = await getUpdates();

  return updates.map((update) => ({ id: update.id }));
}

export async function generateMetadata({
  params,
}: UpdatePageProps): Promise<Metadata> {
  const { id } = await params;
  const update = await getUpdate(id);

  if (!update) return {};

  return createPageMetadata({
    title: update.title,
    description: `A Bigcapital product update from ${update.formattedDate}: ${update.title}`,
    path: `/updates/${update.id}`,
    type: "article",
  });
}

export default function UpdatePage({ params }: UpdatePageProps) {
  return (
    <Suspense fallback={<UpdateFallback />}>
      <UpdateArticle params={params} />
    </Suspense>
  );
}

async function UpdateArticle({ params }: UpdatePageProps) {
  const { id } = await params;
  const update = await getUpdate(id);

  if (!update) notFound();

  return (
    <article className="flex flex-col items-start gap-6 md:flex-row">
      <div className="flex flex-col text-sm md:sticky md:top-24 md:mt-2.5 md:w-1/4 md:shrink-0">
        <time
          dateTime={update.date}
          className="uppercase tracking-[0.08em] text-white/50"
        >
          {update.formattedDate}
        </time>

        <p className="mt-4">
          <Link
            href="/updates"
            prefetch={false}
            className="text-white/50 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            ← Back to Updates
          </Link>
        </p>
      </div>

      <div className="w-full max-w-[588px]">
        <h2 className="mb-4 text-[22px] font-semibold leading-snug tracking-[-0.5px] text-white md:mb-5 md:text-2xl">
          {update.title}
        </h2>

        <div
          className="changelog-content"
          dangerouslySetInnerHTML={{ __html: update.contentHtml }}
        />
      </div>
    </article>
  );
}

function UpdateFallback() {
  return (
    <div
      aria-hidden="true"
      className="flex animate-pulse flex-col items-start gap-6 motion-reduce:animate-none md:flex-row"
    >
      <div className="h-4 w-28 rounded bg-white/10 md:w-1/4" />

      <div className="w-full max-w-[588px]">
        <div className="h-7 w-3/4 rounded bg-white/10" />
        <div className="mt-6 h-4 w-full rounded bg-white/5" />
        <div className="mt-3 h-4 w-11/12 rounded bg-white/5" />
        <div className="mt-3 h-4 w-4/5 rounded bg-white/5" />
      </div>
    </div>
  );
}
