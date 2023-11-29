<template>
  <div>
    <nav >
      <NuxtLink to="/" >Home</NuxtLink>
      <NuxtLink to="/movies" >Movies</NuxtLink>
    </nav>
    <NuxtPage/>
  </div>
</template>
<style>
nav {
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin: 1em;
}


</style>
