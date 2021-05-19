<template>
  <div class="slider-wrap">
    <div class="slider">
      <div class="line"></div>
      <div class="subline inc"></div>
      <div class="subline dec"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    //
  }
})
</script>


<style>
.slider-wrap {
  width: 100px;
  height: 5px;
}

.slider {
  position: absolute;
  width: 100px;
  height: 5px;
  overflow-x: hidden;
}

.line {
  position: absolute;
  opacity: 0.4;
  background: #4a4a4a;
  width: 150%;
  height: 5px;
}

.subline {
  position: absolute;
  background: #4a4a4a;
  height: 5px;
}

.inc {
  animation: increase 2s infinite;
}
.dec {
  animation: decrease 2s 0.5s infinite;
}

@keyframes increase {
  from {
    left: -5%;
    width: 5%;
  }
  to {
    left: 130%;
    width: 100%;
  }
}
@keyframes decrease {
  from {
    left: -80%;
    width: 80%;
  }
  to {
    left: 110%;
    width: 10%;
  }
}
</style>