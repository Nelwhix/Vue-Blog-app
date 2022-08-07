<script>
export default {
  name: "Overlay",
  props: ['activate'],
  emits: ['deactivate']
}
</script>

<template>
  <div @click="$emit('deactivate')" class="fixed bg-gray-800 opacity-50 h-screen w-full" :class="{ 'hidden': activate }">

  </div>
</template>

