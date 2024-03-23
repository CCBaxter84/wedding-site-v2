<template>
  <AlbumContainer :isLoading="isLoading"
                  :error="error">
    <h1>Engagement Photos</h1>
    <EmbeddedVideo  v-if="!!homeVideo"
                    :video="homeVideo"/>
  </AlbumContainer>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { Link } from '@/types'
import { useFetch } from '@/composables/useFetch'
import { getHomeVideo } from '@/controllers'
import AlbumContainer from '@/components/AlbumContainer.vue'
import EmbeddedVideo from '@/components/EmbeddedVideo.vue'

const homeVideo: Ref<Link|null> = ref(null)
const { isLoading, fetchDecorator, error } = useFetch()

async function setHomeVideo() {
  homeVideo.value = await getHomeVideo()
}

onMounted(async () => {
  await fetchDecorator(setHomeVideo)
})
</script>