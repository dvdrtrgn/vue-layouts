import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'

export default function (defLayout) {
  const layout = shallowRef(defLayout)
  const route = useRoute()

  watch(
    () => route.meta,
    async (meta) => {
      try {
        const component = await import(`../layouts/${meta.layout}.vue`)
        layout.value = component?.default || defLayout
      } catch (e) {
        layout.value = defLayout
      }
    },
    { immediate: true }
  )
  return { layout }
}
