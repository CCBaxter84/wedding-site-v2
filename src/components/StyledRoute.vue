<template>
  <nav class="flex align-items-center">
    <router-link  :to="to"
                  class="flex justify-content-center align-items-center has-text-primary">
        {{ name }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
a {
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
}
a:focus {
  background-color: var(--focus-background);
}
a:hover {
  background-color: var(--nav-hover-background);
}
</style>