<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true); // Chargement en cours
const progress = ref(0); // Progression du texte

// Durée du chargement
const totalTime = 2000;
const animationDuration = 1500; // Durée de l'animation d'ouverture

// Configuration metaInfo
import { useHead } from '@vueuse/head';

useHead({
  title: 'Ethan Schmitt | Portfolio',
  titleTemplate: null,
  meta: [
    {
      name: 'description',
      content: 'Portfolio d\'Ethan Schmitt, étudiant en MMI'
    }
  ]
});

onMounted(() => {
  const interval = 100;
  const steps = totalTime / interval;
  let currentStep = 0;

  const timer = setInterval(() => {
    currentStep++;
    progress.value = Math.min((currentStep / steps) * 100, 100); // Progression
    if (currentStep >= steps) {
      clearInterval(timer);
      // Après la fin du chargement, attendre un peu avant de finir l'animation d'ouverture
      setTimeout(() => {
        isLoading.value = false;
      }, animationDuration); // Attendre la fin de l'animation d'ouverture
    }
  }, interval);
});
</script>

<template>
  <div id="app" v-show="!isLoading">
    <!-- Animation d'ouverture lorsque le chargement est terminé -->
    <div :class="['top-container', { 'animate-top': !isLoading }]"></div>
    <div :class="['bottom-container', { 'animate-bottom': !isLoading }]"></div>

    <!-- Contenu principal -->
    <main>
      <RouterView />
    </main>
  </div>

  <!-- Chargement -->
  <div v-show="isLoading" class="loader-container">
    <div class="font-titre lg:mt-0 md:mt-0 -mt-10 text-white text-xl md:text-4xl lg:text-4xl justify-center text-center">
      <p class="font-titre lg:mt-0 md:mt-0 text-black text-center">Bienvenue sur mon portfolio</p>
      <span v-for="(char, index) in 'Ethan Schmitt'" :key="index" :class="{ visible: index <= Math.floor(progress / 8) }" class="mt-10">
        {{ char }}
      </span>
    </div>
  </div>
</template>

<style scoped>
/* Chargement */
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ffffff 50%, #000000 50%);
}

/* Texte du chargement */
.font-titre span {
  opacity: 0.2;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.font-titre span.visible {
  opacity: 1;
  transform: scale(1.2);
}

/* Conteneurs pour la partie blanche et noire */
.top-container {
  position: fixed;
  left: 0;
  width: 100%;
  height: 50%;
  background: #ffffff;
  z-index: 10000;
}

.bottom-container {
  position: fixed;
  left: 0;
  width: 100%;
  height: 50%;
  background: #000000;
  z-index: 10000;
}



.top-container {
  top: 0;
}

.bottom-container {
  top: 50%;
}

/* Animation de décalage */
.animate-top {
  animation: moveTopToTop 1.5s ease-out forwards;
}

.animate-bottom {
  animation: moveBottomToBottom 1.5s ease-out forwards;
}

/* Keyframes */
@keyframes moveBottomToBottom {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes moveTopToTop {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>

