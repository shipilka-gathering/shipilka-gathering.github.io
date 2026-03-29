import type { LocaleCode } from "./config";
import { defaultLocale, localeCodes } from "./config";

import ja from "./messages/ja.json";

export type Messages = typeof ja;

const messageModules = import.meta.glob("./messages/*.json", {
  eager: true,
  import: "default",
}) as Record<string, Messages>;

const messagesByLocale = Object.fromEntries(
  Object.entries(messageModules).map(([path, messages]) => {
    const locale = path.split("/").pop()?.replace(".json", "");
    return [locale, messages];
  }),
) as Partial<Record<LocaleCode, Messages>>;

for (const locale of localeCodes) {
  if (!messagesByLocale[locale]) {
    throw new Error(`Missing message catalog for locale: ${locale}`);
  }
}

export function getMessages(locale: LocaleCode) {
  return messagesByLocale[locale] ?? messagesByLocale[defaultLocale]!;
}
