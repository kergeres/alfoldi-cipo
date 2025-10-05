// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { primeVueThemeConfig } from "./app/plugins/primevue";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@primevue/nuxt-module"],
  css: [
    "~/assets/variables.css", 
    "~/assets/style.css",
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  primevue: {
    options: {
      theme: {
        preset: primeVueThemeConfig,
      },
    },
  },

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.NUXT_PUBLIC_FIREBASE_DATABASE_URL,
      FIREBASE_PROJECT_ID: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID:
        process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        },
      ],
    },
  },
});
