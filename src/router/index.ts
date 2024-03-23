import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/pages/Home.vue'
import OurStory from '@/pages/OurStory.vue'
import EngagementPhotos from '@/pages/EngagementPhotos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/our-story', component: OurStory },
  { path: '/engagement-photos', component: EngagementPhotos },
  { path: '/getting-ready', component: EngagementPhotos }
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})