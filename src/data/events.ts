import { getCollection, type CollectionEntry } from "astro:content";

import { defaultLocale, localeCodes, type LocaleCode } from "../i18n/config";

export type EventEntry = CollectionEntry<"events">;

export type LocalizedEvent = {
  id: string;
  slug: string;
  date: string;
  tweet?: string;
  title: string;
  tags: string[];
  locale: LocaleCode;
  availableLocales: LocaleCode[];
};

function sortByDateDescending<T extends { data: { date: string } }>(entries: T[]) {
  return [...entries].sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

export async function getEventEntries() {
  return sortByDateDescending(await getCollection("events"));
}

export function localizeEvent(entry: EventEntry, locale: LocaleCode): LocalizedEvent {
  const fallback = entry.data.translations[defaultLocale];
  const translation = entry.data.translations[locale] ?? {};

  return {
    id: entry.data.id,
    slug: entry.data.slug,
    date: entry.data.date,
    tweet: entry.data.tweet,
    title: translation.title ?? fallback.title,
    tags: translation.tags ?? fallback.tags ?? [],
    locale,
    availableLocales: [...localeCodes],
  };
}

export async function getLocalizedEvents(locale: LocaleCode) {
  const entries = await getEventEntries();
  return entries.map((entry) => localizeEvent(entry, locale));
}

export async function getLocalizedEventBySlug(
  locale: LocaleCode,
  slug: string,
) {
  const entries = await getEventEntries();
  const entry = entries.find((event) => event.data.slug === slug);
  return entry ? localizeEvent(entry, locale) : null;
}
