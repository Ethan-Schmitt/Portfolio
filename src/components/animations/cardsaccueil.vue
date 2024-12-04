<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { pb } from '@/backend';
import { useRouter } from 'vue-router';
import ImgPb from '@/components/ImgPb.vue';
import type { ArticlesResponse } from '@/pocketbase-types';

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
    const response = await pb.collection('articles').getList<ArticlesResponse>(1, 3, {
      filter,
      sort: '-created', // Trie par date de création décroissante
    }); // Page 1, 3 articles
    articles.value = response.items;
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
   <div class="justify-center mx-48 md:mx-8 sm:mx-12">
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
  </template>
  