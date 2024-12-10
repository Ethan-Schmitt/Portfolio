<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { pb } from '@/backend';
import { useRoute } from 'vue-router';
import type { ArticlesResponse } from '@/pocketbase-types';
import Headers from '@/components/HeaderPage.vue';
import footers from '@/components/footer.vue';
import triforce from '@/components/animations/triforces.vue';
import cardsaccueil from '@/components/animations/cardsaccueil.vue';

// Définir un type pour un article
const route = useRoute();
const articles = ref<ArticlesResponse | null>(null);
const isLoading = ref(true);
const progress = ref(0); // Progrès de chargement (pourcentage)
const loadingText = 'Chargement...';
const visibleCharacters = ref(0); // Nombre de caractères visibles dans le texte
const isAnimationComplete = ref(false);
const currentSlide = ref(0);
const isSliderVisible = ref(false);

const animationDuration = 1500;

const loadArticle = async () => {
  const startTime = performance.now(); // Chronométrage pour le calcul du temps de chargement
  const totalCharacters = loadingText.length; // Nombre total de caractères à afficher
  const steps = totalCharacters;

  let loadedCharacters = 0;

  try {
    // Récupération de l'article
    const articleId = route.params.id;
    articles.value = await pb.collection<ArticlesResponse>('articles').getOne(articleId);
    const endTime = performance.now(); // Fin du chronométrage
    const loadTime = endTime - startTime; // Temps de chargement réel en ms
    const intervalTime = loadTime / totalCharacters;

    // Synchroniser l'affichage du texte avec le temps de chargement
    const timer = setInterval(() => {
      loadedCharacters++;
      visibleCharacters.value = loadedCharacters;
      progress.value = Math.min((loadedCharacters / steps) * 100, 100);

      if (loadedCharacters >= totalCharacters) {
        clearInterval(timer);
        setTimeout(() => {
          isLoading.value = false;
          isAnimationComplete.value = true;
        }, animationDuration); // Attendre la fin de l'animation d'ouverture
      }
    }, intervalTime);
  } catch (error) {
    console.error(error);
    isLoading.value = false;
  }
};

onMounted(() => {
  loadArticle();

  // Ajouter un écouteur pour la mise à jour de l'ID dans l'URL
  watch(() => route.params.id, () => {
    isLoading.value = true;
    loadArticle();
  });

  // Ajout de l'écouteur de scroll
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  // Suppression de l'écouteur de scroll
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  const slides = document.querySelectorAll('.sticky'); // Récupère les sections avec la classe "sticky"
  let slideInView = false;

  slides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSlide.value = index; // Met à jour le slide courant
      slideInView = true; // Un slide est visible
    }
  });

  isSliderVisible.value = slideInView; // Affiche ou cache le slider
}

function getSlideCount(): number {
  if (!articles.value) return 0;
  let count = 0;
  if (articles.value.title || articles.value.content) count++;
  if (articles.value.image2) count++;
  if (articles.value.titre2 || articles.value.content2) count++;
  if (articles.value.image3) count++;
  if (articles.value.titre3 || articles.value.content3) count++;
  if (articles.value.image4) count++;
  if (articles.value.titre4 || articles.value.content4) count++;
  if (articles.value.image5) count++;
  if (articles.value.titre5 || articles.value.content5) count++;
  if (articles.value.image6) count++;
  if (articles.value.titre6 || articles.value.content6) count++;
  return count;
}
</script>



<template>
  
  <div v-if="isLoading" class="loader-container">
      <div class="font-titre text-white text-xl md:text-4xl lg:text-4xl text-center">
        <p class="lg:mt-0 md:mt-0 text-black text-center">{{ articles?.title }}</p>
        <span v-for="(char, index) in loadingText" :key="index" :class="{ visible: index <= Math.floor(progress / (100 / loadingText.length)) }">
          {{ char }}
        </span>
      </div>
    </div>
    <div v-else id="app">
      <div :class="['top-container', { 'animate-top': !isLoading }]"></div>
      <div :class="['bottom-container', { 'animate-bottom': !isLoading }]"></div>
  
      <div class="relative bg-top-deg min-h-screen">
    <Headers />

    <div
      class="relative w-full h-[920px] bg-cover bg-center bg-overlay z-0"
      :style="{
        backgroundImage: articles
          ? `url(https://portfolio-ethan.pockethost.io/api/files/articles/${articles.id}/${articles.image})`
          : '',
      }"
    >
      <div class="absolute inset-0 bg-black opacity-50 z-1"></div>

      <div
        class="relative flex flex-col items-start justify-center h-full text-left text-white z-10 p-8 lg:ml-12 md:ml-12"
      >
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-titre lg:mb-6">
          {{ articles?.title }}
        </h1>
        <p class="text-sm md:text-sm lg:text-lg font-light">
          {{ articles?.category }}
        </p>
        <triforce
          class="absolute lg:-inset-x-6 mx-auto -bottom-[100px] w-[48px] h-[45px] md:w-16 md:h-16 lg:w-65 lg:h-49"
        />
      </div>
    </div>

    <!-- Contenu principal -->
    <div v-if="articles">
<!-- Slide 1 - Texte -->
<div v-if="articles.title || articles.content" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0c132d] to-[#102d4d] text-white px-8">
  <h1 class="text-5xl font-titre mb-4" v-html="articles.title"></h1>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-[300px]" v-html="articles.content"></div>
</div>

<!-- Slide 2 - Image -->
<div v-if="articles.image2" class="sticky top-0 h-screen bg-cover bg-center"
  :style="{
    backgroundImage: articles
      ? `url(https://portfolio-ethan.pockethost.io/api/files/articles/${articles.id}/${articles.image2})`
      : ''
  }">
  <div class="absolute inset-0 bg-black opacity-30 z-1"></div>
</div>

<!-- Slide 2 - Texte -->
<div v-if="articles.titre2 || articles.content2" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#184869] to-[#1f6093] text-white px-8 ">
  <h2 class="text-4xl font-titre mb-4" v-html="articles.titre2"></h2>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-[300px] " v-html="articles.content2"></div>
</div>

<!-- Slide 3 - Image -->
<div v-if="articles.image3" class="sticky top-0 h-screen bg-cover bg-center"
  :style="{
    backgroundImage: articles
      ? `url(https://portfolio-ethan.pockethost.io/api/files/articles/${articles.id}/${articles.image3})`
      : ''
  }">
  <div class="absolute inset-0 bg-black opacity-30 z-1"></div>
</div>

<!-- Slide 3 - Texte -->
<div v-if="articles.titre3 || articles.content3" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#2a78b4] to-[#3a92d6] text-white px-8 ">
  <h3 class="text-4xl font-titre mb-4" v-html="articles.titre3"></h3>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-[300px]" v-html="articles.content3"></div>
</div>

<!-- Slide 4 - Image -->
<div v-if="articles.image4" class="sticky top-0 h-screen bg-cover bg-center"
  :style="{
    backgroundImage: articles
      ? `url(https://portfolio-ethan.pockethost.io/api/files/articles/${articles.id}/${articles.image4})`
      : ''
  }">
  <div class="absolute inset-0 bg-black opacity-30 z-1"></div>
</div>

<!-- Slide 4 - Texte -->
<div v-if="articles.titre4 || articles.content4" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#3b6f88] to-[#2c5d7a] text-white px-8">
  <h4 class="text-4xl font-titre mb-4" v-html="articles.titre4"></h4>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-[300px]" v-html="articles.content4"></div>
</div>

<!-- Slide 5 - Image -->
<div v-if="articles.image5" class="sticky top-0 h-screen bg-cover bg-center"
  :style="{
    backgroundImage: articles
      ? `url(https://portfolio-ethan.pockethost.io/api/files/articles/${articles.id}/${articles.image5})`
      : ''
  }">
  <div class="absolute inset-0 bg-black opacity-30 z-1"></div>
</div>
<!-- Slide 5 - Texte -->
<div v-if="articles.titre5 || articles.content5" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1f4d6f] to-[#184869] text-white px-8">
  <h5 class="text-4xl font-titre mb-4" v-html="articles.titre5"></h5>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-[300px]" v-html="articles.content5"></div>
</div>

<!-- Slide 6 - Image -->
<div v-if="articles.image6" class="sticky top-0 h-screen bg-cover bg-center"
  :style="{
    backgroundImage: articles
      ? `url(https://portfolio-ethan.pockethost.io/api/files/articles/${articles.id}/${articles.image6})`
      : ''
  }">
  <div class="absolute inset-0 bg-black opacity-30 z-1"></div>
</div>
<!-- Slide 6 - Texte -->
<div v-if="articles.titre6 || articles.content6" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#102d4d] to-[#0c132d] text-white px-8 ">
  <h6 class="text-4xl font-titre mb-4" v-html="articles.titre6"></h6>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-[300px]" v-html="articles.content6"></div>
</div>
<div v-else class="flex justify-center">
      <p class="text-2xl text-center text-white"></p>
    </div>

<!-- Progression visuelle -->
<div
  v-if="isSliderVisible"
  class="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50"
>
<div
  v-for="(slide, index) in getSlideCount()"
  :key="index"
  class="transition-colors rounded-full"
  :class="{
    'w-3 h-3 lg:w-5 lg:h-5 md:w-4 md:h-4 bg-white': currentSlide === index,
    'w-3 h-3 lg:w-5 lg:h-5 md:w-4 md:h-4 bg-gray-500': currentSlide !== index,
  }"
></div>
</div>

</div>

  <div class="w-2/3 h-1 bg-white justify-center mx-auto md:mt-0 animate-on-scroll"></div>
  <h4 class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl mt-12 md:mt-28   ">Mes derniers projets</h4>
  <cardsaccueil />
<div class="flex justify-center items-center mb-10 mt-0 md:mt-20 lg:mt-20">
  <img src="../../components/animations/Anima.gif" alt="GIF animé" class="mb-10 lg:w-24 lg:h-24 md:w-16 md:h-16 w-[75px] h-[71px] mt-0 md:mt-20 lg:mt-20">
</div>
<footers />
  
      </div>
</div>
</template>


<style scoped>
.bg-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); /* Opacité noire */
  z-index: 1;
}

.loader-container{
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

.visible {
  opacity: 1;
  transition: opacity 0.3s ease;
}

span {
  opacity: 0;
}
</style>