import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@jood/v-modal/dist/v-modal.css'

createApp(App)
  .use(router)
  .mount('#app')
