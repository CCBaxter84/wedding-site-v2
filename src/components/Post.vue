<template>
  <article>
    <h2>{{ source.title }}</h2>
    <img :src="source.url" :alt="source.description">
  </article>
</template>

<script setup lang="ts">
defineProps(['source'])
</script>

<style scoped>

</style>