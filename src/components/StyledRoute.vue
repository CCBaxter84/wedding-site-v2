<template>
  <nav class="flex align-items-center">
    <router-link  to="/"
                  class="flex justify-content-center align-items-center">
        {{ name }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  name: String
})
</script>

<style scoped>
a {
  border-radius: 0.75rem;
  min-height: 2.5rem;
  min-width: 4rem;
  text-align: center;
  text-decoration: none;
}
a:focus {
  background-color: #fafafa;
}
a:hover {
  background-color: hsla(0, 0%, 100%, .3);
}
</style>