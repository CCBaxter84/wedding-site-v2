<template>
  <section  class="dropdown flex align-items-center"
            @mouseenter="showDropdown"
            @mouseleave="hideDropdown"
            @click="hideDropdown">
    <nav class="flex justify-content-center">
      <span>{{ title }}</span>
    </nav>
    <article  v-show="isOpen"
              class="dropdown-items flex-column align-items-center">
      <StyledRoute  v-for="opt in options"
                    :name="opt.name"
                    :to="opt.to"
                    class="dropdown-item"/>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StyledRoute from './StyledRoute.vue'

defineProps(['title', 'options'])
const isOpen = ref(false)

function showDropdown() {
  isOpen.value = true
}
function hideDropdown() {
  isOpen.value = false
}
</script>

<style scoped>
.dropdown {
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 2;
}
.dropdown:hover {
  background-color: var(--nav-hover-background);
  border-radius: 0.75rem;
}
.dropdown-items {
  background-color: var(--focus-background);
  border-radius: 0.75rem;
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
}
.dropdown-item:hover {
  background-color: var(--purple-gradient);
  border-radius: 0.75rem;
  cursor: pointer;
  width: 100%;
}
</style>