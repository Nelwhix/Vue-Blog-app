<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue';
import { mapState } from 'pinia';
import { useBlogStore } from '../store/blogStore.js';

export default {
    name: "home",
    components: { BlogPost, BlogCard },
    data() {
        return {
            heroSection: {
                title: "WELCOME to my Blog!",
                blogPost:
                    "I could have used Wordpress, but I did oversabi and built this with Vue, Tailwind and a Laravel API. Sign In so you get notified for new posts 😁 ",
                isHero: true,
                coverImg: "personcoding"
            },
        }
    },
    computed: {
        ...mapState(useBlogStore, ['blogPosts']),
    } 
};
</script>

<template>
    <div class="font-body">
        <div class="hero-wrapper">
            <BlogPost :post="heroSection"/>
            <BlogPost v-for="(post, index) in blogPosts.slice(1,3)" :key="index" :post="post"/>
        </div>
        <div class="bg-gray-200 p-8">
            <h3 class="font-header font-medium">View more recent posts</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10 font-header">
                <BlogCard v-for="(post, index) in blogPosts" :key="index" :post="post"/>
            </div>
        </div>
        <div>
            <div class="flex flex-col md:flex-row md:justify-around md:align-middle p-5">
                <h2 class="md:p-2 md:mt-3">NEVER MISS A POST, REGISTER FOR YOUR FREE ACCOUNT TODAY!</h2>
                <router-link :to="{ name: 'Register' }" class="text-white bg-gray-900 rounded-full w-24 p-2 my-3 hover:bg-gray-300 hover:text-gray-900 text-center">Register!</router-link>
            </div>
        </div>
    </div>
</template>
