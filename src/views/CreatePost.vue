<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  name: "CreatePost",
  components: {
    QuillEditor
  },
  computed: {
    ...mapWritableState(useBlogStore, ['blogPhotoName', 'blogPhotoUrl', 'previewMode', 'overlayMode', 'blogHTML', 'blogTitle']),
  },
  methods: {
    ...mapActions(useBlogStore, ['publishPost']),
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0]
      this.fileName = this.file.name
      this.$refs.previewbtn.disabled = false
    }
  }
}
</script>

<template>
  <section class="my-5">
    <QuillEditor theme="snow" />
  </section>
</template>

<style>
  .ql-container {
    height: 50vh;
    overflow: scroll;
  }

  .serverErrorMessage {
    animation: dissappear 5s;
  }

  @keyframes dissappear {
    from {
      display:block;
    }
    to {
      display: none;
    }
  }
</style>
