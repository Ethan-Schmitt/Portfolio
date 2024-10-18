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
  <header class="flex items-center justify-between ">
    <RouterLink to="/" @click="closeMenu">
      <img src="../components/icons/logoES.png" alt="Image" class="h-14 ml-20" />
    </RouterLink>
    <button
      class="relative z-10 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-[2px] *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300"
      @click="activeMenu = !activeMenu"
    >
      <span :class="{ 'translate-y-[5px] rotate-45': activeMenu }"></span>
      <span :class="{ '-translate-y-[5px] -rotate-45': activeMenu }"></span>
    </button>
    <nav
      class="invisible opacity-0 flex-1 px-6 py-12 flex justify-center items-center mt-20 flex-col fixed z-10 inset-0 bg-gray-500 lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100"
      :class="{ '!visible !opacity-100': activeMenu }"
    >
      <ul class="flex flex-col gap-20 lg:flex-row mr-40">
        <li class="mb-4 lg:mb-0 lg:mr-4">
          <RouterLink class="block p-4 rounded-lg text-white font-titre text-lg" to="/" @click="closeMenu">Projets</RouterLink>
        </li>
        <li class="mb-4 lg:mb-0 lg:mr-4">
          <RouterLink class="block p-4 rounded-lg text-white font-titre text-lg" to="/" @click="closeMenu">A propos</RouterLink>
        </li>
        <li>
          <RouterLink class="block p-4 rounded-lg text-white font-titre text-lg" to="/" @click="closeMenu">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

