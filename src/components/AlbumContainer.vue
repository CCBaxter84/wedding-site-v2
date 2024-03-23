<template>
  <section  v-if="!isLoading"
            class="flex-column align-items-center"
            style="margin-bottom: 3rem; width: 100%;">
    <slot />
  </section>
  <Error  v-else-if="!!error"/>
  <Loading v-else/>
</template>

<script setup lang="ts">
import Error from './Error.vue'
import Loading from './Loading.vue'

defineProps(['error', 'isLoading'])
</script>