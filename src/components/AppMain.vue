<template>
  <main class="mt-16 mb-8 mx-0 flex flex-grow flex-1 flex-row">
    <template v-if="referrer">
      <next :referrer="referrer" />
    </template>
    <template v-else>
      <about />
    </template>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import About from '@/components/About.vue'
import Next from '@/components/Next.vue'

export default defineComponent({
  components: { Next, About },
  setup() {
    let referrer = document.referrer
    if (referrer) {
      referrer = new URL(referrer).host
    }
    return { referrer }
  }
})
</script>
