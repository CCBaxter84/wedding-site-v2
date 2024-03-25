<template>
  <AlbumContainer :isLoading="isLoading"
                  :error="error">
    <h1>Wedding Videos</h1>
    <h2>videos go here</h2>
    <!-- <Album  v-if="!!photos"
            :photos="photos"/> -->
  </AlbumContainer>
</template>

<script setup lang="ts">
import { useFetch, useFetchLinksOnMount } from '@/composables'

const { isLoading, error } = useFetch()
const { links } = useFetchLinksOnMount()
console.log(links)
</script>