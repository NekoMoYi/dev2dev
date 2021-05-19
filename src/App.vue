<template>
  <div class="app">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'

export default defineComponent({
  name: 'App',
  components: { AppHeader, AppFooter, AppMain }
})
</script>

<style>
.app {
  @apply flex min-h-100vh bg-dark-50;
}
</style>