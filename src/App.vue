<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import headers from '@/components/HeaderPage.vue'
</script>

<template>
  <headers />
  <header>
    <main>
      <RouterView />
    </main>
  </header>
</template>
