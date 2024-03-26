<template>
  <PhotoContainer>
    <img  :src="source.url" 
          :alt="source.description">
  </PhotoContainer>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import PhotoContainer from './PhotoContainer.vue'
import { Link } from '@/types'

defineProps({
  source: {
    type: Object as PropType<Link>,
    required: true
  }
})
</script>