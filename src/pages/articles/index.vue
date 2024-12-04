<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { pb } from '@/backend';
import { useRouter } from 'vue-router';
import ImgPb from '@/components/ImgPb.vue';
import type { ArticlesResponse } from '@/pocketbase-types';
import Headers from '@/components/HeaderPage.vue';

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
  if (activeCardId.value === articleId) {
    router.push(`/articles/${articleId}`); // Redirige vers l'article
  } else {
    activeCardId.value = articleId; // Active l'overlay
  }
};

watch(selectedCategory, fetchArticles);
onMounted(fetchArticles);
</script>

<template>
  <div class="relative bg-gradient-to-b from-top-deg to-bot-deg min-h-screen">
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
          v-for="article in articles"
          :key="article.id"
          @click="handleCardClick(article.id)"
          class="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <!-- Image de la carte -->
          <ImgPb
            :filename="article.image"
            :record="article"
            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <!-- Overlay avec les informations -->
          <div
            :class="{
              'opacity-100': activeCardId === article.id,
              'opacity-0 group-hover:opacity-100': activeCardId !== article.id,
            }"
            class="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white p-4"
          >
            <h3 class="text-lg font-semibold">{{ article.title }}</h3>
            <p class="text-sm mt-2">{{ article.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>







