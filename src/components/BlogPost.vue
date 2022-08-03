<script>
    export default {
        name: "BlogPost",
        props: ['post'],
    };
</script>

<template>
    <div class="grid md:grid-cols-2">
        <div class="grid col p-7 md:place-content-center bg-zinc-800 text-white">
            <h2 v-if="post.isHero" class="text-2xl my-3">{{ post.title }}</h2>
            <h2 v-else class="text-2xl my-3">{{ post.title }}</h2>
            <p v-if="post.isHero" class="my-3">{{ post.blogPost }}</p>
            <p class="my-3" v-else>{{ post.blogHTML }}</p>
            <router-link v-if="post.isHero" to="#" class="border-b link w-[12rem]">
                Login/Register <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </router-link>
            <router-link v-else to="#" class="border-b link w-[12rem]">
                View Post
            </router-link>
        </div>
        <div class="col order-first md:order-last">
            <img v-if="post.isHero" :src="`../src/assets/blogphotos/${post.coverImg}.jpg`" alt="" class="">
            <img v-else :src="`../src/assets/blogphotos/${post.blogImg}.jpg`" alt="" class="w-full">
        </div>
    </div>
    <hr class="hidden md:block" />
</template>