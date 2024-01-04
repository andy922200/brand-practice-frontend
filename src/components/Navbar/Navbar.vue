<template>
  <nav class="p-1 h-15 flex flex-wrap justify-between items-center bg-green">
    <div></div>
    <HamburgerIcon
      :is-open="isHamburgerIconOpen"
      class="z-4"
      @click="toggleMenu"
    />

    <Teleport to="body">
      <Overlay
        v-if="isHamburgerIconOpen"
        @click="toggleMenu"
      />
      <Transition name="drawer-content">
        <Menu v-if="isHamburgerIconOpen" />
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'
import Overlay from './Overlay.vue'
import HamburgerIcon from '@/components/Icon/Hamburger.vue'

const isHamburgerIconOpen = ref(false)

const toggleMenu = () => {
  isHamburgerIconOpen.value = !isHamburgerIconOpen.value
}
</script>

<style scoped>
.drawer-content-enter-from,
.drawer-content-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.drawer-content-enter-to,
.drawer-content-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.drawer-content-enter-active,
.drawer-content-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
</style>
