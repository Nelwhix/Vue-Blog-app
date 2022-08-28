<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useBlogStore } from "../store/blogStore.js";
import { mapWritableState } from "pinia";
import BlogCoverPreview from "../components/BlogCoverPreview.vue";
import Overlay from "../components/Overlay.vue";
import BlotFormatter from 'quill-blot-formatter'
//import ImageUploader from 'quill-image-uploader'


export default {
  name: "CreatePost",
  data() {
    return {
      file: null,
      error: false,
      modules: {
        name: 'blotFormatter',
        module: BlotFormatter,
      }
    }
  },
  components: {
    QuillEditor, BlogCoverPreview, Overlay
  },
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0]
      this.blogPhotoName = this.file.name
      this.blogPhotoUrl = URL.createObjectURL(this.file)
      this.$refs.previewbtn.disabled = false
    },
    showPreviewMenu() {
      this.previewMode = false
      this.overlayMode = false
    },
    publishPost() {
      if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
        if (this.file) {

        }
        this.error = true;
        this.errorMsg = "Please ensure you uploaded a cover photo!"
        setTimeout(() => {
          this.error = false;
        }, 5000)
      }
      this.error = true;
      this.errorMsg = "Please ensure Blog Title & Blog Post has been filled!"
      setTimeout(() => {
        this.error = false;
      }, 5000)
    }
  },
  computed: {
    ...mapWritableState(useBlogStore, ['blogPhotoName', 'blogPhotoUrl', 'previewMode', 'overlayMode', 'blogHTML', 'blogTitle'])
  }
}
</script>

<template>
  <section class="my-5 p-3 font-body md:px-10">
    <BlogCoverPreview :class="{ 'hidden': previewMode }" />
    <Overlay />
    <div>
      <div v-if="error" class="rounded-md text-white pl-2 py-2 text-sm bg-zinc-800">
        Error: Please ensure Blog Title & Blog post has been filled
      </div>
      <input type="text" v-model="blogTitle" placeholder="Enter Blog Title" class="mb-4 pl-2 focus:outline-0 border-b border-black">
      <div class="mb-4">
        <label for="blogPhoto" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Upload Cover Photo</label>
        <input type="file" id="blogPhoto" @change="fileChange" ref="blogPhoto" accept=".png, .jpg, .jpeg" class="mb-3 pl-2 focus:outline-0 border-b border-black hidden"/>
        <button type="button" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70 disabled:opacity-50" ref="previewbtn" @click="showPreviewMenu" disabled>Preview Photo</button>
        <span>File Chosen: {{ blogPhotoName }}</span>
      </div>
      <QuillEditor :modules="modules" v-model:content="blogHTML" contentType="html" theme="snow" toolbar="full"/>
    </div>
    <div class="mt-5">
      <button @click="publishPost" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Publish Post</button>
      <router-link :to="{ name: 'BlogPreview' }" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Post Preview</router-link>
    </div>
  </section>
</template>

<style>
  .ql-container {
    height: 50vh;
    overflow: scroll;
  }
</style>

