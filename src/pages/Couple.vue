<template>
  <AlbumContainer :isLoading="isLoading"
                  :error="error">
    <h1>Getting Ready Photos</h1>
    <Album  v-if="!!couplePhotos"
            :photos="couplePhotos"/>
  </AlbumContainer>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { Link } from '@/types'
import { useFetch } from '@/composables/useFetch'
import { getCouplePhotos } from '@/controllers'
import AlbumContainer from '@/components/AlbumContainer.vue'
import Album from '@/components/Album.vue'

const couplePhotos: Ref<Link[]|null> = ref(null)
const { isLoading, fetchDecorator, error } = useFetch()

async function setCouplePhotos() {
  couplePhotos.value = await getCouplePhotos()
}

onMounted(async () => {
  await fetchDecorator(setCouplePhotos)
})
</script>