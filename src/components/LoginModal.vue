<script>
import useVuelidate from '@vuelidate/core';
import {required, helpers, minLength, email} from '@vuelidate/validators';
import {decodeCredential, GoogleLogin} from "vue3-google-login";
import {mapActions, mapWritableState} from "pinia";
import { useBlogStore } from "../store/blogStore.js";
import { useUserStore } from "../store/userStore.js";

export default {
  name: "LoginModal",
  components: { GoogleLogin },
  data () {
    return {
      v$: useVuelidate(),
      form: {
        email: '',
        password: '',
      },
      serverErrors: {}
    }
  },
  validations() {
    return {
      form: {
        email: {
          required: helpers.withMessage('This field is required', required),
          email: helpers.withMessage('Please input a valid E-mail', email),
        },
        password: {
          required: helpers.withMessage('This field is required', required),
          minLength: helpers.withMessage('Password must be longer than 6 characters', minLength(6))
        },
      },
    }
  },
  methods: {
    ...mapActions(useUserStore, ['login']),
    signIn() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.login(this.form, this.serverErrors)
      }
    },
    gSignIn(res) {
      const userData = decodeCredential(res.credential)
    },
    closeModal() {
      this.signInMode = true
      this.overlayMode = true
    }
  },
  computed: {
    ...mapWritableState(useBlogStore, ['signInMode', 'overlayMode'])
  }
}
</script>

<template>
  <div class="bg-white dark:bg-gray-800 dark:text-white fixed h-3/5 w-[90vw] sm:w-3/5 sm:mx-[20vw] top-[15%] mx-[2.5vw] rounded-md p-5 font-header z-50" :class="{ hidden: signInMode}">
    <div class="relative">
      <h1 class="text-center text-xl font-semibold">Sign In</h1>
      <button class="absolute top-0 right-0 hover:text-teal-300 dark:hover:text-teal-300" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <form action="" class="mt-5 text-black" @submit.prevent="signIn">
      <div class="my-3">
        <input v-model="form.email" type="email" placeholder="E-mail" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.form.email.$error" class="text-xs text-red-400">{{ v$.form.email.$errors[0].$message }}</span>
      </div>
      <div class="my-3">
        <input v-model="form.password" type="password" placeholder="Password" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.form.password.$error" class="text-xs text-red-400">{{ v$.form.password.$errors[0].$message }}</span>
      </div>
      <div class="my-3 flex justify-between">
        <button type="submit" class="transition-colors bg-gray-800 px-2 py-1 text-white rounded-full hover:text-teal-300">
          Sign In
        </button>
        <router-link :to="{ name: 'Register' }" class="text-sm underline mt-2 hover:text-teal-300 dark:text-white dark:hover:text-teal-300">Create an account</router-link>
      </div>
      <div class="text-center">
        <h2 class="mb-3 dark:text-white">OR:</h2>
        <GoogleLogin :callback="gSignIn"/>
      </div>
    </form>
  </div>
</template>

