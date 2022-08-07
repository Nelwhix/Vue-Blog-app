<script>
import { mapState } from 'pinia'
import { useBlogStore } from '../store/blogStore'
import BlogCard from "../components/BlogCard.vue";

export default {
    name: 'blogs',
    components: {
      BlogCard
    },
    data() {
      return {
        iconSwitch: false
      }
    },
    computed: {
        ...mapState(useBlogStore, ['sampleBlogCards'])
    },
    methods: {
      editMode() {
        this.iconSwitch = !this.iconSwitch

      }
    }
}
</script>

<template>
  <div>
    <div class="mx-2 py-3 flex justify-end gap-2">
      <span>Toggle Editing Post</span>
      <div class="rounded-full border-[0.5px] border-gray-400 bg-gray-200 w-12 h-6">
        <button class="transition-all bg-gray-800 w-6 h-6 rounded-full" :class="{ 'translate-x-6': iconSwitch }" @click="editMode">
        </button>
      </div>
    </div>
    <div class="bg-gray-200 p-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 font-header">
        <BlogCard v-for="(post, index) in sampleBlogCards" :key="index" :post="post"/>
      </div>
    </div>
  </div>
</template>
