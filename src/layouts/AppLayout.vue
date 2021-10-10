<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import useLayouts from '../router/useLayouts'
import AppLayoutDefault from './AppLayoutDefault.vue'

export default {
  name: 'AppLayout',
  setup () {
    return useLayouts(AppLayoutDefault)
  }
}
</script>

<style>
.header {
  align-items: center;
  color: white;
  display: flex;
  height: 3rem;
  justify-content: center;
}
</style>
