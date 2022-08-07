<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Overlay from "./components/Overlay.vue";
import LoginModal from "./components/LoginModal.vue";

export default {
  name: "app",
  components: { Navigation, Footer, Overlay, LoginModal},
  data() {
    return {
      nightMode: null,
    }
  },
  methods: {
    toggleTheme() {
      this.nightMode = !this.nightMode
    },
  }
}
</script>

<template>
  <div class="app transition-colors ease-in-out" :class="{ dark : nightMode }">
    <Overlay />
    <LoginModal />
    <Navigation @change-theme="toggleTheme"/>
    <router-view />
    <Footer />
  </div>
</template>
