<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12 mt-8">
    <!-- Carte article -->
    <div
      v-for="article in articles"
      :key="article.id"
      @click="handleCardClick(article.id)"
      class="relative h-72 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform card"
    >
      <!-- Animation de bordure -->
      <div class="absolute inset-0 rounded-lg border-animation"></div>

      <!-- Contenu de l'image -->
      <div
        class="absolute inset-1 bg-cover bg-center content rounded-lg"
        :style="{ backgroundImage: `url(${pb.files.getUrl(article, article.image)})` }"
      ></div>

      <!-- Superposition en dégradé pour le texte -->
      <div class="absolute bottom-1 left-1 right-1 h-2/3 bg-gradient-to-t z-10"></div>

      <!-- Texte de la carte -->
      <div class="absolute bottom-0 left-0 right-0 text-white p-4 flex flex-col justify-end z-10">
        <h3 class="text-lg font-semibold">{{ article.title }}</h3>
        <p class="text-sm mt-1">{{ article.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { pb } from '@/backend';
import { useRouter } from 'vue-router';
import type { ArticlesResponse } from '@/pocketbase-types';

const router = useRouter();
const articles = ref<ArticlesResponse[] | null>(null);
const selectedCategory = ref('');
const isLoading = ref(true);

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
  router.push(`/articles/${articleId}`);
};

watch(selectedCategory, fetchArticles);
onMounted(fetchArticles);
</script>

<style scoped>
/* Apparence de la carte */
.card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

/* Animation de la bordure */
.border-animation {
  border-radius: 10px;
  border: 4px solid transparent; /* Épaisseur de la bordure */
  background: linear-gradient(90deg, #ffd700, #ffffff, #ffd700); /* Ajout d'une boucle au gradient */
  background-size: 400% 400%;
  animation: rotateBorderSmooth 17s linear infinite; /* Durée augmentée pour fluidité */
  z-index: 1; /* S'affiche sous le contenu */
  pointer-events: none; /* Ignore les clics sur la bordure */
}

/* Contenu de l'image */
.content {
  position: absolute;
  inset: 5px; /* Réduction de la taille pour exposer la bordure */
  background-size: cover;
  background-position: center;
  border-radius: 10px; /* Coin arrondi pour l'image */
  z-index: 2;
}

/* Animation fluide pour la bordure */
@keyframes rotateBorderSmooth {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 200% 50%; /* Transition fluide vers le centre */
  }
  100% {
    background-position: 400% 50%;
  }
}

/* Gradient superposé pour le texte */
.bg-gradient-to-t {
  background: linear-gradient(to top, black, transparent);
}
</style>

