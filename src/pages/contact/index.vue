<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import headers from "../../components/HeaderPage.vue";
import footers from "../../components/footer.vue";
import { ref } from "vue";

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

const notification = ref<{ message: string; type: string } | null>(null);

const handleSubmit = async () => {
  try {
    const response = await fetch("https://formspree.io/f/mrbgvkjw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      }),
    });

    if (response.ok) {
      notification.value = {
        message: "Votre message a été envoyé avec succès !",
        type: "success",
      };
      form.value = {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      };
    } else {
      notification.value = {
        message: "Une erreur est survenue. Veuillez réessayer.",
        type: "error",
      };
    }
  } catch (error) {
    notification.value = {
      message: "Une erreur est survenue. Veuillez réessayer.",
      type: "error",
    };
  }
};
</script>

<template>
  <div class="relative animate-gradient">
    <headers />
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h3 class="flex justify-center items-center font-titre md:text-5xl text-3xl mt-56 shine-text">
        Contact
      </h3>
      <p class="text-center mb-16 mt-9 text-white font-text text-base md:text-lg max-w-[350px] md:max-w-xl lg:max-w-6xl">
        Vous avez un projet, une question ou simplement envie de discuter ? <br />
        N’hésitez pas à me contacter via le formulaire ci-dessous, directement par e-mail ou encore via LinkedIn. Je serai ravi de vous répondre dans les plus brefs délais !!
      </p>

      <!-- Notification -->
      <div v-if="notification" :class="{
        'bg-green-500 text-white': notification.type === 'success',
        'bg-red-500 text-white': notification.type === 'error',
      }" class="w-full max-w-md text-center p-4 mb-6 rounded-md shadow-lg transition-opacity">
        <p>{{ notification.message }}</p>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="handleSubmit" class="space-y-4 w-full max-w-[350px] md:max-w-xl lg:max-w-5xl mb-9">
        <!-- Prénom et Nom -->
        <div class="flex gap-4">
          <input
            type="text"
            placeholder="Prénom"
            v-model="form.firstName"
            class="w-1/2 px-4 py-2 bg-gray-500 bg-opacity-50 text-white placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Nom"
            v-model="form.lastName"
            class="w-1/2 px-4 py-2 bg-gray-500 bg-opacity-50 text-white placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            required
          />
        </div>
        <!-- Email -->
        <input
          type="email"
          placeholder="Email"
          v-model="form.email"
          class="w-full px-4 py-2 bg-gray-500 bg-opacity-50 text-white placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
          required
        />
        <!-- Objet -->
        <input
          type="text"
          placeholder="Objet"
          v-model="form.subject"
          class="w-full px-4 py-2 bg-gray-500 bg-opacity-50 text-white placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
          required
        />
        <!-- Message -->
        <textarea
          placeholder="Message"
          v-model="form.message"
          class="w-full px-4 py-2 bg-gray-500 bg-opacity-50 text-white placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
          rows="4"
          required
        ></textarea>
        <!-- Bouton -->
        <button
          type="submit"
          class="bg-purple-900 text-white border border-purple-400 border-b-4 font-titre overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group
          
          w-full py-2 px-4 bg-purple-600 font-titre text-white"
        >
        
          Envoyer
        </button>
      </form>
      <a
  class="group hover:bg-sky-600 relative bg-sky-800 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6"
 href="https://www.linkedin.com/in/ethan-schmitt-a0ab1b299/" target="_blank" rel="noopener noreferrer" >
  <svg
    class="w-8 h-8 fill-neutral-50"
    height="100"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 100 100"
    width="100"
    x="0"
    xmlns="http://www.w3.org/2000/svg"
    y="0"
  >
    <path
      d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
    ></path>
  </svg>
  <span class="border-l-2 px-1">Ethan Schmitt</span>
  <div
    class="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
  >
   Voir mon profil !
  </div>
</a>
    <img src="../../components/animations/Anima.gif" alt="GIF animé" class=" justify-center items-center mb-20 lg:w-24 lg:h-24 md:w-16 md:h-16 w-[65px] h-[61px] mt-0 md:mt-20 lg:mt-20 ">
    </div>
    
    <footers />
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

.shine-text {
  background: linear-gradient(90deg, rgb(255, 255, 255, 0.9), #ffd700, rgba(255, 255, 255, 0.901));
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: colorShine 3s linear infinite;
}

@keyframes colorShine {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}
</style>