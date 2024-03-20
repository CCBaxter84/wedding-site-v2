import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/pages/Home.vue'
import OurStory from '@/pages/OurStory.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/our-story', component: OurStory}
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})