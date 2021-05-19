<template>
  <site-card />
  <div class="text-6xl <md:transform <md:rotate-90 font-mono">=></div>
  <site-card />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteCard from '@/components/SiteCard.vue'

export default defineComponent({
  components: { SiteCard },
  setup() {
    //
  }
})
</script>
