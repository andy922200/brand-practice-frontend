<template>
  <div
    class="fixed w-1/2 lg:w-1/3 h-full top-0 right-0 z-2 bg-black text-white pt-15 bg-opacity-75"
  >
    <Accordion :items="items" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Accordion from '@/components/Accordion/Accordion.vue'
import demoPages from './demoPages';

const items = ref(demoPages)
</script>
