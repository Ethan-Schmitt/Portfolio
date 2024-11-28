<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';
import { useRoute } from 'vue-router';

// Définir un type pour un article
interface Article {
  id: string;
  title: string;
  category: string;
  content: string;
  image?: string;
}

const pb = new PocketBase('http://127.0.0.1:8090');
const article = ref<Article | null>(null);
const route = useRoute();

// Récupérer l'article avec l'ID de la route
const fetchArticle = async () => {
  try {
    const response = await pb.collection('articles').getOne(route.params.id as string);
    article.value = response;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
  }
};

onMounted(fetchArticle);
</script>

<template>
  <div v-if="article">
    <h1 class="text-4xl font-bold">{{ article.title }}</h1>
    <p class="text-sm text-gray-600">{{ article.category }}</p>
    <img :src="article.image ? article.image : 'default.jpg'" alt="Article image" class="w-full h-48 object-cover mt-4">
    <div class="mt-6 text-lg" v-html="article.content"></div>
  </div>
  <div v-else>
    <p class="text-center">Chargement de l'article...</p>
  </div>
</template>
