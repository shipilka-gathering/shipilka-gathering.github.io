import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import { defaultLocale, localeCodes } from "./src/i18n/config";

export default defineConfig({
  site: "https://shipilka-gathering.github.io",
  i18n: {
    locales: [...localeCodes],
    defaultLocale,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
