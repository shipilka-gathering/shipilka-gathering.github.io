import {
  defaultLocale,
  getLocaleDefinition,
  localeDefinitions,
  type LocaleCode,
} from "./config";

export type LocaleLink = {
  locale: LocaleCode;
  label: string;
  href: string;
  current: boolean;
};

export type AlternateLink = {
  locale: LocaleCode;
  href: string;
};

export type LanguagePageView =
  | "home"
  | "events"
  | "event"
  | "articles"
  | "article";

export type LanguagePageContext = {
  view: LanguagePageView;
  slug?: string;
};

export function getLocaleRoot(locale: LocaleCode) {
  return `/${getLocaleDefinition(locale).path}/`;
}

export function getLanguagePagePath(locale: LocaleCode) {
  return `${getLocaleRoot(locale)}language/`;
}

export function getLanguagePageHref(
  locale: LocaleCode,
  context?: LanguagePageContext,
) {
  const basePath = getLanguagePagePath(locale);
  if (!context) {
    return basePath;
  }

  const params = new URLSearchParams({ view: context.view });
  if (context.slug) {
    params.set("slug", context.slug);
  }

  return `${basePath}?${params.toString()}`;
}

export function getEventsIndexPath(locale: LocaleCode) {
  return `${getLocaleRoot(locale)}events/`;
}

export function getEventPath(locale: LocaleCode, slug: string) {
  return `${getEventsIndexPath(locale)}${slug}/`;
}

export function getArticlesIndexPath(locale: LocaleCode) {
  return `${getLocaleRoot(locale)}articles/`;
}

export function getArticlePath(locale: LocaleCode, slug: string) {
  return `${getArticlesIndexPath(locale)}${slug}/`;
}

export function buildLocaleLinks(
  currentLocale: LocaleCode,
  hrefs: Partial<Record<LocaleCode, string>>,
  fallback: (locale: LocaleCode) => string = getLocaleRoot,
): LocaleLink[] {
  return localeDefinitions.map((definition) => ({
    locale: definition.code,
    label: definition.label,
    href: hrefs[definition.code] ?? fallback(definition.code),
    current: definition.code === currentLocale,
  }));
}

export function buildAlternateLinks(
  hrefs: Partial<Record<LocaleCode, string>>,
): AlternateLink[] {
  return localeDefinitions.flatMap((definition) => {
    const href = hrefs[definition.code];
    return href
      ? [{ locale: definition.code, href }]
      : [];
  });
}

export function getDefaultAlternateHref(
  hrefs: Partial<Record<LocaleCode, string>>,
  fallback: string,
) {
  return hrefs[defaultLocale] ?? fallback;
}
