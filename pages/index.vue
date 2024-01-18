<script lang="ts" setup>

definePageMeta({
  middleware(to, from) {
    console.log(to, from)
  }
})
</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
