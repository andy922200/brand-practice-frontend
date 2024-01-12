<template>
  <div
    class="fixed w-1/2 lg:w-1/3 h-full top-0 right-0 z-3 bg-black text-white pt-15 bg-opacity-75"
  >
    <ul class="list-none p-0">
      <li
        v-for="item in menu"
        :key="item.key"
        class="cursor-pointer px-4 bg-gray overflow-hidden"
        :style="{
          display: isHidden(item) ? 'none' : 'block',
        }"
        @click="toggleItem(item)"
      >
        <span
          class="block px-1 py-4 text-sm"
          :style="{
            paddingLeft: `${item.level * 20}px`,
            color: isSelected(item) ? 'yellow' : '',
          }"
        >
          {{ item.text }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import demoPages from './demoPages'

interface ResMenuData {
  key: string
  text: string
  children?: ResMenuData[]
}

interface StackItem {
  item: ResMenuData
  level: number
  parentKey: string | null
}

interface MenuItem {
  key: string
  text: string
  level: number
  parentKey: string | null
}

const menu = ref<MenuItem[]>([])
const items = ref<ResMenuData[]>(demoPages)
const openItems = ref<Set<string | null>>(new Set())
const selectedItem = ref<Set<string | null>>(new Set())

const generateMenu = (data: ResMenuData[]) => {
  const stack: StackItem[] = data.map((item) => ({ item, level: 0, parentKey: null }))
  const menu: MenuItem[] = []

  while (stack.length > 0) {
    const poppedItem = stack.pop()

    if (!poppedItem) continue
    const { item, level, parentKey } = poppedItem

    const menuItem = { key: item.key, text: item.text, level: level, parentKey: parentKey }
    menu.push(menuItem)

    if (item.children && item.children.length > 0) {
      for (let i = item.children.length - 1; i >= 0; i--) {
        stack.push({ item: item.children[i], level: level + 1, parentKey: item.key })
      }
    }
  }

  return menu
}

const toggleItem = (item: MenuItem) => {
  selectedItem.value.clear()
  selectedItem.value.add(item.key)
  markParentItems(item.parentKey)

  if (item.level === 0) {
    menu.value
      .filter((i) => i.level === 0 && i.key !== item.key)
      .forEach((i) => {
        openItems.value.delete(i.key)
        closeChildren(i.key)
      })
  } else if (item.level > 0) {
    menu.value
      .filter((i) => i.level === item.level && i.parentKey === item.parentKey && i.key !== item.key)
      .forEach((i) => openItems.value.delete(i.key))
  }

  if (openItems.value.has(item.key)) {
    openItems.value.delete(item.key)
    closeChildren(item.key)
  } else {
    openItems.value.add(item.key)
  }

  localStorage.setItem('openItems', JSON.stringify(Array.from(openItems.value)))
  localStorage.setItem('selectedItem', JSON.stringify(Array.from(selectedItem.value)))
}

const markParentItems = (key: string | null) => {
  if (key) {
    selectedItem.value.add(key)
    const parentItem = menu.value.find((item) => item.key === key)
    if (parentItem) {
      markParentItems(parentItem.parentKey)
    }
  }
}

const closeChildren = (parentKey: string | null) => {
  const children = menu.value.filter((item) => item.parentKey === parentKey)
  children.forEach((child) => {
    openItems.value.delete(child.key)
    closeChildren(child.key)
  })
}

const isHidden = (item: MenuItem) => {
  return item.level !== 0 && !openItems.value.has(item.parentKey)
}

const isSelected = (item: MenuItem) => {
  return selectedItem.value.has(item.key)
}

onMounted(() => {
  const openItemsFromStorage = JSON.parse(localStorage.getItem('openItems') || '[]')
  if (openItemsFromStorage) {
    openItems.value = new Set(openItemsFromStorage)
  }
  const selectedItemFromStorage = JSON.parse(localStorage.getItem('selectedItem') || '[]')
  if (selectedItemFromStorage) {
    selectedItem.value = new Set(selectedItemFromStorage)
  }

  menu.value = generateMenu(items.value)
})
</script>
