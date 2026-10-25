import { blogContent } from "@/constants/blog";
import { getPost, getPosts } from "@/lib/blog";
import { renderOgImage } from "@/lib/og-image";

export const alt = blogContent.og.alt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return renderOgImage({
    eyebrow: blogContent.og.eyebrow,
    title: post?.title ?? blogContent.og.fallbackTitle,
    description: post?.description ?? blogContent.og.fallbackDescription,
  });
}
