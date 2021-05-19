<template>
  <header class="app-header">
    <div
      class="inline-flex justify-center items-center p-4 font-mono text-xl dark:text-light-50"
    >
      Dev2Dev
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
import Mdi from './Mdi.vue'

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
}
</style>