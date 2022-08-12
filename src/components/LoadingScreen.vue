<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { useUserStore } from "../store/userStore.js";
import { mapState } from "pinia";

export default {
  name: "LoadingScreen",
  data() {
    return {
      fullPage: true
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapState(useUserStore, ['isLoading'])
  }
}
</script>

<template>
  <div class="vld-parent">
    <loading v-model:active="isLoading" :is-full-page="fullPage">

    </loading>
  </div>
</template>