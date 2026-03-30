export const localeCodeList = [
  "ja",
  "en",
  "ko",
  "zh-cn",
  "zh-tw",
] as const;

export type LocaleCode = (typeof localeCodeList)[number];

export type LocaleDefinition = {
  code: LocaleCode;
  path: string;
  label: string;
  htmlLang: string;
  intlLocale: string;
  isDefault?: boolean;
};

export const defaultLocale: LocaleCode = "ja";

export const localeDefinitions: readonly LocaleDefinition[] = [
  {
    code: "ja",
    path: "ja",
    label: "日本語",
    htmlLang: "ja",
    intlLocale: "ja-JP",
    isDefault: true,
  },
  {
    code: "en",
    path: "en",
    label: "English",
    htmlLang: "en",
    intlLocale: "en-US",
  },
  {
    code: "ko",
    path: "ko",
    label: "한국어",
    htmlLang: "ko",
    intlLocale: "ko-KR",
  },
  {
    code: "zh-cn",
    path: "zh-cn",
    label: "简体中文",
    htmlLang: "zh-CN",
    intlLocale: "zh-CN",
  },
  {
    code: "zh-tw",
    path: "zh-tw",
    label: "繁體中文",
    htmlLang: "zh-TW",
    intlLocale: "zh-TW",
  },
];

export const localeCodes = [...localeCodeList];

const localeMap = new Map(
  localeDefinitions.map((definition) => [definition.code, definition]),
);

export function isLocaleCode(value: string): value is LocaleCode {
  return localeMap.has(value as LocaleCode);
}

export function getLocaleDefinition(locale: LocaleCode) {
  const definition = localeMap.get(locale);
  if (!definition) {
    throw new Error(`Unknown locale: ${locale}`);
  }

  return definition;
}

export function getLocalePath(locale: LocaleCode) {
  return getLocaleDefinition(locale).path;
}

export function getHtmlLang(locale: LocaleCode) {
  return getLocaleDefinition(locale).htmlLang;
}

export function getIntlLocale(locale: LocaleCode) {
  return getLocaleDefinition(locale).intlLocale;
}
