import Link from "next/link";
import { blogContent } from "@/constants/blog";
import { routes } from "@/constants/links";
import type { BlogPost } from "@/lib/blog";

type BlogPostListProps = {
  posts: readonly BlogPost[];
};

export function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <ol aria-label={blogContent.list.ariaLabel}>
      {posts.map((post, index) => {
        const entryNumber = String(index + 1).padStart(2, "0");
        const isLatest = index === 0;

        return (
          <li key={post.slug} className="border-b border-white/10 last:border-b-0">
            <Link
              href={`${routes.blog}/${post.slug}`}
              className="group grid gap-4 py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-8 md:py-9"
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] uppercase tracking-[0.14em] text-white/50 md:block md:pt-1.5">
                <span
                  aria-hidden="true"
                  className="tabular-nums text-white/30 md:mb-1.5 md:block"
                >
                  {entryNumber}
                </span>
                <time
                  dateTime={post.date}
                  className="tabular-nums md:block"
                >
                  {post.formattedDate}
                </time>
              </div>

              <div className="min-w-0">
                <h2 className="max-w-4xl text-balance text-[21px] font-medium leading-[1.2] tracking-tight text-white decoration-white/25 underline-offset-4 group-hover:underline md:text-[26px]">
                  {post.title}
                </h2>

                <p className="mt-2.5 max-w-2xl text-pretty text-[16px] leading-7 text-white/50 md:text-[17px]">
                  {post.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] uppercase tracking-[0.14em] text-white/50">
                  <span>{post.author.name}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {post.readingTime} {blogContent.list.readingTimeSuffix}
                  </span>
                  {isLatest ? (
                    <span className="ml-0.5 rounded-full border border-white/15 px-2 py-0.5 text-[10px] tracking-[0.12em] text-white/60">
                      {blogContent.list.latestLabel}
                    </span>
                  ) : null}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
