<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer class="text-white py-6">
        <div class="container mx-auto flex flex-col items-center space-y-6">
        <div class="w-full h-1 bg-white justify-center mx-auto mb-10"></div>
  
        <!-- Icons -->
        <div class="flex space-x-6">
          <a href="https://www.linkedin.com/in/ton-profile" target="_blank" rel="noopener noreferrer">
            <linkedIn class="h-12 w-12" />
          </a>
          <a href="https://github.com/ton-profile" target="_blank" rel="noopener noreferrer ">
            <img src="@/components/icons/GitHub.png" alt="GitHub" class="h-16 w-16 ">
          </a>
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
            <behance class="h-12 w-12"/>
          </a>
        </div>
        
        <div class="relative flex items-center justify-start w-full">
          <img src="@/components/icons/logoES.png" alt="Logo ES" class="h-20 w-auto mx-16">
          <div class="absolute rotate-90">
            <animationG />
        </div>
        </div>
  
        <div class="w-1/4 h-1 bg-white justify-center mx-auto mb-10"></div>
        <div class="text-center">
          <a
            href="/path/to/ton-cv.pdf"
            download
            class="text-white underline hover:text-gray-300"
          >
            Télécharger mon CV
          </a>
        </div>
  
        <!-- Copyright -->
        <div class="text-sm">
          ©2024 Ethan Schmitt
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import animationG from "@/components/animations/animationG.vue";
  import linkedIn from "@/components/icons/linkedIn.vue";
  import behance from "@/components/icons/behance.vue";
  </script>
  