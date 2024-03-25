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
import { Titles, ApiPaths } from '@/types/enums'
import { RouteLink } from '@/types/classes';
import StyledRoute from './StyledRoute.vue'
import StyledDropdown from './StyledDropdown.vue'

const options = [
  new RouteLink(ApiPaths.gettingReady, Titles.gettingReady),
  new RouteLink(ApiPaths.couple, Titles.couple),
  new RouteLink(ApiPaths.ceremony, Titles.ceremony)
]
</script>

<style scoped>
header {
  padding: 2rem 2rem 0 2rem;
}
</style>