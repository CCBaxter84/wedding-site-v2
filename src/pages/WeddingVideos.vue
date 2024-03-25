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
import { onMounted, Ref, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Link } from '@/types'
import { ApiPaths } from '@/types/enums'
import { getPhotoAlbum } from '@/controllers'
import { useFetch } from '@/composables/useFetch'

const videos: Ref<Link[]|null> = ref(null)
const { isLoading, fetchDecorator, error } = useFetch()
const route = useRoute()
const path = computed(() => route.path)

async function setVideos() {
  videos.value = await getPhotoAlbum(path.value as ApiPaths)
}

onMounted(async () => {
  await fetchDecorator(setVideos)
})
</script>