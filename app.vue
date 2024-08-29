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

const variables = ref({ limit: 1 });

const { data, refresh, status } = await useAsyncQuery(query, variables.value);

const handleIncrement = () => {
  variables.value.limit++;
  refresh();
};
</script>

<template>
  <p v-show="status === 'pending'">loading</p>
  <p>ships count: {{ data?.data.ships.length }}</p>
  <p>{{ JSON.stringify(data) }}</p>
  <button @click="handleIncrement">increment limit</button>
</template>
