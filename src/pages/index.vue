<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
</script>
<template>
  <div class="bg-gradient-to-b from-top-deg to-mid-deg to-bot-deg">
    <HeaderPage />
    <div class="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">

      <h1 class="text-6xl text-white font-titre -mb-8">Ethan Schmitt</h1> 
      <h2 class="text-7xl md:text-7xl lg:text-8xl text-white font-titre">Web développeur</h2>
    </div>
    <LoginOut />
  </div>
</template>
