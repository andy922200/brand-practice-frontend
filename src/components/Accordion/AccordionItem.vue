<template>
  <div
    class="cursor-pointer px-4 bg-gray"
    :class="{ expandable: item.children, expanded: isExpanded }"
    @click.stop="toggle(item)"
  >
    <span
      class="block px-1 py-4 text-sm"
      :style="{ color: isExpanded ? 'yellow' : '' }"
      >{{ item.text }}</span
    >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'
import { IAccordionItem } from './Accordion.vue'

const emits = defineEmits(['update-expand-key'])
const { item, isExpanded } = defineProps({
  item: {
    type: Object as PropType<IAccordionItem>,
    required: true,
    default: () => {},
  },
  isExpanded: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const toggle = (item: IAccordionItem) => {
  emits('update-expand-key', item.key)
}
</script>
