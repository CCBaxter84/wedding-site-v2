<template>
  <header class="flex justify-content-center">
    <StyledRoute  :name="Titles.home" 
                  to="/"/>
    <StyledRoute  :name="Titles.ourStory"
                  to="/our-story"/>
    <StyledRoute  :name="Titles.engagement"
                  :to="ApiPaths.engagement"/>
    <StyledDropdown :options="options"
                    :title="Titles.photos"/>
    <StyledRoute  :name="Titles.videos"
                  to="/"/>
  </header>
</template>

<script setup lang="ts">
import { Titles, ApiPaths } from '@/types/enums';
import StyledRoute from './StyledRoute.vue'
import StyledDropdown from './StyledDropdown.vue'

const options = [
  {
    to: ApiPaths.gettingReady,
    name: Titles.gettingReady
  },
  {
    to: ApiPaths.couple,
    name: Titles.couple
  }
]
</script>

<style scoped>
header {
  padding: 2rem 2rem 0 2rem;
}
</style>