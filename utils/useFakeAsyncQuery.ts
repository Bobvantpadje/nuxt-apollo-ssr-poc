const query = gql`
  query getShips($limit: Int!) {
    ships(limit: $limit) {
      id
      name
    }
  }
`;
const variables = { limit: 7 };

export async function useFakeAsyncQuery(returnData: any) {
  await useAsyncQuery(query, variables);
  return { data: ref(returnData) };
}
