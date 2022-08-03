<script>
import HomeViewVue from './views/HomeView.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: "app",
  components: { Navigation, Footer },
  data() {
    return {
      nightMode: null
    }
  },
  mounted() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.nightMode = true
    } else {
      this.nightMode = false
    }
  },
  methods: {
    toggleTheme() {
      this.nightMode = !this.nightMode
    }
  }
}
</script>

<template>
  <div class="app transition-colors ease-in-out" :class="{ dark : nightMode }">
    <Navigation @change-theme="toggleTheme"/>
    <router-view />
    <Footer />
  </div>
</template>
