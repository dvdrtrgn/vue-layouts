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
  name: 'AppLayoutContacts',
  components: {
    AppLayoutLinks
  }
}
</script>

<style scoped>
.header {
  background-color: red;
  height: 5rem;
}
</style>
