<template>
  <Loading v-if="isLoading"/>
  <Error  v-else-if="error"/>
  <section  v-else>
    <h1>Home</h1>
  </section>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { Link } from '@/types'
import { useFetch } from '@/composables/useFetch'
import { getHomeVideo } from '@/controllers'
import Error from '@/components/Error.vue'
import Loading from '@/components/Loading.vue'

const homeVideo: Ref<Link|null> = ref(null)
const { isLoading, fetchDecorator, error } = useFetch()

async function setHomeVideo() {
  homeVideo.value = await getHomeVideo()
}

onMounted(async () => {
  await fetchDecorator(setHomeVideo)
})
</script>