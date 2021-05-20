<template>
  <header class="app-header">
    <div
      class="flex flex-col justify-center items-start p-4 font-mono dark:text-light-50"
    >
      <div class="text-xl">Dev2Dev</div>
      <div class="text-sm opacity-80">Find another developer</div>
    </div>
    <div class="flex-grow" />
    <div class="inline-flex justify-center items-center p-4">
      <a class="btn" target="_blank" href="https://github.com/zisu-dev/dev2dev">
        <mdi :icon="icons.mdiGithub" />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiGithub } from '@mdi/js'
import Mdi from '@/components/Mdi.vue'

export default defineComponent({
  components: { Mdi },
  setup() {
    return {
      icons: {
        mdiGithub
      }
    }
  }
})
</script>

<style>
.app-header {
  @apply fixed top-0 left-0 right-0 h-16 shadow flex;
  backdrop-filter: blur(5px);
}
</style>