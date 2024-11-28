<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative w-full overflow-hidden  py-4">
    <!-- Carrousel -->
    <div
      ref="carousel"
      class="flex items-center justify-start space-x-8 animate-scroll"
    >
      <div
        v-for="(image, index) in infiniteImages"
        :key="index"
        class="flex-shrink-0"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="h-16 w-auto object-contain"
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
  computed: {
    // Générer un tableau infini en dupliquant les images
    infiniteImages() {
      return [...this.images, ...this.images];
    },
  },
};
</script>

<style scoped>
/* Animation pour un défilement continu */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  display: flex;
  gap: 4rem; /* Espacement entre les images */
  animation: scroll 10s linear infinite;
}
</style>