<template>
  <PhotoContainer>
    <h2>{{ source.title }}</h2>
    <p  style="padding: 0 2rem;">{{ source.text }}</p>
    <img :src="source.url" :alt="source.description">
  </PhotoContainer>
</template>

<script setup lang="ts">
import PhotoContainer from './PhotoContainer.vue'

defineProps(['source'])
</script>