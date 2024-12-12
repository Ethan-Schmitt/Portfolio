<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex items-center justify-center h-screen animate-gradient">
    <div class="text-center">
      <h1 class="text-4xl font-extrabold text-white mb-4">Oops!</h1>
        <img src="../components/animations/Anima.gif" alt="GIF animé" class="mb-10 lg:w-24 lg:h-24 md:w-16 md:h-16 w-[65px] h-[61px] mt-0 md:mt-20 lg:mt-20 animate-on-scroll mx-auto">
      <p class="text-xl text-gray-100 mb-8">La page que vous recherchez est introuvable.</p>
      <router-link to="/" class="bg-white text-blue-500 py-2 px-4 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300">Retour à l'accueil</router-link>
    </div>
  </div>
</template>


<style>
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
