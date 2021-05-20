<template>
  <div class="flex flex-col flex-grow flex-1 font-mono pt-8">
    <div class="text-6xl text-center">Dev2Dev</div>
    <div class="text-2xl text-center">Sites</div>
    <div class="grid grid-cols-4 m-8 gap-4">
      <div v-for="site of sites" :key="site.host">
        <site-card :site="site" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAsync } from '@/utils/async'
import { defineComponent, ref } from 'vue'
import { list } from '@/utils/sites'
import { ISite } from 'virtual:dev2dev-dataset'
import SiteCard from '@/components/SiteCard.vue'

export default defineComponent({
  components: { SiteCard },
  setup() {
    const sites = ref<ISite[]>([])
    useAsync(async () => {
      sites.value = await list()
    })
    return { sites }
  }
})
</script>
