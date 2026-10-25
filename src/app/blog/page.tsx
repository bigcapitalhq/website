import type { Metadata } from "next";
import { BlogCta } from "@/components/blog/blog-cta";
import { BlogPostList } from "@/components/blog/blog-post-list";
import { StructuredData } from "@/components/structured-data";
import { getPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { createBlogStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Product announcements, engineering notes, and practical guidance on open-source accounting from the Bigcapital team.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 flex-col focus:outline-none"
    >
      <StructuredData data={createBlogStructuredData(posts)} />

      <section aria-labelledby="blog-title" className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-6 pt-16 pb-16 md:pt-24 md:pb-20 lg:px-8">
          <div className="flex items-end justify-between gap-8">
            <div>
              <h1
                id="blog-title"
                className="max-w-4xl text-balance text-[32px] font-normal leading-[1.05] tracking-tighter text-white/50 md:text-[44px]"
              >
                Blog
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-[17px] leading-7 text-white/50 md:text-[18px]">
                Product announcements, engineering notes, and practical guidance
                on open-source accounting.
              </p>
            </div>

            <div className="hidden shrink-0 pb-1 text-right md:block">
              <p className="text-[32px] font-medium leading-none tracking-tighter text-white/50 tabular-nums">
                {String(posts.length).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                Posts
              </p>
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between border-b border-white/10 pb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 md:mt-16">
            <span>All posts</span>
            <span>Latest first</span>
          </div>

          {posts.length > 0 ? (
            <BlogPostList posts={posts} />
          ) : (
            <p className="py-10 text-[15px] text-white/50">
              No posts have been published yet.
            </p>
          )}
        </div>
      </section>

      <BlogCta />
    </main>
  );
}
