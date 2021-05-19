<template>
  <div class="flex flex-grow flex-1 items-center justify-evenly flex-row">
    <div class="font-mono flex flex-col items-center justify-center">
      <div class="text-6xl">Dev2Dev</div>
      <div clear="text-2xl py-8">
        Redirecting you to https://github.com/zisu-dev/dev2dev in {{ rest }}s...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAsync, wait } from '@/utils/async'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const rest = ref(3)
    useAsync(async () => {
      for (; rest.value; rest.value--) {
        await wait(1000)
      }
      location.href = 'https://github.com/zisu-dev/dev2dev'
    })
    return { rest }
  }
})
</script>
