<template>
  <div class="h-screen bg-gray">
    <Navbar />
    <div class="flex flex-wrap h-[calc(100%-3.75rem)] justify-center items-center">
      <TicTacToeGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
import TicTacToeGrid from './components/TicTacToeGrid.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
</script>
