<script setup>
import { useBlogStore } from '../store/blogStore';

const blogStore = useBlogStore()
const props = defineProps(['ID', 'show'])
const emit = defineEmits(['close-me'])

const deletePost = () => {
    blogStore.deletePost(props.ID)
    emit('close-me')
}
</script>

<template>
    <div v-if="props.show" class="bg-white dark:bg-gray-800 dark:text-white fixed rounded-md p-5 font-header z-50 top-40 w-[80%] sm:w-[60%] md:w-[40%] mx-[10%] sm:mx-[20%] md:mx-[30%]">
        <div>
            <h1 class="text-center text-xl font-semibold">Are you sure you want to delete this post?</h1>
            <div class="flex mt-20 justify-between mx-6">
                <button @click="deletePost" class="text-white bg-red-600 hover:bg-red-700 rounded-md px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mb-1 h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                    Delete
                </button>
                <button @click="$emit('close-me')" class="bg-gray-400 hover:bg-gray-500 rounded-md px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline mb-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>