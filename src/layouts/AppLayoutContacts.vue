<template>
  <div>
    <header class="header">Contact Layout</header>
    <TopNav />
    <slot />
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'

export default {
  name: 'AppLayoutContacts',
  components: {
    TopNav
  }
}
</script>

<style scoped>
.header {
  background-color: red;
}
</style>
