<template>
  <div>
    <header class="header">About Layout</header>
    <TopNav />
    <slot />
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'

export default {
  name: 'AppLayoutAbout',
  components: {TopNav}
}
</script>

<style scoped>
.header {
  background-color: blue;
}
</style>
