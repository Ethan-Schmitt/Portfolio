<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

</script>
<style scoped>
.full-screen {
  min-height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<template>
 
 <div class="w-screen w-full animated-background h-screen bg-gradient-to-r from-top-deg to-bot-deg to-mid-deg">
  <div class="flex flex-col full-screen p-4 sm:p-20">
      <img src="../components/animations/Anima.gif" alt="GIF animé" class="mb-10 lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12">
      <h1 class="text-3xl md:text-6xl lg:text-7xl text-white font-titre -mb-4">Ethan Schmitt</h1> 
      <h2 class="text-4xl md:text-7xl lg:text-8xl text-white font-titre">Web developpeur</h2>
    </div>
  </div>
</template>
