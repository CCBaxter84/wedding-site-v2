<template>
  <VirtualList  :dataSources="photos"
                :dataComponent="Photo"
                dataKey="url"
                style="max-height: 75vh; 
                  width: 100%;
                  overflow-y: auto; 
                  scrollbar-color: var(--primary) transparent;
                  scrollbar-width: thin"/>
</template>

<script setup lang="ts">
//@ts-ignore
import VirtualList from 'vue3-virtual-scroll-list'
import { type PropType } from 'vue'
import Photo from '@/components/Photo.vue'
import { Link } from '@/types'

defineProps({
  photos: {
    type: Array as PropType<Link[]>,
    required: true
  }
})
</script>