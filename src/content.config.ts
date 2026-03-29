import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

import { localeCodeList } from "./i18n/config";

const localeCodeSchema = z.enum(localeCodeList);

const eventTranslationSchema = z.object({
  title: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().datetime({ offset: true }),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/events" }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    date: z.string().datetime({ offset: true }),
    tweet: z.string().optional(),
    translations: z
      .object({
        ja: z.object({
          title: z.string(),
          tags: z.array(z.string()).optional(),
        }),
      })
      .catchall(eventTranslationSchema)
      .superRefine((translations, ctx) => {
        for (const key of Object.keys(translations)) {
          const parsedKey = localeCodeSchema.safeParse(key);
          if (!parsedKey.success) {
            ctx.addIssue({
              code: "custom",
              path: [key],
              message: `Unsupported locale key: ${key}`,
            });
          }
        }
      }),
  }),
});

export const collections = {
  articles,
  events,
};
