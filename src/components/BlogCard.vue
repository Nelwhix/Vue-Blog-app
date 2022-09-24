<script>
import { mapWritableState } from "pinia";
import { useBlogStore } from "../store/blogStore.js";

export default {
    name: "BlogCard",
    props: ["post"],
    computed: {
        ...mapWritableState(useBlogStore, ["editMode"]),
        formattedDate() {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const serverDate = new Date(this.post.created_at);
            const formattedDate = months[serverDate.getMonth()] + " " + serverDate.getDay() + ", " + serverDate.getFullYear();
            return formattedDate;
        }
    },
}
</script>
<template>
    <div>
        <div class="transition-transform ease-in-out card hover:-rotate-1 dark:bg-gray-800 dark:text-white">
            <img :src="post.coverPhotoURL" alt="" class="h-48 rounded-t-sm w-full bg-cover">
            <div class="absolute flex gap-3 top-2 right-1 dark:text-black" :class="{ 'hidden': editMode }">
                <button @click="$emit('edit-post', post.id)" class="bg-white rounded-full p-1 hover:bg-gray-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button @click="$emit('delete-post', post.id)" class="bg-white rounded-full p-1 hover:bg-gray-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="p-5">
                <h3 class="text-md">{{ post.blogTitle }}</h3>
                <p class="my-1 text-sm">{{ formattedDate }}</p>
                <router-link class="link" :to="{ name: 'PostView', params: { id: post.id }}">
                    VIEW THE POST <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>