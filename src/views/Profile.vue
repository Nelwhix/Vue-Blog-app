<script>
import {mapState} from "pinia";
import {useUserStore} from "../store/userStore.js";

export default {
  name: "Profile",
  computed: {
    ...mapState(useUserStore, ['userData']),
    getUserInitials() {
      if (this.userData.name){
        let initialArray = this.userData.name.split(' ')
        return initialArray[0][0] + initialArray[1][0]
      }
    }
  }
}
</script>

<template>
  <section class="font-header my-5">
    <h1 class="text-center text-xl my-5">Account Settings</h1>
    <div class="mx-10 p-5 bg-gray-200 rounded-md grid justify-items-center">
      <div class="w-16 p-4 text-center bg-zinc-800 text-white text-xl rounded-full">
        {{ getUserInitials}}
      </div>
    </div>
  </section>
</template>

