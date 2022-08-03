<script>
import { mapState } from 'pinia'
import { useBlogStore } from '../store/blogStore'
import BlogCard from "../components/BlogCard.vue";

export default {
    name: 'blogs',
    components: {
      BlogCard
    },
    computed: {
        ...mapState(useBlogStore, ['sampleBlogCards'])
    },
}
</script>

<template>
  <div>
    <div>
      <span>Toggle Editing Post</span>
      <input type="checkbox" v-model="editPost">
    </div>
    <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
  </div>
</template>
