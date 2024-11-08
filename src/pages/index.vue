<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Headers from '@/components/HeaderPage.vue';
import animationD from '@/components/animations/animationD.vue';
import animationG from '@/components/animations/animationG.vue';
</script>

<template>
  <div class="relative bg-gradient-to-b from-top-deg to-mid-deg to-bot-deg min-h-screen">
    <Headers />
    <div class="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      <animationD class="hidden lg:block absolute bottom-80 right-0 lg:w-30 lg:h-48 md:w-20 md:h-24 w-16 h-20" />
      <animationG class="hidden lg:block absolute bottom-0 left-0 lg:w-30 lg:h-48 md:w-20 md:h-24 w-16 h-20" />
      <img src="../components/animations/Anima.gif" alt="GIF animé" class="mb-10 lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 mt-20">
      <h1 class="text-3xl md:text-6xl lg:text-7xl text-white font-titre -mb-4">Ethan Schmitt</h1>
      <h2 class="text-4xl md:text-7xl lg:text-8xl font-titre shine-text">Web developer</h2>
    </div>
  </div>
</template>

<style scoped>
.shine-text {
  background: linear-gradient(90deg, rgb(255, 255, 255,0.9), gold, rgba(255, 255, 255, 0.901));
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: colorShine 3s linear infinite;
}

@keyframes colorShine {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}
</style>


