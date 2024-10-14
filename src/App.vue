<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import loginGoo from './components/icons/loginGoo.vue'
import loginOut from './components/icons/loginOut.vue'
</script>

<template>
  <header>
    <h1 class="text-2xl">Template Principale (Menu/footer)</h1>
    <loginOut />
    <loginGoo />
    <nav>
      <ul>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </header>
</template>
