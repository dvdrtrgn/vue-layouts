<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import { shallowRef } from 'vue'
import AppLayoutDefault from './AppLayoutDefault.vue'

export default {
  name: 'AppLayout',
  setup() {
    const layout = shallowRef(AppLayoutDefault)

    return { layout }
  },
  watch: {
    '$route.meta': {
      immediate: true,
      async handler(meta) {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`)
          this.layout = component?.default || AppLayoutDefault
        } catch (e) {
          this.layout = AppLayoutDefault
        }
      }
    }
  }
}
</script>
