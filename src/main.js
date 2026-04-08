import '@/assets/styles/global/fonts.scss'
import '@/assets/styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'aos/dist/aos.css'
import router from './router'
import Vue3Marquee from 'vue3-marquee'
import 'aos/dist/aos.css'

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(ElementPlus)
  .use(Vue3Marquee)

app.mount('#app')
