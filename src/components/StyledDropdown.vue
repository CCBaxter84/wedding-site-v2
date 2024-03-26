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
      <nav  v-for="opt in options"
            class="flex align-items-center dropdown-item">
        <router-link  :to="opt.to"
                      class="flex justify-content-center align-items-center has-text-primary">
            {{ opt.name }}
        </router-link>
      </nav>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
  color: var(--focus-background) !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
}
.dropdown-item:hover > a {
  color: var(--focus-background);
}
a {
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
}
</style>