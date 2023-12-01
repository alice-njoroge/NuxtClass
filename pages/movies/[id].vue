<script setup>
import {useFetch} from "#app";

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const {data} = await useFetch(
    `${runtimeConfig.public.baseURL}?apikey=8e3f600b&i=${route.params.id}`,
    {
      pick: ["Plot", "Title", "Error"],
      key: `/movies/${route.params.id}`,
    }
);
if (data.value.Error) {
  showError({statusCode: 404, statusMessage: data.value.Error})
}
useHead({
  title: data.value.Title
})

</script>

<template>
  <pre> {{ data }} </pre>
</template>
<style scoped>

</style>