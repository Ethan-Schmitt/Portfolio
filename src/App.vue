<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true); // Chargement en cours
const progress = ref(0); // Progression du texte

// Durée du chargement
const totalTime = 5000;
onMounted(() => {
  const interval = 100;
  const steps = totalTime / interval;
  let currentStep = 0;

  const timer = setInterval(() => {
    currentStep++;
    progress.value = Math.min((currentStep / steps) * 100, 100); // Progression
    if (currentStep >= steps) {
      clearInterval(timer);
      isLoading.value = false;
    }
  }, interval);
});
</script>

<template>
  <div id="app" class="wrapper">
    <!-- Chargement -->
    <div v-if="isLoading" class="loader-container">
      
      <div class="font-titre lg:mt-0 md:mt-0 -mt-10 text-white text-xl md:text-4xl lg:text-4xl  justify-center text-center ">
        <p class="font-titre lg:mt-0 md:mt-0 text-black text-center">Bienvenue sur mon portfolio</p>
        <span v-for="(char, index) in 'Ethan Schmitt'" :key="index" :class="{ visible: index <= Math.floor(progress / 7) }" class="mt-10">
          {{ char }}
        </span>
      </div>
    </div>

    <!-- Animation d'ouverture lorsque le chargement est terminé -->
    <div v-else>
      <div class="top-container"></div>
      <div class="bottom-container"></div>

      <!-- Contenu principal -->
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Fond transparent pendant le chargement */
.wrapper {
  background: transparent;
  min-height: 100vh;
  overflow: hidden;
}

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
  z-index: 9999;
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
.top-container, .bottom-container {
  position: fixed;
  left: 0;
  width: 100%;
  height: 50%;
  background: #ffffff;
  z-index: 10000;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
}

.top-container {
  background: #ffffff;
  top: 0;
  transform: translateY(0);
  animation: moveTopToTop 1.5s forwards;
}

.bottom-container {
  background: #000000;
  top: 50%;
  transform: translateY(0);
  animation: moveBottomToBottom 1.5s forwards;
}

/* Animation avec keyframes */
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
