<template>
  <div class="carousel-container">
    <div class="carousel">
      <!-- Les éléments dupliqués pour le flux infini -->
      <div
        v-for="(image, index) in infiniteImages"
        :key="index"
        class="carousel-item"
      >
        <img
          :src="`/images/${image.src}`"  
          :alt="image.alt"
          class="carousel-image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      images: [
        { src: "illustrator-logo.png", alt: "Illustrator Logo" },
        { src: "image-5.png", alt: "Image 5" },
        { src: "image-6.png", alt: "Image 6" },
        { src: "javascript-logo.png", alt: "JavaScript Logo" },
        { src: "photoshop-original-logo.png", alt: "Photoshop Logo" },
        { src: "Ubuntu-logo.png", alt: "Ubuntu Logo" },
        { src: "Vue-logo.png", alt: "Vue.js Logo" },
      ],
    };
  },
  computed: {
    infiniteImages() {
      const multiplier = 100;
      return Array(multiplier).fill(this.images).flat();
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* Carrousel global */
.carousel {
  display: flex;
  align-items: center;
  gap: 2rem; /* Espacement entre les logos */
  animation: scroll 1500s linear infinite; /* Animation infinie */
  width: max-content; /* Permet au carrousel de s'étendre dynamiquement */
  white-space: nowrap; /* Empêche le retour à la ligne */
}

/* Éléments individuels du carrousel */
.carousel-item {
  flex-shrink: 0;
}

/* Images */
.carousel-image {
  height: 5rem; /* Ajuste la taille de l'image */
  object-fit: contain;
  margin-right: 6rem; /* Espacement entre les images */
}

/* Animation infinie */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* Déplace de toute la largeur du carrousel */
  }
}

/* Responsive : ajustements pour les petits écrans */
@media (max-width: 768px) {
  .carousel {
    gap: 1.5rem;
  }

  .carousel-image {
    height: 4rem; /* Ajuste la taille de l'image */
    margin-right: 2rem; /* Ajuste l'espacement */
  }
}
</style>
