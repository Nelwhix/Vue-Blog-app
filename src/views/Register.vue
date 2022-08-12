<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
import { useUserStore } from "../store/userStore.js";
import { mapActions } from 'pinia'

export default {
  name: "Register",
  data() {
    return {
      v$: useVuelidate(),
      form: {
        fullName: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  validations() {
    return {
      form: {
        fullName: {
          required: helpers.withMessage('This field is required', required)
        },
        email: {
          required: helpers.withMessage('This field is required', required),
          email: helpers.withMessage('Input a valid E-mail', email)
        },
        password: {
            required: helpers.withMessage('This field is required', required),
            minLength: helpers.withMessage('Password must be longer than 6 characters', minLength(6))
        },
        password_confirmation: {
            required: helpers.withMessage('This field is required', required),
            sameAs: helpers.withMessage("Passwords don't match", sameAs(this.form.password)),
        },
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ['register']),
    async signUp() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.register(this.form)
      }
    }
  }
}
</script>

<template>
  <div class="bg-gray-200 p-5 font-header">
    <h1 class="text-center text-xl font-semibold">Sign Up</h1>
    <form action="" class="mt-5" @submit.prevent="signUp">
      <div class="my-2">
        <input v-model="form.fullName" type="text" placeholder="Full Name" class="w-full border border-gray-300 dark:border-0 rounded-lg pl-3 py-2">
        <span v-if="v$.form.fullName.$error" class="text-red-400 text-xs">{{ v$.form.fullName.$errors[0].$message}}</span>
      </div>
      <div class="my-3">
        <input v-model="form.email" type="email" placeholder="E-mail" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.form.email.$error" class="text-xs text-red-400">{{ v$.form.email.$errors[0].$message }}</span>
      </div>
      <div class="my-3">
        <input v-model="form.password" type="password" placeholder="Password" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.form.password.$error" class="text-xs text-red-400">{{ v$.form.password.$errors[0].$message }}</span>
      </div>
      <div class="my-3">
        <input v-model="form.password_confirmation" type="password" placeholder="Confirm Password" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.form.password_confirmation.$error" class="text-xs text-red-400">{{ v$.form.password_confirmation.$errors[0].$message }}</span>
      </div>
      <div class="my-3">
        <button type="submit" class="transition-colors bg-gray-800 px-2 py-1 text-white rounded-full hover:text-teal-300">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

