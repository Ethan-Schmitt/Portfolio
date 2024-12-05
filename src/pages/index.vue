<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Headers from '@/components/HeaderPage.vue';
import animationD from '@/components/animations/animationD.vue';
import animationG from '@/components/animations/animationG.vue';
import triforce from '@/components/animations/triforces.vue'; 
import footers from '@/components/footer.vue';
import carroussel from '@/components/icons/carroussel/carroussel.vue';
import cardsaccueil from '@/components/animations/cardsaccueil.vue';

</script>

<template>
  
  <div class="relative bg-gradient-to-b from-top-deg  to-bot-deg min-h-screen">
    <Headers />
    <animationD class="hidden fixed mt-36 right-0 absolute lg:block lg:w-30 lg:h-48 md:w-20 md:h-24 w-16 h-20" />
    <animationG class="hidden lg:block  fixed mt-96 absolute  lg:w-30 lg:h-48 md:w-20 md:h-24 w-16 h-20" />
    <div class="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 ">
      <img src="../components/animations/Anima.gif" alt="GIF animé" class="mb-10 lg:w-24 lg:h-24 md:w-16 md:h-16 w-[65px] h-[61px] mt-0 md:mt-20 lg:mt-20">
      <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-titre -mb-4">Ethan Schmitt</h1>
      <h2 class="text-5xl md:text-7xl lg:text-8xl font-titre shine-text">Web développer</h2>
      <triforce class=" w-[48px] h-[45px] md:w-16 md:h-16 lg:w-65 lg:h-49 absolute -bottom-10 left-0  "  />
    </div>
    <div class="w-2/3 h-1 bg-white justify-center mx-auto mb-10 -mt-20 md:mt-0"></div>
    <h3 class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl">A propos</h3>
    <div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-52 p-4 md:p-12 ">
      <p class="text-white text-base md:text-lg  font-text text-center md:text-left max-w-3xl ">
        Bienvenue ! Je m’appelle Ethan, j’ai 20 ans et je suis étudiant en deuxième année de BUT Métiers du Multimédia et de l’Internet (MMI), avec une spécialisation en développement web. Passionné par les nouvelles technologies, les jeux vidéo et l’automobile, je suis constamment motivé par de nouveaux défis. Curieux et polyvalent, j’aime explorer et expérimenter avec tout ce qui touche à la technologie, qu’il s’agisse de PC, de tablettes, de téléphones ou de consoles.
        <br><br>
        <em>Pour découvrir davantage sur mon parcours et mes projets, je vous invite à explorer mon site !</em>
      </p>
      <img src="../components/icons/pp.png" alt="Photo de profil" class="w-[130px] h-[130px] md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg">
    </div>
    <h4 class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl md:mt-12">Mes derniers projets</h4>
    <cardsaccueil />
    <h5 class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl md:mt-20 mt-20">Mes compétences</h5>
    <carroussel class="mt-12 mb-32"/>
    <footers />
  </div>
</template>

<style scoped>
.shine-text {
  background: linear-gradient(90deg, rgb(255, 255, 255,0.9), #ffd700, rgba(255, 255, 255, 0.901));
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: colorShine 3s linear infinite;
}

@keyframes colorShine {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}
</style>


