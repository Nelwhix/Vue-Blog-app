<script setup>
import { ref, onMounted } from 'vue'
import axios from '../lib/axios';

const props = defineProps(['id'])
const currentPost = ref(null)

onMounted(() => {
    axios.get('/posts/' + props.id)
        .then(response => {
           currentPost.value = response.data.post
        })
        .catch(error => {
                console.log(error)
        })
})
</script>

<template>
    <main v-if="currentPost" class="py-10 px-7 dark:bg-gray-800 dark:text-white">
        <h1 class="text-2xl font-bold font-body mb-10">{{ currentPost.blogTitle}}</h1>
        <img class="rounded-md" :src="currentPost.coverPhotoURL" :alt="currentPost.coverPhotoName">
        <p class="font-body mt-10" v-html="currentPost.blogHTML"></p>
    </main>
</template>