<template>
  <AlbumContainer :isLoading="isLoading"
                  :error="error">
    <h1>{{ route.meta.title }}</h1>
    <Album  v-if="!!links"
            :photos="links"/>
  </AlbumContainer>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch, useFetchLinksOnMount } from '@/composables'
import AlbumContainer from '@/components/AlbumContainer.vue'
import Album from '@/components/Album.vue'

const route = useRoute()
const path = computed(() => route.path)
const { isLoading, error } = useFetch()
const { links, setLinks } = useFetchLinksOnMount()

watch(path, setLinks)
</script>