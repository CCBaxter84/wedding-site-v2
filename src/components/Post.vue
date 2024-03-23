<template>
  <PhotoContainer>
    <h2>{{ source.title }}</h2>
    <img :src="source.url" :alt="source.description">
    <p  style="padding: 0 2rem;">{{ source.text }}</p>
  </PhotoContainer>
</template>

<script setup lang="ts">
import PhotoContainer from './PhotoContainer.vue'

defineProps(['source'])
</script>