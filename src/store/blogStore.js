import { defineStore } from "pinia";
import axios from "../lib/axios.js";
import {useUserStore} from "./userStore.js";

const csrf = () => axios.get('/sanctum/csrf-cookie')

export const useBlogStore = defineStore('blogStore', {
    state: () => ({
        sampleBlogCards: [
            { title: "PHPstorm vs VScode for Web development", blogImg: "phpvscode", postDate: "August 2, 2022"},
            { title: "Importance of community in building a Tech career", blogImg: "community", postDate: "August 2, 2022"},
            { title: "Trying Golang for the first time as a PHP fanatic", blogImg: "golang", postDate: "August 3, 2022"},
            { title: "Blog card #4", blogImg: "stock-4", postDate: "August 2, 2022"},
        ],
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
    }),
    actions: {
        async publishPost(form, serverErrors) {
            const userStore = useUserStore()
            userStore.isLoading = true
            await csrf()

            axios.post('/upload-post', form)
                .then(res => {
                    console.log(res)
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
    }
})