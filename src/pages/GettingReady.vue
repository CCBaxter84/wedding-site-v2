<template>
  <AlbumContainer :isLoading="isLoading"
                  :error="error">
    <h1>Getting Ready Photos</h1>
    <Album  v-if="!!gettingReadyPhotos"
            :photos="gettingReadyPhotos"/>
  </AlbumContainer>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { Link } from '@/types'
import { useFetch } from '@/composables/useFetch'
import { getGettingReadyPhotos } from '@/controllers'
import AlbumContainer from '@/components/AlbumContainer.vue'
import Album from '@/components/Album.vue'

const gettingReadyPhotos: Ref<Link[]|null> = ref(null)
const { isLoading, fetchDecorator, error } = useFetch()

async function setGettingReadyPhotos() {
  gettingReadyPhotos.value = await getGettingReadyPhotos()
}

onMounted(async () => {
  await fetchDecorator(setGettingReadyPhotos)
})
</script>