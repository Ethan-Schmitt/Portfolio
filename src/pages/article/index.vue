<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import PocketBase from 'pocketbase';
import { ref, watch, onMounted } from 'vue';

// Définir un type pour un article
interface Article {
  id: string;
  title: string;
  category: string;
  image?: string;
}

const pb = new PocketBase('https://portfolio-ethan.pockethost.io/');
const articles = ref<Article[]>([]); // Déclaration avec type
const selectedCategory = ref('');

// Récupérer les articles (optionnellement filtrés)
const fetchArticles = async () => {
  try {
    let filter = '';
    if (selectedCategory.value) {
      // Utiliser un filtre correct pour les catégories
      filter = `category = "${selectedCategory.value}"`;
    }
    
    const response = await pb.collection('articles').getFullList<Article>({
      filter, // Appliquer le filtre
    });

    articles.value = response;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
  }
};

// Mettre à jour les articles quand la catégorie change
watch(selectedCategory, fetchArticles);

onMounted(fetchArticles);
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-center mt-6">Découvrez tous mes projets</h1>
    
    <!-- Boutons pour filtrer par catégorie -->
    <div class="flex justify-center mt-4 space-x-4">
      <button @click="selectedCategory = ''" class="px-4 py-2 bg-gray-300 rounded-lg">Tous</button>
      <button @click="selectedCategory = 'développement'" class="px-4 py-2 bg-gray-300 rounded-lg">Développement</button>
      <button @click="selectedCategory = 'communication'" class="px-4 py-2 bg-gray-300 rounded-lg">Communication</button>
      <button @click="selectedCategory = 'design'" class="px-4 py-2 bg-gray-300 rounded-lg">Design</button>
    </div>
    
    <!-- Affichage des articles -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 mt-6">
      <div v-for="article in articles" :key="article.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img :src="article.image ? article.image : 'default.jpg'" alt="Article image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold">{{ article.title }}</h3>
          <p class="text-sm text-gray-600">{{ article.category }}</p>
          <router-link :to="`/articles/${article.id}`" class="text-blue-500 text-sm mt-2 inline-block">Lire plus</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


