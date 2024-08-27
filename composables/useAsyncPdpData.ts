export const useAsyncPdpData = async () => {
  const nuxtApp = useNuxtApp();

  // More info on why we need runWithContext can be found here: https://github.com/nuxt-modules/apollo/issues/614
  const { data: productData } = await nuxtApp.runWithContext(() =>
    useFakeAsyncQuery({
      name: "cloudRunner",
      category: "shoes",
      color: "red",
    })
  );

  // format data here

  const { data: availabilityData } = await nuxtApp.runWithContext(() =>
    useFakeAsyncQuery({
      stock: 6,
      isAvailable: true,
    })
  );

  // format data here

  const { data: priceData } = await nuxtApp.runWithContext(() =>
    useFakeAsyncQuery({
      price: 100,
    })
  );

  // format data here

  return {
    ...productData.value,
    ...availabilityData.value,
    ...priceData.value,
  };
};
