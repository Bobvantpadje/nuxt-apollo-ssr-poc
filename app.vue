<template>
  <p>{{ JSON.stringify(pdpData) }}</p>
</template>

<script lang="ts" setup>
const pdpData = await useAsyncPdpData();
console.log(pdpData);
</script>
