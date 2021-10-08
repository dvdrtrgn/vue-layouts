<template>
  <div id="app">
    <AppLayoutLinks></AppLayoutLinks>
    <router-view/>
  </div>
</template>

<script>
import AppLayoutLinks from './layouts/AppLayoutLinks.vue'
export default {
  components: {AppLayoutLinks}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
