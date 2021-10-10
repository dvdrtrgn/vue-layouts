<template>
  <div>
    <header class="header">Home Layout</header>
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
}
</style>
