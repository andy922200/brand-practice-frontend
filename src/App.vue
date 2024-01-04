<template>
  <div class="h-screen bg-gray">
    <Navbar />
    <div class="h-[calc(100%-3.75rem)]">
      <div class="relative h-100% overflow-hidden">
        <div class="flex flex-wrap justify-center items-center h-100%">
          <TicTacToeGrid />
        </div>

        <Ball class="ball-top-left absolute moving-right-text z-1">0</Ball>
        <Ball class="ball-top-right absolute moving-right-text z-1">0</Ball>
        <Ball class="ball-bottom-left absolute moving-right-text z-1">0</Ball>
        <Ball class="ball-bottom-right absolute moving-right-text z-1">0</Ball>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Ball from './components/Ball.vue'
import TicTacToeGrid from './components/TicTacToeGrid.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
</script>

<style scoped>
.ball-top-left {
  top: calc(50% - 6.5rem);
  left: calc(((100vw / 3 - 1rem)) / 2 + 0.5rem);
  transform: translate(-50%, -50%);
}

.ball-top-right {
  top: calc(50% - 6.5rem);
  right: calc(((100vw / 3 - 1rem)) / 2 - 1rem);
  transform: translate(-50%, -50%);
}

.ball-bottom-left {
  top: calc(50% + 6.5rem);
  left: calc(((100vw / 3 - 1rem)) / 2 + 0.5rem);
  transform: translate(-50%, -50%);
}

.ball-bottom-right {
  top: calc(50% + 6.5rem);
  right: calc(((100vw / 3 - 1rem)) / 2 - 1rem);
  transform: translate(-50%, -50%);
}

@keyframes moveRight {
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(calc((200vw / 3 - 1rem)), -50%);
  }
}

.moving-right-text {
  animation: moveRight 1.5s infinite;
}
</style>
