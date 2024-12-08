<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { pb } from '@/backend';
import { useRouter } from 'vue-router';
import ImgPb from '@/components/ImgPb.vue';
import type { ArticlesResponse } from '@/pocketbase-types';
import Headers from '@/components/HeaderPage.vue';
import footers from '@/components/footer.vue';

const router = useRouter();
const articles = ref<ArticlesResponse[] | null>(null);
const selectedCategory = ref('');
const isLoading = ref(true);
const activeCardId = ref<string | null>(null); // Gère l'état de la carte active

// Récupérer les articles
const fetchArticles = async () => {
  try {
    let filter = '';
    if (selectedCategory.value) {
      filter = `category = "${selectedCategory.value}"`;
    }
    const response = await pb.collection('articles').getFullList<ArticlesResponse>({
      filter,
    });
    articles.value = response;
    isLoading.value = false;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    isLoading.value = false;
  }
};

// Gestion du clic sur la carte
const handleCardClick = (articleId: string) => {
  router.push(`/articles/${articleId}`); // Redirige immédiatement vers l'article
};

watch(selectedCategory, fetchArticles);
onMounted(fetchArticles);
const borderColors = [
  'border-top-deg',
  'border-mid-deg',
  'border-bot-deg',
  'border-left-btn',
  'border-right-btn',
];
</script>
<template>
  <div class="relative animate-gradient min-h-screen">
    <Headers />

    <div class="justify-center p-40">
      <h1 class="flex justify-center items-center text-center text-white font-titre md:text-5xl text-xl md:mt-12 -mx-24 md:-mx-10 sm:-mx-0 mb-16">
        Découvrez tous mes projets
      </h1>

      <!-- Menu déroulant pour tablette et mobile -->
      <div class="sm:hidden flex justify-center mt-10">
        <select 
          v-model="selectedCategory"
          @change="fetchArticles"
          class="px-6 py-3 bg-white text-black rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
        >
          <option value="" :class="{ 'bg-black text-white': selectedCategory === '' }">Tous</option>
          <option value="développement" :class="{ 'bg-black text-white': selectedCategory === 'développement' }">Développement</option>
          <option value="communication" :class="{ 'bg-black text-white': selectedCategory === 'communication' }">Communication</option>
          <option value="design" :class="{ 'bg-black text-white': selectedCategory === 'design' }">Design</option>
        </select>
      </div>

      <!-- Boutons pour les catégories sur grand écran (tablette et plus) -->
      <div class="hidden sm:flex justify-center mt-4 space-x-4">
        <button 
          @click="selectedCategory = ''" 
          :class="{'bg-black text-white': selectedCategory === '', 'bg-white text-black': selectedCategory !== ''}"
          class="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
        >
          Tous
        </button>
        <button 
          @click="selectedCategory = 'développement'" 
          :class="{'bg-black text-white': selectedCategory === 'développement', 'bg-white text-black': selectedCategory !== 'développement'}"
          class="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
        >
          Développement
        </button>
        <button 
          @click="selectedCategory = 'communication'" 
          :class="{'bg-black text-white': selectedCategory === 'communication', 'bg-white text-black': selectedCategory !== 'communication'}"
          class="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
        >
          Communication
        </button>
        <button 
          @click="selectedCategory = 'design'" 
          :class="{'bg-black text-white': selectedCategory === 'design', 'bg-white text-black': selectedCategory !== 'design'}"
          class="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
        >
          Design
        </button>
      </div>

      <!-- Animation de chargement -->
      <div v-if="isLoading" class="flex justify-center mt-6">
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-or animate-bounce [animation-delay:.7s]"></div>
          <div class="w-4 h-4 rounded-full bg-or animate-bounce [animation-delay:.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-or animate-bounce [animation-delay:.7s]"></div>
        </div>
      </div>

      <!-- Affichage des articles -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mx-32 md:-mx-0 sm:-mx-22 mt-6">
    <div
      v-for="(article, index) in articles"
      :key="article.id"
      @click="handleCardClick(article.id)"
      :class="`relative group overflow-hidden rounded-lg shadow-lg cursor-pointer border-4 ${borderColors[index % borderColors.length]}`"
    >
      <!-- Image de la carte -->
      <ImgPb
        :filename="article.image"
        :record="article"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div class="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t z-10"></div>
      <!-- Overlay avec les informations -->
      <div class="absolute bottom-0 left-0 right-0 text-white p-4 flex flex-col justify-end z-10">
        <h3 class="text-lg font-semibold">{{ article.title }}</h3>
        <p class="text-sm mt-1">{{ article.category }}</p>
      </div>
    </div>
  </div>
    </div>
    <footers />
  </div>
</template>


<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background: linear-gradient(-45deg,#2b6ba2, #1a4061, #0c132d,#0c132d,  #153d67, #2b6ba2);
  background-size: 500% 500%;
  animation: gradient 20s linear infinite;
}

.border-red-500 {
  border-color: #0c132d;
}
.border-blue-500 {
  border-color: #102d4d;
}
.border-green-500 {
  border-color: #24aae3;
}
.border-pink-500 {
  border-color: #763af5;
}
.border-purple-500 {
  border-color: #a604f2;
}

/* Transition sur le zoom de l'image */
.group-hover:scale-110 {
  transform: scale(1.1);
}

.bg-gradient-to-t {
  background: linear-gradient(to top, black, transparent);
}

</style>




