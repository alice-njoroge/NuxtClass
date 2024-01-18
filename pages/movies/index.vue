<script setup>

definePageMeta({
  middleware(to, from) {
    console.log(to, from)
  }
})
</script>
<template>
  <movie-search/>

</template>
