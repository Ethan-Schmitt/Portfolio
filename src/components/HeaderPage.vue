<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}

// Surveiller les changements de activeMenu et ajouter/supprimer la classe overflow-hidden
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
  class="relative z-10 flex h-3 w-7 flex-col justify-between lg:hidden *:block *:ease *:h-[4px] *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300"
  @click="activeMenu = !activeMenu"
>
      <span :class="{ 'translate-y-[5px] rotate-45': activeMenu }"></span>
      <span :class="{ '-translate-y-[5px] -rotate-45': activeMenu }"></span>
    </button>
    <nav
      class="invisible opacity-0 flex-1 px-6 py-12 flex justify-center items-center mt-20 flex-col fixed z-10 inset-0 bg-mid-deg  lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100"
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

