<template>
  <div>
    <header class="header">Home Layout</header>
    <TopNav />
    <slot />
  </div>
</template>

<script>
  import TopNav from '../components/TopNav.vue';

  export default {
    components: { TopNav },
  };
</script>

<style scoped>
  .header {
    background-color: green;
  }
</style>
