<template>
  <div>
    <header class="header">About Layout</header>
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
}
</style>
