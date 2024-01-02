<template>
  <div>
    <div
      v-for="item in items"
      :key="`${item.key}-${item.text}`"
    >
      <AccordionItem
        :item="item"
        :is-expanded="currentExpandKey === item.key"
        @update-expand-key="updateExpandKey"
      >
        <Transition name="expand-content">
          <Accordion
            v-if="item.children && currentExpandKey === item.key"
            :items="item.children"
          />
        </Transition>
      </AccordionItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType, onMounted } from 'vue'
import AccordionItem from './AccordionItem.vue'

export interface IAccordionItem {
  key: string
  text: string
  children?: IAccordionItem[]
}

const { items } = defineProps({
  items: {
    type: Array as PropType<IAccordionItem[]>,
    required: true,
    default: () => {},
  },
  maxHeight: {
    type: String,
    required: false,
    default: '',
  },
})

const currentExpandKey = ref<string>('')
onMounted(() => {
  items.forEach((item) => {
    const value = localStorage.getItem(`accordion-${item.key}`) || ''
    if (value) {
      currentExpandKey.value = value
    } else {
      localStorage.setItem(`accordion-${item.key}`, '')
    }
  })
})

const updateExpandKey = (key: string) => {
  const previousKey = currentExpandKey.value
  currentExpandKey.value = currentExpandKey.value === key ? '' : key
  localStorage.setItem(`accordion-${key}`, currentExpandKey.value)

  if (previousKey) {
    localStorage.setItem(`accordion-${previousKey}`, '')
  }
}
</script>

<style scoped>
.expand-content-enter-from,
.expand-content-leave-to {
  max-height: 0;
  overflow: hidden;
}

.expand-content-enter-to,
.expand-content-leave-from {
  max-height: 100vh;
  overflow: hidden;
}

.expand-content-enter-active,
.expand-content-leave-active {
  transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
