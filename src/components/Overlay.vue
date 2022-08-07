<script>
import { mapWritableState } from "pinia";
import { useBlogStore } from "../store/blogStore.js";

export default {
  name: "Overlay",
  computed: {
    ...mapWritableState(useBlogStore, ['overlayMode', 'signInMode', 'mobileNav'])
  },
  methods: {
    closeModal() {
      if (!this.signInMode) {
        this.signInMode = true
      }
      if (!this.mobileNav) {
        this.mobileNav = true
      }
      this.overlayMode = true
    }
  }
}
</script>

<template>
  <div class="fixed bg-gray-800 opacity-50 h-screen w-full z-30" :class="{ 'hidden': overlayMode }" @click="closeModal"></div>
</template>

