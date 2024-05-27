<template>
  <PhotoContainer>
    <img  :src="source.url" 
          @click="redirectToPhoto(source.url, index)">
  </PhotoContainer>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import PhotoContainer from './PhotoContainer.vue'
import { Link } from '@/types'
import { useLastPhotoCache } from '@/composables'

defineProps({
  index: {
    type: Number,
    required: true
  },
  source: {
    type: Object as PropType<Link>,
    required: true
  }
})

const { redirectToPhoto } = useLastPhotoCache()
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>