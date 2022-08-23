<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useBlogStore } from "../store/blogStore.js";

export default {
  name: "CreatePost",
  data() {
    return {
      file: null,
      fileName: null
    }
  },
  components: {
    QuillEditor
  },
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0]
      this.fileName = this.file.name
      this.$refs.previewbtn.disabled = false
    }
  }
}
</script>

<template>
  <section class="my-5 p-3 font-body md:px-10">
    <div>
      <input type="text" placeholder="Enter Blog Title" class="mb-4 pl-2 focus:outline-0 border-b border-black">
      <div class="mb-4">
        <label for="blogPhoto" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Upload Cover Photo</label>
        <input type="file" id="blogPhoto" @change="fileChange" ref="blogPhoto" accept=".png, .jpg, .jpeg" class="mb-3 pl-2 focus:outline-0 border-b border-black hidden"/>
        <button type="button" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70 disabled:opacity-50" ref="previewbtn" disabled>Preview Photo</button>
        <span>File Chosen: {{ fileName }}</span>
      </div>
      <QuillEditor theme="snow" toolbar="full"/>
    </div>
    <div class="mt-5">
      <button class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Publish Post</button>
      <router-link to="#" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Post Preview</router-link>
    </div>
  </section>
</template>

<style>
  .ql-container {
    height: 50vh;
    overflow: scroll;
  }
</style>

