import { getIntlLocale, type LocaleCode } from "./config";

const TOKYO_TIME_ZONE = "Asia/Tokyo";

export function formatEventCardDate(locale: LocaleCode, date: string) {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    timeZone: TOKYO_TIME_ZONE,
  }).format(new Date(date));
}

export function formatArticleDate(locale: LocaleCode, date: string) {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: TOKYO_TIME_ZONE,
  }).format(new Date(date));
}

export function formatEventDateTime(locale: LocaleCode, date: string) {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
    timeZone: TOKYO_TIME_ZONE,
  }).format(new Date(date));
}
