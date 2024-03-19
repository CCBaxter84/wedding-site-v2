<template>
  <div>
    Home
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { Link } from '@/types'
import { useFetchDecorator } from '@/composables/useFetchDecorator'
import { getHomeVideo } from '@/controllers'

let homeVideo: Ref<Link|null> = ref(null)

async function setHomeVideo() {
  homeVideo.value = await getHomeVideo()
}

onMounted(async () => {
  await useFetchDecorator(setHomeVideo)
})
</script>