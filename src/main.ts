import './assets/css/styles.css'

import { createApp } from 'vue'
import App from '../src/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory(),
    // pass the generated routes written by the plugin 🤖
    routes
  })
)

app.mount('#app')
