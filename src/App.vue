<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Overlay from "./components/Overlay.vue";
import LoginModal from "./components/LoginModal.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

export default {
  name: "app",
  components: {LoadingScreen, Navigation, Footer, Overlay, LoginModal},
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
    <LoadingScreen />
    <Navigation @change-theme="toggleTheme"/>
    <router-view />
    <Footer />
  </div>
</template>
