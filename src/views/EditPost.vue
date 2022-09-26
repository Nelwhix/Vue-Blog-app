<script>
    import { Quill, QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import { useBlogStore } from "../store/blogStore.js";
    import { mapWritableState } from "pinia";
    import Overlay from "../components/Overlay.vue";
    import blogCoverPreview from '../components/blogCoverPreview.vue';
    import {mapActions} from "pinia";
    import ImageUploader from 'quill-image-uploader';
    import axios from '../lib/axios';
    import { useUserStore } from "../store/userStore.js"
    import { onMounted, ref } from "vue"
    
    
    export default {
      name: "EditPost",
      components: {
        QuillEditor, Overlay, blogCoverPreview
      },
      props: ['id'],
      setup: (props) => {
        const currentPost = ref(null)

        onMounted(() => {
            axios.get('/posts/' + props.id)
                .then(response => {
                    currentPost.value = response.data.post
                })
                .catch(error => {
                    console.log(error)
                })
        });


        const blogStore = useBlogStore()

         return { currentPost, submitPost}
      }
    }
    </script>
    
    <template>
      <section v-if="currentPost" class="my-5 p-3 font-body md:px-10">
        <blogCoverPreview :class="{ 'hidden': previewMode }"/>
        <Overlay />
        <div>
          <input type="text" v-model="currentPost.blogTitle" placeholder="Enter Blog Title" class="mb-4 pl-2 focus:outline-0 border-b border-black">
          <div class="mb-4">
            <label for="blogPhoto" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Upload Cover Photo</label>
            <input type="file" id="blogPhoto" @change="fileChange" ref="blogPhoto" accept=".png, .jpg, .jpeg" class="mb-3 pl-2 focus:outline-0 border-b border-black hidden"/>
            <button type="button" class="rounded-full bg-zinc-800 text-white p-2 text-sm mt-2 mr-5 hover:opacity-70 disabled:opacity-50" ref="previewbtn" @click="showPreviewMenu" disabled>Preview Photo</button>
            <span>File Chosen: {{ blogPhotoName }}</span>
          </div>
          <QuillEditor 
              v-model:content="currentPost.blogHTML"
              contentType="html"
              toolbar="full"
          />
        </div>
        <div class="mt-5">
          <button @click="submitPost" class="rounded-full bg-zinc-800 text-white p-2 text-sm mr-5 hover:opacity-70">Publish Post</button>
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
    