<script setup>
const query = ref("batman");
const movies = ref([]);
const runtimeConfig = useRuntimeConfig()
const searchMovie = async () => {
  const {Search} = await $fetch(`${runtimeConfig.public.baseURL}?i=tt3896198&apikey=${runtimeConfig.public.apiKey}&s=${query.value}`);
  console.log(Search)
  movies.value = Search
}
searchMovie();

</script>

<template>
  <div>
    <form @submit.prevent="searchMovie">
      Movie Title: <input type="text" v-model="query"/>
      <button type="submit">Search</button>
    </form>

    <ul v-if="movies" style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{name: 'movies-id', params:{id:movie.imdbID}}">
          <img :src="movie.Poster" :alt="movie.Title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>