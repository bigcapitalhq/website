import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { blogAuthor } from "@/constants/blog";

export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
};

export type BlogCover = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type PngSize = {
  width: number;
  height: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  publishedAt: Date;
  formattedDate: string;
  readingTime: number;
  order: number;
  author: BlogAuthor;
  cover?: BlogCover;
  contentHtml: string;
};

type BlogFrontmatter = {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  order?: unknown;
  cover?: unknown;
  coverAlt?: unknown;
  coverWidth?: unknown;
  coverHeight?: unknown;
};

const blogDirectory = path.join(process.cwd(), "content/blog");
const publicDirectory = path.resolve(process.cwd(), "public");

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

/*
 * Dates in frontmatter are calendar dates without a time or timezone. Parsing
 * them as UTC keeps the displayed day stable regardless of the build machine.
 */
function parseDate(value: string) {
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(value);

  if (!match) {
    throw new Error(`Invalid blog post date "${value}". Use YYYY-MM-DD.`);
  }

  const [, year, month, day] = match;
  const date = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day)),
  );

  if (
    date.getUTCFullYear() !== Number(year) ||
    date.getUTCMonth() !== Number(month) - 1 ||
    date.getUTCDate() !== Number(day)
  ) {
    throw new Error(`Invalid blog post date "${value}".`);
  }

  return date;
}

function toIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function requireString(
  value: unknown,
  field: string,
  filename: string,
): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Blog post "${filename}" is missing a ${field}.`);
  }

  return value.trim();
}

function requireNumber(
  value: unknown,
  field: string,
  filename: string,
): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`Blog post "${filename}" is missing a valid ${field}.`);
  }

  return value;
}

/*
 * Markdown images render as plain <img> tags. Add intrinsic dimensions so the
 * browser can reserve space while images lazy-load, and wrap standalone images
 * in a figure so their title can be shown as a caption.
 */
async function enhanceImages(contentHtml: string) {
  const sources = Array.from(
    contentHtml.matchAll(/<img\s[^>]*src="([^"]+)"/g),
    (match) => match[1],
  );
  const sizes = new Map<string, PngSize>();

  await Promise.all(
    sources.map(async (src) => {
      const size = await readPngSize(src);
      if (size) sizes.set(src, size);
    }),
  );

  const withFigures = contentHtml.replace(
    /<p>\s*(<img\s[^>]*>)\s*<\/p>/g,
    (_match: string, tag: string) => renderFigure(tag, sizes),
  );

  return withFigures.replace(/<img\s[^>]*>/g, (tag) =>
    enhanceImageTag(tag, sizes),
  );
}

function renderFigure(tag: string, sizes: Map<string, PngSize>) {
  const caption = readAttribute(tag, "title");
  const image = enhanceImageTag(tag, sizes, true);

  return `<figure>${image}${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
}

function enhanceImageTag(
  tag: string,
  sizes: Map<string, PngSize>,
  stripTitle = false,
) {
  if (tag.includes(' loading="')) return tag;

  const src = readAttribute(tag, "src");
  const size = src ? sizes.get(src) : undefined;
  const dimensions = size
    ? ` width="${size.width}" height="${size.height}"`
    : "";
  const withoutTitle = stripTitle ? tag.replace(/\s+title="[^"]*"/, "") : tag;

  return withoutTitle.replace(
    "<img ",
    `<img loading="lazy" decoding="async"${dimensions} `,
  );
}

function readAttribute(tag: string, name: string) {
  return new RegExp(`\\s${name}="([^"]*)"`).exec(tag)?.[1];
}

async function readPngSize(src: string) {
  if (!src.startsWith("/")) return undefined;

  const filePath = path.resolve(publicDirectory, `.${src}`);

  if (!filePath.startsWith(`${publicDirectory}${path.sep}`)) return undefined;

  try {
    const buffer = await readFile(filePath);

    // PNG stores width and height in the IHDR chunk, starting at byte 16.
    if (buffer.length < 24 || buffer.toString("ascii", 1, 4) !== "PNG") {
      return undefined;
    }

    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  } catch {
    return undefined;
  }
}

function estimateReadingTime(content: string) {
  const plainText = content
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~-]/g, " ");
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 220));
}

/*
 * Covers are optional. When a cover is provided, its alt text and intrinsic
 * dimensions are required so the image can render without layout shift.
 */
function parseCover(
  frontmatter: BlogFrontmatter,
  filename: string,
): BlogCover | undefined {
  if (typeof frontmatter.cover !== "string" || !frontmatter.cover.trim()) {
    return undefined;
  }

  return {
    src: frontmatter.cover.trim(),
    alt: requireString(frontmatter.coverAlt, "coverAlt", filename),
    width: requireNumber(frontmatter.coverWidth, "coverWidth", filename),
    height: requireNumber(frontmatter.coverHeight, "coverHeight", filename),
  };
}

async function renderPost(filename: string): Promise<BlogPost> {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(blogDirectory, filename);
  const fileContents = await readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;

  const dateValue =
    frontmatter.date instanceof Date
      ? toIsoDate(frontmatter.date)
      : requireString(frontmatter.date, "date", filename);
  const publishedAt = parseDate(dateValue);
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: requireString(frontmatter.title, "title", filename),
    description: requireString(
      frontmatter.description,
      "description",
      filename,
    ),
    date: toIsoDate(publishedAt),
    publishedAt,
    formattedDate: dateFormatter.format(publishedAt),
    readingTime: estimateReadingTime(content),
    order: requireNumber(frontmatter.order, "order", filename),
    author: blogAuthor,
    cover: parseCover(frontmatter, filename),
    contentHtml: await enhanceImages(processedContent.toString()),
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  "use cache";

  const filenames = (await readdir(blogDirectory)).filter((filename) =>
    filename.endsWith(".md"),
  );
  const posts = await Promise.all(filenames.map(renderPost));

  /*
   * Newest first. `order` breaks ties for posts published on the same day,
   * preserving the order used by the previous website.
   */
  return posts.sort(
    (a, b) =>
      b.publishedAt.getTime() - a.publishedAt.getTime() || a.order - b.order,
  );
}

export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
}

export async function getNextPost(slug: string) {
  const posts = await getPosts();

  if (posts.length < 2) return undefined;

  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return undefined;

  return posts[(index + 1) % posts.length];
}
