<template>
  <div class="flex flex-col items-center font-mono">
    <div>
      <img :src="site.logo" class="site-logo" />
    </div>
    <div class="text-4xl">
      {{ site.name }}
    </div>
    <a class="link" target="_blank" :href="'https://' + site.host">
      {{ site.host }}
    </a>
    <div>
      By
      <a
        target="_blank"
        :href="'https://github.com/' + site.owner"
        class="link"
      >
        @{{ site.owner }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    site: {
      type: Object,
      required: true
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