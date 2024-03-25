<template>
  <AlbumContainer :isLoading="isLoading"
                  :error="error">
    <h1>Wedding Videos</h1>
    <template  v-for="link in links">
      <h2>{{ link.description }}</h2>
      <EmbeddedVideo  :video="link"
                      style="margin-bottom: 5rem;"/>
    </template>
  </AlbumContainer>
</template>

<script setup lang="ts">
import { useFetch, useFetchLinksOnMount } from '@/composables'
import AlbumContainer from '@/components/AlbumContainer.vue'
import EmbeddedVideo from '@/components/EmbeddedVideo.vue'

const { isLoading, error } = useFetch()
const { links } = useFetchLinksOnMount()
</script>