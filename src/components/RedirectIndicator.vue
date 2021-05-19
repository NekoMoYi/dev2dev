<template>
  <div class="flex flex-col items-center font-mono w-48 h-36">
    <div class="text-6xl <md:transform <md:rotate-90">=></div>
    <div v-if="cancelled">Redirect cancelled</div>
    <div v-else>Redirect in {{ rest }}s...</div>
    <a @click.prevent="go" v-if="cancelled" class="link">GO!</a>
    <a @click.prevent="cancel" v-else class="link">Cancel</a>
  </div>
</template>

<script lang="ts">
import { useAsync, wait } from '@/utils/async'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup({ to }) {
    const rest = ref(3)
    const cancelled = ref(false)

    function cancel() {
      cancelled.value = true
    }
    async function go() {
      document.body.classList.add('leave')
      await wait(1000)
      location.href = `https://${to}`
    }

    useAsync(async () => {
      for (; rest.value; rest.value--) {
        await wait(1000)
      }
      if (!cancelled.value) {
        go()
      }
    })

    return { rest, cancelled, cancel, go }
  }
})
</script>
