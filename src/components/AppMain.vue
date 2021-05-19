<template>
  <main
    class="mt-16 mb-8 mx-0 flex flex-grow flex-1 items-center justify-around flex-row <md:flex-col"
  >
    <next />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Next from './Next.vue'

export default defineComponent({
  components: { Next },
  setup() {
    //
  }
})
</script>
