<template>
  <h1>Home</h1>
  <article>
    <div  v-if="isLoading">Loading ...</div>
    <div  v-else-if="error">Error</div>
    <div  v-else>Home</div>
  </article>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { Link } from '@/types'
import { useFetchDecorator } from '@/composables/useFetchDecorator'
import { getHomeVideo } from '@/controllers'

let homeVideo: Ref<Link|null> = ref(null)
const { isLoading, fetchDecorator, error } = useFetchDecorator()

async function setHomeVideo() {
  homeVideo.value = await getHomeVideo()
}

onMounted(async () => {
  await fetchDecorator(setHomeVideo)
})
</script>