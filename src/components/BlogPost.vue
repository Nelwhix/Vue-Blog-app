<script>
import {mapWritableState} from "pinia";
import {useBlogStore} from "../store/blogStore.js";


export default {
    name: "BlogPost",
    props: ['post'],
    computed: {
      ...mapWritableState(useBlogStore, ['signInMode', 'overlayMode', 'mobileNav']),
      getImageUrl() {
        if (this.post.isHero) {
          return new URL(`../assets/blogphotos/${this.post.coverImg}.jpg`, import.meta.url).href;
        }
        return new URL(`../assets/blogphotos/${this.post.blogImg}.jpg`, import.meta.url).href;
      }
    },
    methods: {
      openModal() {
        this.signInMode = false
        this.overlayMode = false
      }
    },
};
</script>

<template>
    <div class="grid md:grid-cols-2">
        <div class="grid col p-7 md:place-content-center bg-zinc-800 text-white">
            <h2 v-if="post.isHero" class="text-2xl my-3">{{ post.title }}</h2>
            <h2 v-else class="text-2xl my-3">{{ post.title }}</h2>
            <p v-if="post.isHero" class="my-3">{{ post.blogPost }}</p>
            <p class="my-3" v-else>{{ post.blogHTML }}</p>
            <button v-if="post.isHero" class="border-b link w-[12rem]" @click="openModal">
                Sign In <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>
            <router-link v-else to="#" class="border-b link w-[12rem]">
                View Post
            </router-link>
        </div>
        <div class="col order-first md:order-last">
            <img v-if="post.isHero" :src="getImageUrl">
            <img v-else :src="getImageUrl" class="w-full">
        </div>
    </div>
    <hr class="hidden md:block" />
</template>