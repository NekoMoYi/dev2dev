<template>
  <transition name="fade" mode="out-in">
    <div
      class="flex flex-grow flex-1 items-center justify-evenly flex-row"
      v-if="loading"
    >
      <div class="font-mono flex flex-col items-center justify-center">
        <div class="text-6xl">Dev => Dev</div>
        <div clear="text-2xl py-8">
          Friend from {{ referrer }}, welcome! Dev2Dev is Loading...
        </div>
        <loading-bar class="py-2" />
      </div>
    </div>
    <div
      class="flex flex-grow flex-1 items-center justify-evenly flex-row <md:flex-col"
      v-else
    >
      <site-card :site="sites.cur" v-if="sites.cur" />
      <no-site-card :referrer="referrer" v-else />
      <redirect-indicator :to="sites.next.host" />
      <site-card :site="sites.next" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SiteCard from '@/components/SiteCard.vue'
import LoadingBar from '@/components/LoadingBar.vue'
import NoSiteCard from '@/components/NoSiteCard.vue'
import RedirectIndicator from '@/components/RedirectIndicator.vue'
import { useAsync, wait } from '@/utils/async'
import { recommend } from '@/utils/sites'

export default defineComponent({
  components: { SiteCard, LoadingBar, NoSiteCard, RedirectIndicator },
  props: {
    referrer: {
      type: String,
      required: true
    }
  },
  setup({ referrer }) {
    const loading = ref(true)
    const sites = ref<any>({})

    useAsync(async () => {
      await wait(500)
      sites.value = recommend(referrer)
      loading.value = false
    })
    return { loading, sites }
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>