<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contacts">Contacts</router-link> |
    <router-link to="/default">Default</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppLayoutLinks'
}
</script>

<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  color: #2c3e50;
  font-weight: bold;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
