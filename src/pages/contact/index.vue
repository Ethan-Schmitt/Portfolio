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
      <h3 class="flex justify-center items-center text-white font-titre md:text-5xl text-3xl animate-on-scroll mt-56">
        Contact
      </h3>
      <p class="text-center mb-16 mt-9 text-white text-base md:text-lg max-w-[350px] md:max-w-xl lg:max-w-6xl">
        Vous avez un projet, une question ou simplement envie de discuter ? <br />
        N’hésitez pas à me contacter via le formulaire ci-dessous ou directement par e-mail. Je serai ravi de vous répondre dans les plus brefs délais !!
      </p>

      <!-- Notification -->
      <div v-if="notification" :class="{
        'bg-green-500 text-white': notification.type === 'success',
        'bg-red-500 text-white': notification.type === 'error',
      }" class="w-full max-w-md text-center p-4 mb-6 rounded-md shadow-lg transition-opacity">
        <p>{{ notification.message }}</p>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="handleSubmit" class="space-y-4 w-full max-w-[350px] md:max-w-xl lg:max-w-5xl mb-16">
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
          class="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
        >
          Envoyer
        </button>
      </form>
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

</style>