<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  name: "CreatePost",
  components: {
    QuillEditor
  }
}
</script>

<template>
  <section class="my-5">
    <QuillEditor theme="snow" />
  </section>
</template>

