import { defineNuxtPlugin } from "#app";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import {
  provideApolloClient,
  DefaultApolloClient,
} from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const cache = new InMemoryCache();

  // If on the client, recover the injected state
  if (process.client) {
    const state = window.__APOLLO_STATE__;
    // console.log({ state });
    if (state) {
      cache.restore(state);
    }
  }

  const apolloClient = new ApolloClient({
    cache,
    uri: "https://spacex-production.up.railway.app",
    ssrMode: process.server,
    // configuration //
  });

  provideApolloClient(apolloClient);
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
