<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="container has-text-primary">
    <Navbar />
    <main class="flex-column flex-wrap-wrap justify-content-center align-items-center">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.container {
  background-color: hsla(0, 0%, 100%, .5);
  border-radius: 0.75rem;
  margin: 2rem auto;
  width: 70%;
}
@media screen and (max-width: 1025px) {
  .container {
    margin: 1rem auto;
    width: 90%;
  }
}
</style>
