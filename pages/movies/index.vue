<script setup>
const query = ref("");
const movies = ref([]);
const searchMovie = async () => {
  const {Search} = await $fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2ade9ed6&s=${query.value}`);
  movies.value = Search
  console.log(toRaw(movies.value))
}

</script>

<template>
  <div>
    <form @submit.prevent="searchMovie">
      Movie Title: <input type="text" v-model="query"/>
      <button type="submit">Search</button>
    </form>

    <ul  style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
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