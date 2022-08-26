<script>
import { useBlogStore } from "../store/blogStore.js";
import { mapWritableState } from "pinia";

export default {
  name: "BlogCoverPreview",
  computed: {
    ...mapWritableState(useBlogStore, ['previewMode', 'overlayMode', 'blogPhotoUrl'])
  },
  methods: {
    removePrevMenu() {
      this.previewMode = true
      this.overlayMode = true
    }
  }
}
</script>

<template>
  <div class="z-50 rounded-md absolute top-40 left-[20vw] bg-gray-100 shadow-md w-3/5 h-3/5">
    <button @click="removePrevMenu" class="absolute top-2 right-2 hover:text-teal-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
    <div class="m-5">
      <img :src="blogPhotoUrl" class="object-scale-down"/>
    </div>
  </div>
</template>

