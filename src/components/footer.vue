<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer class="text-white py-6">
      <div class="w-full h-1 bg-white justify-center mx-auto mb-10"></div>
      <div class="container mx-auto flex flex-col items-center space-y-6">
            <div class="relative flex items-center justify-start w-full md:absolute ">
          <img src="@/components/icons/logoES.png" alt="Logo ES" class="h-12 w-auto md:mx-16 mx-7 md:mt-12 mb-8 md:h-20 md:w-auto ">
          <div class="absolute rotate-90 mt-36 ml-20">
            <animationG2  />
        </div>
        </div>
        <!-- Icons -->
        <div class="flex space-x-7">
  <!-- LinkedIn -->
  <a href="https://www.linkedin.com/in/ethan-schmitt-a0ab1b299/" target="_blank" rel="noopener noreferrer" 
     class="inline-flex items-center justify-center  transition-transform transform hover:scale-110">
    <linkedIn class="h-10 w-10 md:h-12 md:w-12" />
  </a>
  
  <!-- GitHub -->
  <a href="https://github.com/Ethan-Schmitt" target="_blank" rel="noopener noreferrer" 
     class="inline-flex items-center justify-center   transition-transform transform hover:scale-110">
    <img src="@/components/icons/GitHub.png" alt="GitHub" class="h-12 w-12 md:h-16 md:w-16 ">
  </a>
</div>

        
        <div class="md:w-1/4 w-1/2 h-1 bg-white justify-center mx- mb-10"></div>
        <div class="mt-4">
          <button 
            class=" text-white underline hover:text-or"
            @click="downloadPdf"
          >
            Télécharger le CV
          </button>
        </div>

        <!-- Copyright -->
        <div class="text-sm">
          ©2024 Ethan Schmitt
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import animationG2 from "@/components/animations/animationG2.vue";
  import linkedIn from "@/components/icons/linkedIn.vue";
  // Fonction pour télécharger le PDF
  const downloadPdf = () => {
    const pdfPath = "/cv/CV-Ethan-Schmitt.pdf"; // Chemin vers le fichier dans public
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'CV-Ethan-Schmitt.pdf';
    link.click();
  };
  </script>
