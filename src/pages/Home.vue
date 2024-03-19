<template>
  <div>
    Home
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFetchStore } from '@/store/fetch'

const store = useFetchStore()
const homeVideo = ref(null)

async function test() {
  await new Promise(resolve => setTimeout(resolve, 0))
}

onMounted(async () => {
  console.log("isLoading 1", store.isLoading)
  await store.fetchPhotosData(test)
  console.log("isLoading 2", store.isLoading)
})

</script>