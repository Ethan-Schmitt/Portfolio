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
import cardsaccueil from '@/components/animations/cardsaccueil.vue';



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

    <div
      class="relative w-full h-[800px] bg-cover bg-center bg-overlay z-0"
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

<div v-if="articles.title || articles.content" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-[#0f1e34] text-white px-8 text-center">
  <h1 class="text-5xl font-titre mb-4" v-html="articles.title"></h1>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-28" v-html="articles.content"></div>
</div>

<!-- Slide 2 - Image -->
<div v-if="articles.image2" class="sticky top-0 h-screen flex justify-center items-center bg-[#102d4d]">
  <ImgPb class="w-[100%] max-h-[100%] md:w-[80%] md:max-h-[90%] rounded-3xl" :filename="articles.image2" :record="articles" />
</div>

<!-- Slide 2 - Texte -->
<div v-if="articles.titre2 || articles.content2" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-[#1a3b5a] text-white px-8 text-center">
  <h2 class="text-4xl font-titre mb-4" v-html="articles.titre2"></h2>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-28 " v-html="articles.content2"></div>
</div>

<!-- Slide 3 - Image -->
<div v-if="articles.image3" class="sticky top-0 h-screen flex justify-center items-center bg-[#1a3b5a]">
  <ImgPb class="w-[100%] max-h-[100%] md:w-[80%] md:max-h-[90%] rounded-3xl" :filename="articles.image3" :record="articles" />
</div>

<!-- Slide 3 - Texte -->
<div v-if="articles.titre3 || articles.content3" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-[#1f4d6f] text-white px-8 text-center">
  <h3 class="text-4xl font-titre mb-4" v-html="articles.titre3"></h3>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-28" v-html="articles.content3"></div>
</div>

<!-- Slide 4 - Image -->
<div v-if="articles.image4" class="sticky top-0 h-screen flex justify-center items-center bg-[#1f4d6f]">
  <ImgPb class="w-[100%] max-h-[100%] md:w-[80%] md:max-h-[90%] rounded-3xl" :filename="articles.image4" :record="articles" />
</div>

<!-- Slide 4 - Texte -->
<div v-if="articles.titre4 || articles.content4" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-[#2c5d7a] text-white px-8 text-center">
  <h4 class="text-4xl font-titre mb-4" v-html="articles.titre4"></h4>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-28" v-html="articles.content4"></div>
</div>

<!-- Slide 5 - Image -->
<div v-if="articles.image5" class="sticky top-0 h-screen flex justify-center items-center bg-[#2c5d7a]">
  <ImgPb class="w-[100%] max-h-[100%] md:w-[80%] md:max-h-[90%] rounded-3xl" :filename="articles.image5" :record="articles" />
</div>

<!-- Slide 5 - Texte -->
<div v-if="articles.titre5 || articles.content5" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-[#3b6f88] text-white px-8 text-center">
  <h5 class="text-4xl font-titre mb-4" v-html="articles.titre5"></h5>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-28" v-html="articles.content5"></div>
</div>

<!-- Slide 6 - Image -->
<div v-if="articles.image6" class="sticky top-0 h-screen flex justify-center items-center bg-[#3b6f88]">
  <ImgPb class="w-[100%] max-h-[100%] md:w-[80%] md:max-h-[90%] rounded-3xl" :filename="articles.image6" :record="articles" />
</div>

<!-- Slide 6 - Texte -->
<div v-if="articles.titre6 || articles.content6" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-[#49798d] text-white px-8 text-center">
  <h6 class="text-4xl font-titre mb-4" v-html="articles.titre6"></h6>
  <div class="text-base md:text-lg font-text mx-0 md:mx-28 lg:mx-28" v-html="articles.content6"></div>
</div>





    <div v-else class="flex justify-center">
      <p class="text-2xl text-center text-white"></p>
    </div>
  </div>
  <h4 class="flex justify-center items-center text-or font-titre md:text-5xl text-3xl mt-12 md:mt-12   ">Mes derniers projets</h4>
<cardsaccueil class="mb-16" />
<div class="flex justify-center items-center mb-10 mt-0 md:mt-20 lg:mt-20">
  <img src="../../components/animations/Anima.gif" alt="GIF animé" class="mb-10 lg:w-24 lg:h-24 md:w-16 md:h-16 w-[75px] h-[71px] mt-0 md:mt-20 lg:mt-20">
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