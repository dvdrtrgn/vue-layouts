<template>
  <div>
    <header class="header" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from './AppLayoutLinks.vue'
export default {
  name: 'AppLayoutAbout',
  components: {AppLayoutLinks}
}
</script>

<style scoped>
.header {
  background-color: blue;
  height: 5rem;
}
</style>
