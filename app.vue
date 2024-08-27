<template>
  <p>{{ JSON.stringify(pdpData) }}</p>
</template>

<script lang="ts" setup>
const { data: productData } = await useFakeAsyncQuery({
  name: "cloudRunner",
  category: "shoes",
  color: "red",
});

const { data: availabilityData } = await useFakeAsyncQuery({
  stock: 6,
  isAvailable: true,
});

const pdpData = {
  ...productData.value,
  ...availabilityData.value,
};
</script>
