<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}


watch(activeMenu, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>

<template>
  <header class="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 sm:p-5 md:p-8 lg:p-10 xl:p-12  fixed w-full">
    <RouterLink to="/" @click="closeMenu">
      <img src="../components/icons/logoES.png" alt="Image" class="h-10 sm:h-14 md:h-16 lg:h-16 xl:h-20 ml-0 lg:ml-8" />
    </RouterLink>
    <button
  class="relative z-30 flex h-[35px] w-12 items-center justify-center lg:hidden"
  @click="activeMenu = !activeMenu"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="white"
    class="h-10 w-10 transition-transform duration-300"
    :class="{ 'hidden': activeMenu }"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="white"
    class="h-10 w-10 transition-transform duration-300"
    :class="{ 'hidden': !activeMenu }"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
    <nav
      class="invisible opacity-0 flex-1 px-6 py-12 flex justify-center items-center mt-0 flex-col fixed z-10 inset-0 bg-top-deg lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100"
      :class="{ '!visible !opacity-100': activeMenu }"
    >
      <ul class="flex flex-col gap-20 lg:flex-row mr-40">
        <li class="mb-4 lg:mb-0 lg:mr-4">
          <RouterLink class="block p-4 rounded-lg text-white font-titre text-lg" to="/articles" @click="closeMenu">Projets</RouterLink>
        </li>
        <li class="mb-4 lg:mb-0 lg:mr-4">
          <RouterLink class="block p-4 rounded-lg text-white font-titre text-lg" to="/#about" @click="closeMenu">A propos</RouterLink>
        </li>
        <li>
          <RouterLink class="block p-4 rounded-lg text-white font-titre text-lg" to="/contact" @click="closeMenu">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

