import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from "./router"
import Vue3Editor from "vue3-editor"
import { createPinia } from 'pinia'
import axios from 'axios'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
