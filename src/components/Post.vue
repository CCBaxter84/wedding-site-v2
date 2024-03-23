<template>
  <article  class="flex-column align-items-center"
            style="margin-bottom: 5rem; padding: 0 2rem;">
    <h2>{{ source.title }}</h2>
    <img :src="source.url" :alt="source.description">
    <p  style="">{{ source.text }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps(['source'])
</script>