<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted } from 'vue';
import { useHead } from '@vueuse/head';  // Import de useHead pour gérer les métadonnées

// Import des composants
import Headers from '@/components/HeaderPage.vue';
import animationD from '@/components/animations/animationD.vue';
import animationG from '@/components/animations/animationG.vue';
import triforce from '@/components/animations/triforces.vue'; 
import footers from '@/components/footer.vue';
import carroussel from '@/components/icons/carroussel/carroussel.vue';
import cardsaccueil from '@/components/animations/cardsaccueil.vue';

// Définir les métadonnées de la page (titre et description)
useHead({
  title: 'Ethan Schmitt | Portfolio ',  // Titre de la page
  titleTemplate: null,  
  meta: [
    {
      name: 'description',
      content:' Bienvenue ! Je m’appelle Ethan, j’ai 20 ans et je suis étudiant en deuxième année de BUT Métiers du Multimédia et de l’Internet (MMI)'
    }
  ]
});

// Observer visibility for scroll-triggered animations
const observeVisibility = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('animate-fade-in');
    observer.unobserve(entry.target);  // Stop observing once the element is visible
  }
};

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => observeVisibility(entry, observer));
  }, { threshold: 0.3 });

  // Observe all elements with the 'animate-on-scroll' class
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => observer.observe(element));
});
</script>


<template>
  <div class="relative animate-gradient min-h-screen">
    <Headers />
    <animationD class="hidden fixed mt-36 right-0 absolute lg:block lg:w-30 lg:h-48 md:w-20 md:h-24 w-16 h-20 animate-on-scroll" />
    <animationG class="hidden lg:block fixed mt-96 absolute lg:w-30 lg:h-48 md:w-20 md:h-24 w-16 h-20 animate-on-scroll" />
    <div class="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 animate-on-scroll">
      <img src="../components/animations/Anima.gif" alt="GIF animé" class="mb-10 lg:w-24 lg:h-24 md:w-16 md:h-16 w-[65px] h-[61px] mt-0 md:mt-20 lg:mt-20 animate-on-scroll">
      <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-titre -mb-4 animate-on-scroll">Ethan Schmitt</h1>
      <h2 class="text-5xl md:text-7xl lg:text-8xl font-titre shine-text animate-on-scroll">Web developer</h2>
      <triforce class="w-[48px] h-[45px] md:w-16 md:h-16 lg:w-65 lg:h-49 absolute -bottom-10 left-0 animate-on-scroll" />
    </div>
     <section id="about" >
    <div class="w-2/3 h-1 bg-white justify-center mx-auto mb-10 -mt-20 md:mt-0 animate-on-scroll"></div>
   <h3 class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl animate-on-scroll " >A propos</h3>
    <div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-52 p-4 md:p-12 animate-on-scroll">
      <p class="text-white text-base md:text-lg font-text text-center md:text-left max-w-3xl animate-on-scroll">
        Bienvenue ! Je m’appelle Ethan, j’ai 20 ans et je suis étudiant en deuxième année de BUT Métiers du Multimédia et de l’Internet (MMI), avec une spécialisation en développement web. Passionné par les nouvelles technologies, les jeux vidéo et l’automobile, je suis constamment motivé par de nouveaux défis. Curieux et polyvalent, j’aime explorer et expérimenter avec tout ce qui touche à la technologie, qu’il s’agisse de PC, de tablettes, de téléphones ou de consoles.
        <br><br>
        <em>Pour découvrir davantage sur mon parcours et mes projets, je vous invite à explorer mon site !</em>
      </p>
      <img src="../components/icons/pp.png" alt="Photo de profil" class="w-[130px] h-[130px] md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg animate-on-scroll">
    </div>
    </section>
    <h4 class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl md:mt-12 animate-on-scroll">Mes derniers projets</h4>
    <cardsaccueil class="animate-on-scroll" />
    <router-link to="/articles">
    <div class="flex justify-center items-center mt-16 animate-on-scroll">
      <button
      class="relative justify-center items-center px-8 py-2 rounded-md bg-top-deg isolation-auto z-10 border-1 border-bot-deg
      before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white 
      before:-right-full before:hover:right-0 before:rounded-full before:bg-bot-deg before:-z-10 before:aspect-square 
      before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 
      text-m font-titre text-white bg-top-deg border border-black rounded-lg shadow-sm gap-x-2 hover:bg-top-deg 
      disabled:opacity-50 disabled:pointer-events-none"
      >
      En savoir + 
      </button>
    </div>
    </router-link>
    <h5 class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl md:mt-20 mt-20 animate-on-scroll">Mes compétences</h5>
    <carroussel class="mt-12 mb-32 animate-on-scroll"/>
    <footers />
  </div>
</template>

<style >
@keyframes airAnim {
  0% {
    transform: translateX(100%); /* Déplacer la bande à droite au début */
  }
  50% {
    transform: translateX(-100%); /* Déplacer la bande à gauche au centre */
  }
  100% {
    transform: translateX(100%); /* Déplacer la bande à droite à la fin */
  }
}

.shine-text {
  background: linear-gradient(90deg, rgb(255, 255, 255, 0.9), #ffd700, rgba(255, 255, 255, 0.901));
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

.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px); /* Commence en bas */
  transition: opacity 1s ease, transform 1s ease;
}

.animate-fade-in {
  opacity: 1;
  transform: translateY(0); /* Remonte à sa position d'origine */
}

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
</style>