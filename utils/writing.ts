import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type WritingFrontmatter = {
  title: string;
  date: string;
  description: string;
  image?: string;
};

export type WritingPostListItem = WritingFrontmatter & {
  slug: string;
};

export type WritingPost = WritingPostListItem & {
  contentHtml: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

function assertContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    throw new Error(`Missing writing content dir at: ${CONTENT_DIR}`);
  }
}

function getMarkdownFilenames(): string[] {
  assertContentDir();
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.toLowerCase().endsWith(".md"));
}

export function getAllWritingSlugs(): string[] {
  return getMarkdownFilenames().map((file) => file.replace(/\.md$/i, ""));
}

export function getAllWritingPosts(): WritingPostListItem[] {
  const slugs = getAllWritingSlugs();

  const posts = slugs.map((slug) => {
    const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const title = String(data.title ?? "").trim();
    const date = String(data.date ?? "").trim();
    const description = String(data.description ?? "").trim();
    const image = data.image ? String(data.image).trim() : undefined;

    if (!title || !date || !description) {
      throw new Error(
        `Missing required frontmatter in ${slug}.md (need title, date, description)`
      );
    }

    return { slug, title, date, description, image };
  });

  posts.sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);
    if (Number.isNaN(aTime) || Number.isNaN(bTime)) return 0;
    return bTime - aTime;
  });

  return posts;
}

export async function getWritingPostBySlug(slug: string): Promise<WritingPost> {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing post: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const title = String(data.title ?? "").trim();
  const date = String(data.date ?? "").trim();
  const description = String(data.description ?? "").trim();
  const image = data.image ? String(data.image).trim() : undefined;

  if (!title || !date || !description) {
    throw new Error(
      `Missing required frontmatter in ${slug}.md (need title, date, description)`
    );
  }

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { slug, title, date, description, image, contentHtml };
}

