<script>
import { mapState, mapWritableState } from 'pinia'
import { useBlogStore } from '../store/blogStore'
import BlogCard from "../components/BlogCard.vue";
import { useUserStore } from '../store/userStore';
import DeleteModal from '../components/DeleteModal.vue';
import { ref } from "vue";

export default {
    name: 'blogs',
    components: {
    BlogCard,
    DeleteModal
    },
    data() {
      return {
        iconSwitch: false,
      }
    },
    computed: {
        ...mapWritableState(useBlogStore, ['editMode', 'blogPosts']),
        ...mapState(useUserStore, ['isAdmin'])
    },
    methods: {
      edit() {
        this.iconSwitch = !this.iconSwitch
        this.editMode = !this.editMode
      }
    },
    setup() { 
      const currentPostID = ref(null)
      const modalShow = ref(false)

      const toggleDeleteModal = (id) => {
        currentPostID.value = id
        modalShow.value = !modalShow.value
      }

      return { modalShow, toggleDeleteModal, currentPostID }
    }
}
</script>

<template>
  <div>
    <DeleteModal :show="modalShow" :ID="currentPostID" @close-me="toggleDeleteModal"/>
    <div class="mx-2 py-3 flex justify-end gap-2" v-if="isAdmin">
      <span>Toggle Editing Post</span>
      <div class="rounded-full border-[0.5px] border-gray-400 bg-gray-200 w-12 h-6" @click="edit">
        <button class="transition-all bg-gray-800 w-6 h-6 rounded-full" :class="{ 'translate-x-6': iconSwitch }">
        </button>
      </div>
    </div>
    <div class="bg-gray-200 p-8" @click="clicked">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 font-header">
        <BlogCard v-for="(post, index) in blogPosts" :key="index" :post="post" @delete-post="toggleDeleteModal"/>
      </div>
    </div>
  </div>
</template>
