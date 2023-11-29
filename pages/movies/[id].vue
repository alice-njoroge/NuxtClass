<script setup>
import {useAsyncData, useFetch} from "#app";

const route = useRoute();
const {data} = useFetch(
    `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
    {
      pick: ["Plot", "Title"],
      key: `/movies/${route.params.id}`
    }
)

</script>

<template>
  <pre> {{ data }} </pre>
</template>
<style scoped>

</style>