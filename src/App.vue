<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Overlay from "./components/Overlay.vue";
import LoginModal from "./components/LoginModal.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import {mapActions, mapState} from "pinia";
import {useUserStore} from "./store/userStore.js";

export default {
  name: "app",
  components: {LoadingScreen, Navigation, Footer, Overlay, LoginModal},
  mounted() {
    if (this.userData && Object.keys(this.userData).length === 0 && Object.getPrototypeOf(this.userData) === Object.prototype) {
      return null
    }
    this.getData()
  },
  data() {
    return {
      nightMode: null,
    }
  },
  methods: {
    ...mapActions(useUserStore, ['getData']),
    toggleTheme() {
      this.nightMode = !this.nightMode
    },
  },
  computed: {
    ...mapState(useUserStore, ['userData'])
  }
}
</script>

<template>
  <div class="app transition-colors ease-in-out" :class="{ dark : nightMode }">
    <Overlay />
    <LoginModal />
    <LoadingScreen />
    <Navigation @change-theme="toggleTheme"/>
    <router-view />
    <Footer />
  </div>
</template>
