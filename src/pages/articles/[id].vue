<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { pb } from '@/backend';
import { useRoute, useRouter } from 'vue-router';
import type { ArticlesResponse } from '@/pocketbase-types';
import Headers from '@/components/HeaderPage.vue';
import footers from '@/components/footer.vue';
import ImgPb from '@/components/ImgPb.vue';
import triforce from '@/components/animations/triforces.vue'; 

// Définir un type pour un article
const route = useRoute();
const articles = ref<ArticlesResponse | null>(null);
const isLoading = ref(true);

onMounted(async () => {
  try {
    articles.value = await pb.collection<ArticlesResponse>('articles').getOne(route.params.id);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="relative bg-gradient-to-b from-top-deg to-bot-deg min-h-screen">
    <Headers />

    <div class="relative w-full h-[800px] bg-cover bg-center bg-overlay z-0"
      :style="{ backgroundImage: articles ? `url(https://portfolio-ethan.pockethost.io/api/files/articles/${articles.id}/${articles.image})` : '' }">
   
      <div class="relative inset-0 bg-black opacity-50 z-12"></div>
      
   
      <div class="relative flex flex-col items-start justify-center h-full text-left text-white z-10 p-8 lg:ml-12 md:ml-12 ">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-titre lg:mb-6">
          {{ articles?.title }}
        </h1>
        <p class="text-sm md:text-sm lg:text-lg font-light">
          {{ articles?.category }}
        </p>
        <triforce class="absolute lg:-inset-x-6 mx-auto -bottom-[100px] w-[48px] h-[45px] md:w-16 md:h-16 lg:w-65 lg:h-49"/>
      </div>
      </div>

    <!-- Contenu principal -->
    <div class="flex flex-col items-center  min-h-screen p-4 sm:p-8">
      <div v-if="articles" class="max-w-7xl w-full ">
        <!-- Contenu HTML -->
        <div class="text-lg text-white font-text p-6 rounded-lg">
          <div v-html="articles.content"></div>
        </div>
        
        <div class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl">
          <div v-html="articles.titre2"></div>
        </div>
        
      <div class="flex justify-center mb-4 mt-10">
        <ImgPb class="w-[920px] h-auto ransition-transform duration-500 transform hover:scale-105 rounded-xl " :filename="articles.image2" :record="articles" />
      </div>
      
      <div class="text-lg text-white font-text p-6 rounded-lg">
          <div v-html="articles.content2"></div>
        </div>
        <div class="flex justify-center mb-4 mt-10">
        <ImgPb class="w-[920px] h-auto ransition-transform duration-500 transform hover:scale-105 rounded-xl " :filename="articles.image3" :record="articles" />
      </div>
      
      </div>

      <div v-else class="flex justify-center">
        <p class="text-2xl text-center text-white">Chargement</p>
        <div class="flex flex-row absolute gap-2 mt-20">
          <div class="w-4 h-4 rounded-full bg-or animate-bounce [animation-delay:.7s]"></div>
          <div class="w-4 h-4 rounded-full bg-or animate-bounce [animation-delay:.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-or animate-bounce [animation-delay:.7s]"></div>
        </div>
      </div>
    </div>

    <footers />
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
</style>
