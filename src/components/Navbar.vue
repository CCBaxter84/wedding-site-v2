<template>
  <header class="flex justify-content-center">
    <StyledRoute  name="Home" 
                  to="/"/>
    <StyledRoute  name="Our Story"
                  to="/our-story"/>
    <StyledRoute  name="Engagement Photos"
                  to="/engagement"/>
    <StyledDropdown :options="options"
                    title="Wedding Photos"/>
    <StyledRoute  name="Wedding Videos"
                  to="/"/>
  </header>
</template>

<script setup lang="ts">
import StyledRoute from './StyledRoute.vue'
import StyledDropdown from './StyledDropdown.vue'

const options = [
  {
    to: 'getting-ready',
    name: 'Getting Ready'
  }
]
</script>

<style scoped>
header {
  padding: 2rem 2rem 0 2rem;
}
</style>