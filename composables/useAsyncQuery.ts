import { useApolloClient } from "@vue/apollo-composable";

export function useAsyncQuery(query: any, variables: any) {
  const { client } = useApolloClient();

  return useAsyncData(() => {
    return client.query({ query, variables });
  });
}
