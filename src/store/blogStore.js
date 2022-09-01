import { defineStore } from "pinia";


export const useBlogStore = defineStore('blogStore', {
    state: () => ({
        sampleBlogCards: [
            { title: "PHPstorm vs VScode for Web development", blogImg: "qsXW19K/phpvscode", postDate: "August 2, 2022"},
            { title: "Importance of community in building a Tech career", blogImg: "vBqbH3n/community", postDate: "August 2, 2022"},
            { title: "Trying Golang for the first time as a PHP fanatic", blogImg: "GC23dBM/golang", postDate: "August 3, 2022"},
            { title: "Blog card #4", blogImg: "stock-4", postDate: "August 2, 2022"},
        ],
        blogHTML: "Write your blog Title here...",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoUrl: null,
        mobileNav: true,
        editMode: true,
        signInMode: true,
        signUpMode: false,
        overlayMode: true,
        previewMode: true,
    })
})