<template>
  <PhotoAlbum>
    <h2>{{ source.title }}</h2>
    <img :src="source.url" :alt="source.description">
    <p  style="padding: 0 2rem;">{{ source.text }}</p>
  </PhotoAlbum>
</template>

<script setup lang="ts">
import PhotoAlbum from './PhotoAlbum.vue'

defineProps(['source'])
</script>