<script setup>
import { useBlogStore } from '../store/blogStore';

const blogStore = useBlogStore()

const closeModal = () => {
  blogStore.overlayMode = false
}

</script>

<template>
  <div v-if="blogStore.overlayMode" class="fixed bg-gray-800 opacity-50 h-screen w-full z-30" @click="closeModal"></div>
</template>

