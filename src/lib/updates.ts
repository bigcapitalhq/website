import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Update = {
  id: string;
  title: string;
  date: string;
  publishedAt: Date;
  formattedDate: string;
  contentHtml: string;
};

type UpdateFrontmatter = {
  title: string;
  date: string | Date;
};

const updatesDirectory = path.join(process.cwd(), "content/updates");

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
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
    throw new Error(`Invalid update date "${value}". Use YYYY-MM-DD.`);
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
    throw new Error(`Invalid update date "${value}".`);
  }

  return date;
}

function formatDate(date: Date) {
  return dateFormatter.format(date);
}

function toIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

/*
 * Markdown images render as plain <img> tags. Add intrinsic dimensions when
 * the source is a local PNG so the changelog can reserve space while images
 * lazy-load, then opt them into native lazy loading.
 */
async function enhanceImages(contentHtml: string) {
  const sources = Array.from(
    contentHtml.matchAll(/<img\s[^>]*src="([^"]+)"/g),
    (match) => match[1],
  );
  const sizes = new Map<string, { width: number; height: number }>();

  await Promise.all(
    sources.map(async (src) => {
      const size = await readPngSize(src);
      if (size) sizes.set(src, size);
    }),
  );

  return contentHtml.replace(/<img\s[^>]*>/g, (tag) => {
    const src = /src="([^"]+)"/.exec(tag)?.[1];
    const size = src ? sizes.get(src) : undefined;
    const dimensions = size
      ? ` width="${size.width}" height="${size.height}"`
      : "";

    return tag.replace(
      "<img ",
      `<img loading="lazy" decoding="async"${dimensions} `,
    );
  });
}

async function readPngSize(src: string) {
  if (!src.startsWith("/")) return undefined;

  const publicDirectory = path.join(process.cwd(), "public");
  const filePath = path.join(publicDirectory, src);

  if (!filePath.startsWith(publicDirectory)) return undefined;

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

async function renderUpdate(filename: string): Promise<Update> {
  const id = filename.replace(/\.md$/, "");
  const filePath = path.join(updatesDirectory, filename);
  const fileContents = await readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Partial<UpdateFrontmatter>;

  if (typeof frontmatter.title !== "string" || !frontmatter.title.trim()) {
    throw new Error(`Update "${filename}" is missing a title.`);
  }

  if (
    typeof frontmatter.date !== "string" &&
    !(frontmatter.date instanceof Date)
  ) {
    throw new Error(`Update "${filename}" is missing a date.`);
  }

  const publishedAt = parseDate(
    frontmatter.date instanceof Date
      ? toIsoDate(frontmatter.date)
      : frontmatter.date,
  );
  const processedContent = await remark().use(html).process(content);

  return {
    id,
    title: frontmatter.title,
    date: toIsoDate(publishedAt),
    publishedAt,
    formattedDate: formatDate(publishedAt),
    contentHtml: await enhanceImages(processedContent.toString()),
  };
}

export async function getUpdates(): Promise<Update[]> {
  "use cache";

  const filenames = (await readdir(updatesDirectory)).filter((filename) =>
    filename.endsWith(".md"),
  );
  const updates = await Promise.all(filenames.map(renderUpdate));

  return updates.sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime(),
  );
}

export async function getUpdate(id: string) {
  const updates = await getUpdates();

  return updates.find((update) => update.id === id);
}
