import axios from "../lib/axios.js";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useBlogStore } from "./blogStore.js";
import { googleLogout } from 'vue3-google-login';

const csrf = () => axios.get('/sanctum/csrf-cookie')

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            userData: useStorage('userData', []),
            isLoading: false,
        }
    },
    actions: {
        getData() {
            axios.get('/user')
                .then(res => {
                    this.userData = res.data
                })
                .catch(err => {
                    return null
                })
        },
        async register(form, serverErrors) {
            this.isLoading = true
            await csrf()

            axios.post('/register', form)
                .then(res => {
                    this.getData()
                    this.$router.push({name: 'home'})
                })
                .catch(err => {
                    if (err.response) {
                        serverErrors.errorArray = Object.values(err.response.data.errors).flat()
                    }
                })
                .then(() => {
                    this.isLoading = false
                })
        },

        async login(form, serverErrors) {
            const blogStore = useBlogStore()
            this.isLoading = true
            await csrf()

            axios.post('/login', form)
                .then(res => {
                    this.getData()
                    blogStore.signInMode = true
                    blogStore.overlayMode = true
                })
                .catch(err => {
                    if (err.response) {
                        serverErrors.errorArray = Object.values(err.response.data.errors).flat()
                    }
                })
                .then(() => {
                    this.isLoading = false
                })
        },

        async logout() {
            this.isLoading = true

            if (this.userData.google_id) {
                googleLogout();
                this.userData = {}
                this.isLoading = false
            } else {
                await axios
                .post('/logout')
                .then(() => {
                    this.userData = {}
                })
                .catch(err => {
                    if (err.response) {
                        console.log(Object.values(err.response.data.errors).flat())
                    }
                })
                .then(() => {
                    this.isLoading = false
                })
            }
        },

        // Save google user to db
        async glogin(form) {
            const blogStore = useBlogStore();
            this.isLoading = true
            await csrf();

            axios.post('/auth/callback', form)
                .then((res) => {
                    this.getData()
                    blogStore.signInMode = true
                    blogStore.overlayMode = true
                })
                .catch((err) => {
                    console.log(err)
                })
                .then(() => {
                    this.isLoading = false
                })
        }
    }
})