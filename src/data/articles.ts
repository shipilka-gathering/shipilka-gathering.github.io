import { getCollection, type CollectionEntry } from "astro:content";

import { isLocaleCode, type LocaleCode } from "../i18n/config";

export type ArticleEntry = CollectionEntry<"articles">;

export type LocalizedArticle = {
  locale: LocaleCode;
  slug: string;
  title: string;
  description?: string;
  date: string;
  excerpt: string;
  entry: ArticleEntry;
  availableLocales: LocaleCode[];
};

function parseArticleId(id: string) {
  const normalized = id.replace(/\\/g, "/");
  const segments = normalized.split("/");
  const [localeSegment, ...slugSegments] = segments;

  if (!localeSegment || slugSegments.length === 0 || !isLocaleCode(localeSegment)) {
    throw new Error(`Article id must be in {locale}/{slug}.md format: ${id}`);
  }

  const slug = slugSegments.join("/").replace(/\.md$/, "");
  return { locale: localeSegment, slug };
}

function getExcerptFromBody(body: string) {
  const lines = body.split(/\r?\n/).map((line) => line.trim());
  const text = lines.find(
    (line) =>
      line &&
      !line.startsWith("#") &&
      !line.startsWith("![") &&
      !line.startsWith(">"),
  );

  return text ?? "";
}

function sortByDateDescending<T extends { date: string }>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getAllArticles() {
  const entries = await getCollection("articles");
  const articles = entries.map((entry) => {
    const { locale, slug } = parseArticleId(entry.id);
    return {
      locale,
      slug,
      title: entry.data.title,
      description: entry.data.description,
      date: entry.data.date,
      excerpt: entry.data.description ?? getExcerptFromBody(entry.body),
      entry,
    };
  });

  const localeMap = new Map<string, LocaleCode[]>();
  for (const article of articles) {
    const availableLocales = localeMap.get(article.slug) ?? [];
    availableLocales.push(article.locale);
    localeMap.set(article.slug, availableLocales);
  }

  return sortByDateDescending(
    articles.map((article) => ({
      ...article,
      availableLocales: [...new Set(localeMap.get(article.slug) ?? [])],
    })),
  ) as LocalizedArticle[];
}

export async function getArticlesByLocale(locale: LocaleCode) {
  const articles = await getAllArticles();
  return articles.filter((article) => article.locale === locale);
}

export async function getArticleByLocaleAndSlug(
  locale: LocaleCode,
  slug: string,
) {
  const articles = await getAllArticles();
  return (
    articles.find((article) => article.locale === locale && article.slug === slug) ??
    null
  );
}
