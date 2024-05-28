<template>
  <VirtualList  :dataSources="photos"
                :dataComponent="Photo"
                dataKey="url"
                ref="virtualList"
                style="max-height: 75vh; 
                  width: 100%;
                  overflow-y: auto; 
                  scrollbar-color: var(--primary) transparent;
                  scrollbar-width: thin"/>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted, 
  watch, toRefs, type PropType } from 'vue'
//@ts-ignore
import VirtualList from 'vue3-virtual-scroll-list'
import { Link } from '@/types'
const Photo = defineAsyncComponent(() => {
  return import('@/components/Photo.vue')
})

const props = defineProps({
  photos: {
    type: Array as PropType<Link[]>,
    required: true
  }
})
const { photos } = toRefs(props)
const virtualList = ref(null)

function scrollToTop() {
  //@ts-ignore
  virtualList.value?.scrollToIndex(0)
}

onMounted(() => {
  scrollToTop()
})
watch(photos, scrollToTop)
</script>