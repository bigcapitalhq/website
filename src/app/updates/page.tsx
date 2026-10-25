import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/constants/links";
import { updatesContent } from "@/constants/updates";
import { createPageMetadata } from "@/lib/metadata";
import { getUpdates } from "@/lib/updates";

export const metadata: Metadata = createPageMetadata({
  title: updatesContent.metadata.title,
  description: updatesContent.metadata.description,
  path: routes.updates,
});

export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <div>
      {updates.map((update) => (
        <article
          key={update.id}
          className="mb-16 flex flex-col items-start gap-6 border-b border-white/10 pb-10 last:mb-0 last:border-b-0 last:pb-0 md:flex-row"
        >
          <div className="text-sm md:sticky md:top-24 md:mt-2.5 md:w-1/4 md:shrink-0">
            <time
              dateTime={update.date}
              className="uppercase tracking-[0.08em] text-white/50"
            >
              {update.formattedDate}
            </time>
          </div>

          <div className="w-full max-w-[588px]">
            <h2 className="mb-[2.65rem] text-[22px] font-semibold leading-snug tracking-[-0.5px] text-white md:text-2xl">
              <Link
                href={`${routes.updates}/${update.id}`}
                prefetch={false}
                className="transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {update.title}
              </Link>
            </h2>

            <div
              className="changelog-content"
              dangerouslySetInnerHTML={{ __html: update.contentHtml }}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
