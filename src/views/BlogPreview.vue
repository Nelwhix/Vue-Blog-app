<script>
import {useBlogStore} from "../store/blogStore.js";
import {mapState} from "pinia";

export default {
  name: "BlogPreview",
  computed: {
    ...mapState(useBlogStore, ['blogHTML', 'blogPhotoUrl', 'blogTitle'])
  },
}
</script>

<template>
  <section>
    <h2>{{ this.blogTitle }}</h2>
    <img class="w-[20%]" :src="blogPhotoUrl" alt="blogcoverphoto">
    <div class="post-content ql-editor" v-html="blogHTML"></div>
  </section>
</template>

