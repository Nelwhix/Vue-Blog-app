import { defineStore } from "pinia";
import axios from "../lib/axios.js";
import {useUserStore} from "./userStore.js";

const csrf = () => axios.get('/sanctum/csrf-cookie')

export const useBlogStore = defineStore('blogStore', {
    state: () => ({
        blogPosts: [],
        blogTitle: "",
        blogHTML: "",
        blogPhotoName: "",
        blogPhotoUrl: null,
        mobileNav: true,
        editMode: true,
        signInMode: true,
        signUpMode: false,
        overlayMode: true,
        previewMode: true,
        deleteModalMode: false,
    }),
    actions: {
        async publishPost(form, serverErrors) {
            const userStore = useUserStore()
            userStore.isLoading = true
            await csrf()

            axios.post('/upload-post', form)
                .then(res => {
                    this.$router.push({name: 'home'})
                    form = null
                    console.log("successful")
                })
                .catch(error => {
                    if (error.response) {
                        serverErrors.errorArray = error.response.data.message
                    }
                })
                .then(() => {
                    userStore.isLoading = false
                })
        },

        getPosts() {
            axios.get('/posts')
            .then(response => {
                this.blogPosts = response.data.blogPosts
            })
            .catch(error => {
                console.log(error)
            })
        },

    }
})