<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    class="mdi"
  >
    <path :d="icon"></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  setup(props) {}
})
</script>

<style>
.mdi {
  fill: currentColor;
  width: 24px;
  height: 24px;
}
</style>