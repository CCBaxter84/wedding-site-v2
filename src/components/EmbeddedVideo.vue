<template>
  <section class="flex-column is-full-width" >
    <video  :src="item.url" 
            class="video"
            type="video/mp4"
            ref="video"
            autoplay
            controls/>
  </section>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.video {
  max-height: 100%;
  position: relative;
  width: 75%;
  height: 30rem;
}
@media screen and (max-width: 1020px){
  .video {
      width: 100%;
  }
}
@media screen and (max-width: 415px){
  .video {
      height: 10rem;
  }
}
</style>