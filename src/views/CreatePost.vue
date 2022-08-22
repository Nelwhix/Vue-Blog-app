<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  name: "CreatePost",
  data() {
    return {
    }
  },
  components: {
    QuillEditor
  }
}
</script>

<template>
  <section class="my-5">
    <div>
      <input type="text" placeholder="Enter Blog Title" v-model="blogTitle">
      <div>
        <label for="blogPhoto">Upload Cover Photo</label>
        <input type="file" ref="blogPhoto" accept=".png, .jpg, .jpeg" />
        <button>Preview Photo</button>
        <span>File chosen: </span>
      </div>
      <QuillEditor theme="snow" toolbar="full"/>
    </div>
    <div>
      <button>Publish Post</button>
      <router-link to="#" class="link">Post Preview</router-link>
    </div>
  </section>
</template>

