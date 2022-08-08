<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'

export default {
  name: "Register",
  mounted() {

  },
  data () {
    return {
      v$: useVuelidate(),
      fullName: '',
      userName: '',
      email: '',
      password: {
        password: '',
        confirmPassword: '',
      }
    }
  },
  validations() {
    return {
      fullName: {
        required: helpers.withMessage('This field is required', required)
      },
      userName: {
        required: helpers.withMessage('This field is required', required)
      },
      email: {
        required: helpers.withMessage('This field is required', required),
        email: helpers.withMessage('Input a valid E-mail', email)
      },
      password: {
        password: {
          required: helpers.withMessage('This field is required', required),
          minLength: helpers.withMessage('Password must be longer than 6 characters', minLength(6))
        },
        confirmPassword: {
          required: helpers.withMessage('This field is required', required),
          sameAs: helpers.withMessage("Passwords don't match", sameAs(this.password.password)),
        }
      }
    }
  },
  methods: {
    signUp() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert('Form submitted successfully')
      } else {
        alert('Form invalid')
      }
    }
  }
}
</script>

<template>
  <div class="bg-white fixed h-4/5 w-[90vw] top-[15%] mx-[2.5vw] rounded-md p-5 font-header z-50 hidden">
    <h1 class="text-center text-xl font-semibold">Sign Up</h1>
    <form action="" class="mt-5" @submit.prevent="signUp">
      <div class="my-2">
        <input v-model="fullName" type="text" placeholder="Full Name" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.fullName.$error" class="text-red-400 text-xs">{{ v$.fullName.$errors[0].$message}}</span>
      </div>
      <div class="my-3">
        <input v-model="email" type="email" placeholder="E-mail" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.email.$error" class="text-xs text-red-400">{{ v$.email.$errors[0].$message }}</span>
      </div>
      <div class="my-3">
        <input v-model="userName" type="text" placeholder="Username" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.userName.$error" class="text-xs text-red-400">{{ v$.userName.$errors[0].$message }}</span>
      </div>
      <div class="my-3">
        <input v-model="password.password" type="password" placeholder="Password" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.password.password.$error" class="text-xs text-red-400">{{ v$.password.password.$errors[0].$message }}</span>
      </div>
      <div class="my-3">
        <input v-model="password.confirmPassword" type="password" placeholder="Confirm Password" class="w-full border border-gray-300 rounded-lg pl-3 py-2">
        <span v-if="v$.password.confirmPassword.$error" class="text-xs text-red-400">{{ v$.password.confirmPassword.$errors[0].$message }}</span>
      </div>
      <div class="my-3">
        <button type="submit" class="transition-colors bg-gray-800 px-2 py-1 text-white rounded-full hover:text-teal-300">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

