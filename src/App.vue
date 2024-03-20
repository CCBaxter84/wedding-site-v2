<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="container has-text-primary">
    <Navbar />
    <main class="flex-column justify-content-center align-items-center">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.container {
  background-color: hsla(0, 0%, 100%, .5);
  border-radius: 0.75rem;
  height: 100vh;
  margin: 2rem auto;
  width: 70%;
}
</style>
