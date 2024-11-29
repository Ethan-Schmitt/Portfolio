<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { pb } from '@/backend';
import { useRoute } from 'vue-router';
import ImgPb from '@/components/ImgPb.vue';
import type { ArticlesResponse } from '@/pocketbase-types';
import Headers from '@/components/HeaderPage.vue';

const route = useRoute(); // Utiliser useRoute() pour récupérer les paramètres de la route
const articles = ref<ArticlesResponse[] | null>(null); // Déclaration avec type ArticlesResponse[] (réponse de la collection d'articles)
const selectedCategory = ref('');
const isLoading = ref(true); // Pour gérer l'état de chargement

// Récupérer les articles (optionnellement filtrés)
const fetchArticles = async () => {
  try {
    let filter = '';
    if (selectedCategory.value) {
      filter = `category = "${selectedCategory.value}"`; // Appliquer un filtre par catégorie
    }

    const response = await pb.collection('articles').getFullList<ArticlesResponse>({
      filter, // Appliquer le filtre
    });

    articles.value = response;
    isLoading.value = false; // Fin du chargement
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    isLoading.value = false; // Fin du chargement en cas d'erreur
  }
};

// Mettre à jour les articles quand la catégorie change
watch(selectedCategory, fetchArticles);

onMounted(fetchArticles); // Charger les articles au montage du composant
</script>

<template>
  <div class="relative bg-gradient-to-b from-top-deg to-bot-deg min-h-screen">
    <Headers />

    <div class="items-center justify-center p-40 sm:p-17">
      <h1 class="text-3xl text-white font-bold text-center">Découvrez tous mes projets</h1>

      <!-- Boutons pour filtrer par catégorie -->
      <div class="flex justify-center mt-4 space-x-4">
        <button 
          @click="selectedCategory = ''" 
          class="px-6 py-3 bg-white text-black rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
        >
          Tous
        </button>
        <button 
          @click="selectedCategory = 'développement'" 
          class="px-6 py-3 bg-white text-black rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
        >
          Développement
        </button>
        <button 
          @click="selectedCategory = 'communication'" 
          class="px-6 py-3 bg-white text-black rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
        >
          Communication
        </button>
        <button 
          @click="selectedCategory = 'design'" 
          class="px-6 py-3 bg-white text-black rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
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
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 mt-6">
  <div 
    v-for="article in articles" 
    :key="article.id" 
    class="bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 bg-opacity-70 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105 hover:bg-opacity-90"
  >
    <div class="relative w-full h-56 md:h-64 lg:h-72">
      <ImgPb
        :filename="article.image"
        :record="article"
        class="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
      />
    </div>
    <div class="p-6 space-y-4 backdrop-blur-sm">
      <h3 class="text-lg font-semibold text-white hover:text-blue-300 transition-colors">
        {{ article.title }}
      </h3>
      <p class="text-sm text-gray-300">{{ article.category }}</p>
      <router-link 
        :to="`/articles/${article.id}`" 
        class="text-blue-300 text-sm hover:underline mt-2 inline-block transition-colors"
      >
        Lire plus
      </router-link>
    </div>
  </div>
</div>
    </div>
  </div>
</template>




