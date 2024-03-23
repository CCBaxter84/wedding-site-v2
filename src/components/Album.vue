<template>
  <VirtualList  :dataSources="photos"
                :dataComponent="Photo"
                dataKey="url"/>
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