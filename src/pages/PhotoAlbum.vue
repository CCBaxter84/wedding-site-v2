<template>
  <AlbumContainer :isLoading="isLoading"
                  :error="error">
    <h1>{{ route.meta.title }}</h1>
    <Album  v-if="!!photos"
            :photos="photos"/>
  </AlbumContainer>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Link } from '@/types'
import { ApiPaths } from '@/types/enums'
import { useFetch } from '@/composables/useFetch'
import { getPhotoAlbum } from '@/controllers'
import AlbumContainer from '@/components/AlbumContainer.vue'
import Album from '@/components/Album.vue'

const photos: Ref<Link[]|null> = ref(null)
const { isLoading, fetchDecorator, error } = useFetch()
const route = useRoute()
const path = computed(() => route.path)

async function setPhotos() {
  photos.value = await getPhotoAlbum(path.value as ApiPaths)
}

onMounted(async () => {
  await fetchDecorator(setPhotos)
})
watch(path, setPhotos)
</script>