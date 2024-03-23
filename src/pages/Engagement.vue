<template>
  <AlbumContainer :isLoading="isLoading"
                  :error="error">
    <h1>Engagement Photos</h1>
    <Album  v-if="!!engagementPhotos"
            :photos="engagementPhotos"/>
  </AlbumContainer>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { Link } from '@/types'
import { useFetch } from '@/composables/useFetch'
import { getEngagementPhotos } from '@/controllers'
import AlbumContainer from '@/components/AlbumContainer.vue'
import Album from '@/components/Album.vue'

const engagementPhotos: Ref<Link[]|null> = ref(null)
const { isLoading, fetchDecorator, error } = useFetch()

async function setEngagementPhotos() {
  engagementPhotos.value = await getEngagementPhotos()
}

onMounted(async () => {
  await fetchDecorator(setEngagementPhotos)
})
</script>