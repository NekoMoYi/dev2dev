<template>
  <div class="flex flex-col items-center font-mono">
    <div>
      <mdi size="64" :icon="mdiHelpCircleOutline" />
    </div>
    <div class="text-4xl">???</div>
    <div>{{ referrer }}</div>
    <div>By @???</div>
  </div>
</template>

<script lang="ts">
import { mdiHelpCircleOutline } from '@mdi/js'
import { defineComponent } from 'vue'
import Mdi from '@/components/Mdi.vue'

export default defineComponent({
  components: { Mdi },
  props: {
    referrer: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      mdiHelpCircleOutline
    }
  }
})
</script>

<style>
.site-logo {
  width: 64px;
  height: 64px;
}
</style>