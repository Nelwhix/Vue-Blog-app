import { createApp, markRaw } from 'vue'
import './index.css'
import App from './App.vue'
import router from "./router"
import Vue3Editor from "vue3-editor"
import { createPinia } from 'pinia'
import axios from 'axios'
import vue3GoogleLogin from 'vue3-google-login'

const pinia = createPinia()
const app = createApp(App)

pinia.use(({ store }) => {
    store.$router = markRaw(router)
})

app.use(vue3GoogleLogin, {
    clientId: '784429536780-7ca5h2gum7u49bnflss7ofbl5s1929nc.apps.googleusercontent.com'
})
app.use(router)
app.use(pinia)
app.mount('#app')
