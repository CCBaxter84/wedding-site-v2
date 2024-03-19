<template>
  <div>
    Home
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFetchStore } from '@/store/fetch'
import { getHomeVideo } from '@/controllers'

const store = useFetchStore()
let homeVideo = ref(null)

async function setHomeVideo() {
  homeVideo.value = await getHomeVideo()
}

onMounted(async () => {
  await store.fetchPhotosData(setHomeVideo)
})
</script>