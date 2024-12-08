<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true); // Chargement en cours
const progress = ref(0); // Progression de l'affichage du texte

// Durée totale pour l'écran de chargement et animations
const totalTime = 5000; // Durée totale simulée
const animationDuration = 1500; // Durée de l'animation d'ouverture

// Texte à afficher avec animation
const animatedText = 'Ethan Schmitt';

// Fonction pour précharger les assets
function preloadAssets() {
  return Promise.all(
    Array.from(document.images).map(
      img =>
        new Promise(resolve => {
          img.onload = img.onerror = resolve;
        })
    )
  );
}

onMounted(() => {
  const interval = 100; // Intervalle pour l'animation du texte
  const steps = totalTime / interval; // Nombre de pas pour l'animation
  let currentStep = 0;

  // Animation du texte pendant le chargement
  const timer = setInterval(() => {
    currentStep++;
    progress.value = Math.min((currentStep / steps) * 100, 100); // Met à jour la progression
    if (currentStep >= steps) {
      clearInterval(timer);
    }
  }, interval);

  // Attendre le chargement complet des ressources
  window.onload = async () => {
    await preloadAssets(); // Optionnel : Vérifie que les images sont chargées
    setTimeout(() => {
      isLoading.value = false; // Retire le loader après l'animation
    }, animationDuration);
  };
});
</script>

<template>
  <div id="app" v-show="!isLoading" class="wrapper">
    <!-- Animation d'ouverture lorsque le chargement est terminé -->
    <div :class="['top-container', { 'animate-top': !isLoading }]"></div>
    <div :class="['bottom-container', { 'animate-bottom': !isLoading }]"></div>

    <!-- Contenu principal -->
    <main>
      <RouterView />
    </main>
  </div>

  <!-- Écran de chargement -->
  <div v-show="isLoading" class="loader-container">
    <div class="font-titre text-center text-white text-xl md:text-4xl lg:text-4xl">
      <p class="font-titre text-black">Bienvenue sur mon portfolio</p>
      <div class="name-animation">
        <span
          v-for="(char, index) in animatedText"
          :key="index"
          :class="{ visible: index <= Math.floor(progress / (8 / animatedText.length)) }"
        >
          {{ char }}
        </span>
      </div>
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
.name-animation span {
  opacity: 0.2;
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: inline-block;
  font-size: 2rem;
}

.name-animation span.visible {
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
