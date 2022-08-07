<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Overlay from "./components/Overlay.vue";
import SignUpModal from "./components/SignUpModal.vue";
import LoginModal from "./components/LoginModal.vue";

export default {
  name: "app",
  components: { Navigation, Footer, Overlay, SignUpModal, LoginModal},
  data() {
    return {
      nightMode: null,
      overlayMode: true,
      mobileNav: true,
    }
  },
  methods: {
    toggleTheme() {
      this.nightMode = !this.nightMode
    },
    activateOverlay() {
      this.mobileNav = !this.mobileNav
      this.overlayMode = !this.overlayMode
    }
  }
}
</script>

<template>
  <div class="app transition-colors ease-in-out" :class="{ dark : nightMode }">
    <Overlay :activate="overlayMode" @deactivate="activateOverlay"/>
    <LoginModal />
    <Navigation @change-theme="toggleTheme" @activate-overlay="activateOverlay" :mobileNav="mobileNav"/>
    <router-view />
    <Footer />
  </div>
</template>
