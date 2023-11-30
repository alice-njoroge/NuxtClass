<script setup>
import {useAsyncData, useFetch} from "#app";

const route = useRoute();
const {data, error} = await useFetch(
    `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
    {
      pick: ["Plot", "Title", "Error"],
      key: `/movies/${route.params.id}`,
    }
)
if (data.value.Error) {
  showError({statusCode: 404, statusMessage: data.value.Error})
}
</script>

<template>
  <pre> {{ data }} </pre>
</template>
<style scoped>

</style>