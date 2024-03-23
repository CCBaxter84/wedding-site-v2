<template>
  <section  v-if="!isLoading && !!homeVideo"
            class="flex-column align-items-center">
    <h1>The Clarks' Wedding</h1>
    <EmbeddedVideo :video="homeVideo"/>
  </section>
  <Error  v-else-if="!!error"/>
  <Loading v-else/>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { Link } from '@/types'
import { useFetch } from '@/composables/useFetch'
import { getHomeVideo } from '@/controllers'
import Error from '@/components/Error.vue'
import Loading from '@/components/Loading.vue'
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