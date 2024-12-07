import './assets/css/styles.css'

import { createApp } from 'vue'
import App from '../src/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(),
  // Pass the generated routes written by the plugin 🤖
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Si l'URL contient un hash, défiler jusqu'à l'élément correspondant
      return {
        el: to.hash,  // Cible l'élément correspondant au hash
        behavior: 'smooth',  // Défilement fluide
      }
    }
    return { top: 0 }  // Sinon, faire défiler vers le haut
  }
})

const app = createApp(App)

app.use(router)  // Utilisation du routeur
app.mount('#app')
