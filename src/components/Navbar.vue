<template>
  <header class="flex justify-content-center">
    <StyledRoute  name="Home" 
                  to="/"/>
    <StyledRoute  name="Our Story"
                  to="our-story"/>
    <StyledRoute  name="Engagement Photos"
                  to="engagement-photos"/>
    <StyledRoute  name="Wedding Videos"
                  to="/"/>
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