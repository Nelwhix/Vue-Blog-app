import { defineStore } from "pinia";

export const useBlogStore = defineStore('blogStore', {
    state: () => ({
        sampleBlogCards: [
            { title: "PHPstorm vs VScode for Web development", blogImg: "phpvscode", postDate: "August 2, 2022"},
            { title: "Importance of community in building a Tech career", blogImg: "community", postDate: "August 2, 2022"},
            { title: "Trying Golang for the first time as a PHP fanatic", blogImg: "golang", postDate: "August 3, 2022"},
            { title: "Blog card #4", blogIMg: "stock-4", postDate: "August 2, 2022"},
        ],
        mobileNav: false,
        editMode: false,
        signInMode: false,
        signUpMode: false,
        overlayMode: false,
    })
})