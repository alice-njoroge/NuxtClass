<script setup>
import {useAsyncData} from "#app";

const route = useRoute();
const {data} = await useAsyncData(
    `/movies/${route.params.id}`,
    () => {
      return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`);
    }
);


</script>

<template>
  <pre> {{ data }} </pre>
</template>
<style scoped>

</style>