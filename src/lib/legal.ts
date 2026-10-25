import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type LegalHeading = {
  id: string;
  title: string;
};

export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  contentHtml: string;
  headings: LegalHeading[];
};

type LegalFrontmatter = {
  title?: unknown;
  description?: unknown;
};

const legalDirectory = path.join(process.cwd(), "content/legal");

function requireString(
  value: unknown,
  field: string,
  filename: string,
): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Legal document "${filename}" is missing a ${field}.`);
  }

  return value.trim();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/*
 * Headings in the markdown source have no anchors, so add stable IDs to the
 * second-level headings and collect them for the table of contents.
 */
function addHeadingAnchors(contentHtml: string) {
  const headings: LegalHeading[] = [];
  const ids = new Map<string, number>();

  const withAnchors = contentHtml.replace(
    /<h2>([\s\S]*?)<\/h2>/g,
    (_match: string, inner: string) => {
      const title = inner.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

      if (!title) return `<h2>${inner}</h2>`;

      const baseId = slugify(title);
      const count = (ids.get(baseId) ?? 0) + 1;
      ids.set(baseId, count);

      const id = count === 1 ? baseId : `${baseId}-${count}`;
      headings.push({ id, title });

      return `<h2 id="${id}">${inner}</h2>`;
    },
  );

  return { contentHtml: withAnchors, headings };
}

export async function getLegalDocument(
  slug: string,
): Promise<LegalDocument | undefined> {
  if (!/^[a-z0-9-]+$/.test(slug)) return undefined;

  const filePath = path.join(legalDirectory, `${slug}.md`);

  let fileContents: string;

  try {
    fileContents = fs.readFileSync(filePath, "utf8");
  } catch {
    return undefined;
  }

  const { data, content } = matter(fileContents);
  const frontmatter = data as LegalFrontmatter;
  const processedContent = await remark().use(html).process(content);
  const { contentHtml, headings } = addHeadingAnchors(
    processedContent.toString(),
  );

  return {
    slug,
    title: requireString(frontmatter.title, "title", `${slug}.md`),
    description: requireString(
      frontmatter.description,
      "description",
      `${slug}.md`,
    ),
    contentHtml,
    headings,
  } satisfies LegalDocument;
}
