<template>
  <header class="flex justify-content-center">
    <StyledRoute name="Home" />
    <StyledRoute name="Our Story" />
    <StyledRoute name="Engagement Photos" />
    <StyledRoute name="Wedding Videos" />
  </header>
</template>

<script setup lang="ts">
import StyledRoute from './StyledRoute.vue'
</script>

<style scoped>
header {
  padding: 2rem;
}
</style>