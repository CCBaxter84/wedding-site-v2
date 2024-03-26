<template>
  <PhotoContainer>
    <h2>{{ source.title }}</h2>
    <p>{{ source.text }}</p>
    <img :src="source.url" :alt="source.description">
  </PhotoContainer>
</template>

<script setup lang="ts">
import PhotoContainer from './PhotoContainer.vue'

defineProps(['source'])
</script>

<style scoped>
p {
  padding: 0 2rem;
}
@media screen and (max-width: 1025px) {
  p {
    padding: 0;
  }
}
</style>