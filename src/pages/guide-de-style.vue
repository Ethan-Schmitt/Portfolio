<script lang="ts">
import Btncontact from '@/components/boutons/btncontact.vue';
export default {
  components: {
    Btncontact
  }
}
</script>

<template class="bg-top deg">
    <div>
        <h1 class="font-titre text-7xl">Titre</h1>
        <p class="font-text">Texte</p>
       <Btncontact >envoyer</Btncontact>
    </div>
</template>
