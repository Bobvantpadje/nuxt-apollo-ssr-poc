import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // modules: ["@nuxtjs/apollo"],

  // // @ts-ignore
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: "https://spacex-production.up.railway.app",
  //     },
  //   },
  // },
  // plugins: ["./plugins/apollo-client.js"],
  build: {
    transpile: ["@apollo/client", "ts-invariant/process"],
  },

  // ssr: false,
});
