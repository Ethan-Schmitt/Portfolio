<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
</script>

<template>
  <header>
    <nav>
      <ul>
        <RouterLink to="/">Accueil</RouterLink>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </header>
</template>
