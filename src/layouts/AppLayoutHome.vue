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
  name: 'AppLayoutHome',
  components: {
    AppLayoutLinks
  }
}
</script>

<style scoped>
.header {
  background-color: green;
  height: 5rem;
}
</style>
