<script>
import { mapWritableState } from "pinia";
import { useBlogStore } from "../store/blogStore.js";

export default {
    name: 'navigation',
    emits: ['change-theme', 'activate-overlay'],
    data() {
        return {
            iconSwitch: true,
        };
    },
    methods: {
        toggleNav() {
            this.mobileNav = false
            this.overlayMode = false
        },
        iconToggle() {
            this.iconSwitch = !this.iconSwitch
            this.$emit('change-theme')
        },
        openModal() {
          if (!this.mobileNav) {
            this.mobileNav = true
          }
          this.signInMode = false
          this.overlayMode = false
        }
    },
    computed: {
      ...mapWritableState(useBlogStore, ['signInMode', 'overlayMode', 'mobileNav'])
    }
};
</script>

<template>
    <header class="bg-white font-header dark:bg-gray-900 dark:text-white">
        <nav class="flex px-5 py-5 justify-between shadow-sm">
            <div>
                <router-link class="font-bold text-2xl" :to="{ name: 'home'}">NelsonIsioma.me</router-link>
            </div>
            <div class="nav-links">
                <ul class="hidden md:flex gap-2">
                    <router-link class="link" to="/">Home</router-link>
                    <router-link class="link" to="/blogs">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <button class="link" @click="openModal">Sign In</button>
                </ul>
            </div>
            <div class="hidden md:block transition-all rounded-full border-[0.5px] hover:border border-gray-400 bg-gray-200 w-12 h-6" @click="iconToggle">
                <button v-if="iconSwitch" class="bg-white p-[1px] rounded-full text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button v-else class="bg-gray-800 p-[1px] rounded-full text-white translate-x-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </button>
            </div>
            <button @click="toggleNav" class="hover:text-teal-200 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>
        </nav>
         <div class="transition-transform duration-500 absolute inset-y-0 h-screen bg-white dark:bg-gray-800 w-[50vw] z-50 md:hidden" :class="{ '-translate-x-[70vw]': mobileNav }">
            <ul class="flex gap-5 flex-col text-black dark:text-white p-5 text-end mt-10">
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/blogs">Blogs</router-link>
                <router-link class="link" to="#">Create Post</router-link>
                <a class="link" @click="openModal" href="#">Sign In</a>
                <div class="rounded-full border-[0.5px] hover:border border-gray-400 bg-gray-200 w-12 h-6 ml-28 text-start" @click="iconToggle">
                    <button v-if="iconSwitch" class="bg-white text-black p-[1px] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button v-else class="bg-gray-800 p-[1px] rounded-full text-white translate-x-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </button>
                </div>
            </ul>
        </div>
    </header>
</template>