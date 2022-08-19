import axios from "../lib/axios.js";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useBlogStore } from "./blogStore.js";

const csrf = () => axios.get('/sanctum/csrf-cookie')

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            userData: useStorage('userData', []),
            isLoading: false,
        }
    },
    getters: {
        hasUserData: state => Object.keys(state.userData).length > 0
    },
    actions: {
        getData() {
            axios.get('/user')
                .then(res => {
                    this.userData = res.data
                })
                .catch(err => {
                    if (err.response.data.errors) {
                        console.log(Object.values(err.response.data.errors).flat())
                    }
                })
        },
        async register(form) {
            await csrf()

            axios.post('/register', form)
                .then(res => {
                    this.$router.push({name: 'home'})
                })
                .catch(err => {
                    if (err.response.data.errors) {
                        console.log(Object.values(err.response.data.errors).flat())
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
                    this.userData = res.data
                    blogStore.signInMode = true
                    blogStore.overlayMode = true
                })
                .catch(err => {
                    if (err.response.data.errors) {
                        serverErrors.errorArray = Object.values(err.response.data.errors).flat()
                    }
                })
                .then(() => {
                    this.isLoading = false
                })
        }
    }
})