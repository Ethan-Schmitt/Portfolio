<template>
  <div class="carousel" @mouseover="pause" @mouseout="resume">
    <div class="group" ref="carouselGroup">
      <div v-for="(image, index) in images" :key="index" class="card">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
    <!-- Duplication des images pour l'effet infini -->
    <div class="group" aria-hidden>
      <div v-for="(image, index) in images" :key="`duplicate-${index}`" class="card">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "/src/components/icons/carroussel/illustrator-logo.png", alt: "Illustrator Logo" },
        { src: "/src/components/icons/carroussel/image-5.png", alt: "Image 5" },
        { src: "/src/components/icons/carroussel/image-6.png", alt: "Image 6" },
        { src: "/src/components/icons/carroussel/javascript-logo.png", alt: "JavaScript Logo" },
        { src: "/src/components/icons/carroussel/photoshop-original-logo.png", alt: "Photoshop Logo" },
        { src: "/src/components/icons/carroussel/ubuntu-logo.png", alt: "Ubuntu Logo" },
        { src: "/src/components/icons/carroussel/vue-logo.png", alt: "Vue.js Logo" },
      ],
    };
  },
  methods: {
    pause() {
      this.$refs.carouselGroup.style.animationPlayState = "paused";
    },
    resume() {
      this.$refs.carouselGroup.style.animationPlayState = "running";
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100vw; /* Prend toute la largeur de la page */
  height: 150px; /* Hauteur fixe */
  overflow: hidden;
  display: flex;
  align-items: center; /* Centrer les logos verticalement */
  position: relative;
}

.group {
  display: flex;
  gap: 120px; /* Espacement réduit entre les logos */
  will-change: transform;
  animation: scrolling 15s linear infinite;
}

.card {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px; /* Taille réduite des logos */
  height: 100px;
}

.card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.carousel:hover .group {
  animation-play-state: paused;
}
</style>
