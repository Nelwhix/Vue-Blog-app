<script>
import {useBlogStore} from "../store/blogStore.js";
import {mapState} from "pinia";

export default {
  name: "BlogPreview",
  computed: {
    ...mapState(useBlogStore, ['blogHTML', 'blogPhotoUrl', 'blogTitle'])
  },
  methods: {
    click() {
      console.log(this.blogHTML)
    }
  }
}
</script>

<template>
  <section>
    <img class="w-[20%]" :src="blogPhotoUrl" alt="blogcoverphoto">
    <div class="post-content ql-editor" v-html="blogHTML"></div>
    <button @click="click">Click me</button>
  </section>
</template>

