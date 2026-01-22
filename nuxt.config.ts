// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
  css: ["@/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: "jpg",
          width: 50,
          height: 50,
        },
      },
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },
});