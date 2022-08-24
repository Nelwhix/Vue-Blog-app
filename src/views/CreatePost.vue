<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useBlogStore } from "../store/blogStore.js";
import { mapWritableState } from "pinia";
import BlogCoverPreview from "../components/BlogCoverPreview.vue";
import Overlay from "../components/Overlay.vue";
import Quill from "quill/quill.js";
import ImageUploader from "quill-image-uploader/src/quill.imageUploader"
Quill.register("modules/imageUploader", ImageUploader)

export default {
  name: "CreatePost",
  data() {
    return {
      file: null,
      fileName: null,
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
    }
  },
  computed: {
    ...mapWritableState(useBlogStore, ['blogPhotoName', 'blogPhotoUrl', 'previewMode', 'overlayMode'])
  }
}
</script>

<template>
  <section class="my-5 p-3 font-body md:px-10">
    <BlogCoverPreview :class="{ 'hidden': previewMode }" />
    <Overlay />
    <div>
      <input type="text" placeholder="Enter Blog Title" class="mb-4 pl-2 focus:outline-0 border-b border-black">
      <div class="mb-4">
        <label for="blogPhoto" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Upload Cover Photo</label>
        <input type="file" id="blogPhoto" @change="fileChange" ref="blogPhoto" accept=".png, .jpg, .jpeg" class="mb-3 pl-2 focus:outline-0 border-b border-black hidden"/>
        <button type="button" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70 disabled:opacity-50" ref="previewbtn" @click="showPreviewMenu" >Preview Photo</button>
        <span>File Chosen: {{ blogPhotoName }}</span>
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

