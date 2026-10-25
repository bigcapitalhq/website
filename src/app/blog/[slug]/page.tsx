import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AuthorMark } from "@/components/blog/author-mark";
import { BlogCta } from "@/components/blog/blog-cta";
import { StructuredData } from "@/components/structured-data";
import { getNextPost, getPost, getPosts, type BlogPost } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { createPostStructuredData } from "@/lib/structured-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const ensureStatic = "navigation";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: `${post.date}T00:00:00.000Z`,
    authors: [post.author.name],
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 flex-col focus:outline-none"
    >
      <Suspense fallback={<BlogPostFallback />}>
        <BlogPostArticle params={params} />
      </Suspense>
    </main>
  );
}

async function BlogPostArticle({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const nextPost = await getNextPost(post.slug);

  return (
    <>
      <StructuredData data={createPostStructuredData(post)} />

      <div className="mx-auto w-full max-w-[760px] px-6 pt-14 pb-20 md:pt-20">
        <article aria-labelledby="post-title">
          <header>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              Blog
            </p>

            <h1
              id="post-title"
              className="mt-5 text-balance text-[30px] font-semibold leading-[1.05] tracking-tighter text-white md:text-[42px]"
            >
              {post.title}
            </h1>

            <p className="mt-3.5 max-w-2xl text-pretty text-[18px] leading-8 text-white/50 md:text-[20px]">
              {post.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 border-y border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/50 tabular-nums">
                <time dateTime={post.date}>{post.formattedDate}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime} min read</span>
              </div>

              <div className="flex items-center gap-2.5">
                <AuthorMark name={post.author.name} />

                <div>
                  <p className="text-sm font-medium leading-5 text-white">
                    {post.author.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/50">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </div>
          </header>

          {post.cover ? (
            <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                width={post.cover.width}
                height={post.cover.height}
                priority
                sizes="(min-width: 808px) 712px, calc(100vw - 48px)"
                className="h-auto w-full"
              />
            </div>
          ) : null}

          <div
            className="article-content mt-12"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <footer className="mt-16 border-t border-white/10 pt-8">
            <div className="flex items-start gap-4">
              <AuthorMark name={post.author.name} size="large" />

              <div>
                <p className="text-sm font-medium text-white">
                  {post.author.name}
                </p>
                <p className="mt-1.5 max-w-xl text-pretty text-sm leading-6 text-white/50">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </footer>
        </article>

        {nextPost ? <ReadNext post={nextPost} /> : null}
      </div>

      <BlogCta />
    </>
  );
}

function ReadNext({ post }: { post: BlogPost }) {
  return (
    <section
      aria-labelledby="read-next-title"
      className="mt-20 border-t border-white/10 pt-8"
    >
      <div className="flex items-center justify-between gap-6">
        <h2
          id="read-next-title"
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50"
        >
          Read next
        </h2>

        <Link
          href="/blog"
          className="rounded-sm text-[12px] font-medium text-white/50 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          All posts →
        </Link>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="group mt-6 flex items-start justify-between gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
            Next post
          </p>

          <h3 className="mt-2 max-w-xl text-[24px] font-medium leading-tight tracking-tight text-white decoration-white/25 underline-offset-4 group-hover:underline">
            {post.title}
          </h3>

          <p className="mt-2 max-w-xl text-pretty text-[15px] leading-6 text-white/50">
            {post.description}
          </p>
        </div>

        <span
          aria-hidden="true"
          className="mt-1 hidden text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none md:block"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-4"
          >
            <path
              d="M2.5 8h10M9 4.5 12.5 8 9 11.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </section>
  );
}

function BlogPostFallback() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-[760px] animate-pulse px-6 pt-14 pb-20 motion-reduce:animate-none md:pt-20"
    >
      <div className="h-3 w-20 rounded bg-white/10" />
      <div className="mt-10 h-3 w-14 rounded bg-white/5" />
      <div className="mt-6 h-11 w-full rounded bg-white/10" />
      <div className="mt-3 h-11 w-4/5 rounded bg-white/10" />
      <div className="mt-5 h-4 w-2/3 rounded bg-white/5" />
      <div className="mt-8 h-16 w-full rounded bg-white/5" />
      <div className="mt-8 aspect-[3/2] w-full rounded-lg bg-white/5" />
      <div className="mt-12 space-y-4">
        <div className="h-4 w-full rounded bg-white/5" />
        <div className="h-4 w-11/12 rounded bg-white/5" />
        <div className="h-4 w-5/6 rounded bg-white/5" />
      </div>
    </div>
  );
}
