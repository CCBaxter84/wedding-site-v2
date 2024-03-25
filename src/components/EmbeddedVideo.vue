<template>
  <section class="flex justify-content-center is-full-width" >
    <video  :src="video.url" 
            :autoplay="autoPlay"
            class="video"
            type="video/mp4"
            ref="video"
            controls
            muted/>
  </section>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import { Link } from '@/types'

defineProps({
  video: {
    type: Object as PropType<Link>,
    required: true
  },
  autoPlay: Boolean
})
</script>

<style scoped>
.video {
  max-height: 100%;
  position: relative;
  width: 75%;
}

@media screen and (max-width: 415px){
  .video {
      height: 10rem;
  }
}
</style>