<template>
  <div
    class="hamburger bg-gray rounded p-2 @hover:cursor-pointer"
    :class="isOpen ? 'is-active' : ''"
  >
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  isOpen: {
    required: true,
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.hamburger .line {
  width: 2rem;
  height: 0.25rem;
  background-color: #000;
  display: block;
  margin: 0.25rem auto;
  transition: all 0.3s ease-in-out;
}

.hamburger.is-active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active .line:nth-child(1) {
  transform: translateY(0.5rem) rotate(45deg);
}

.hamburger.is-active .line:nth-child(3) {
  transform: translateY(-0.5rem) rotate(-45deg);
}
</style>
