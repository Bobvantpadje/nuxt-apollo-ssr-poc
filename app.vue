<template>
  <p>{{ JSON.stringify(data) }}</p>
</template>

<script lang="ts" setup>
import { gql } from "@apollo/client/core";

const query = gql`
  query getShips($limit: Int!) {
    ships(limit: $limit) {
      id
      name
    }
  }
`;

const variables = { limit: 7 };

const { data } = await useAsyncQuery(query, variables);
</script>
