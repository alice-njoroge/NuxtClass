<script>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  }
})
</script>
<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
<style>
nav {
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin: 1em;
}
</style>
