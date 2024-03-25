import { createMemoryHistory, createRouter } from 'vue-router'
import { ApiPaths } from '@/types/enums'
import Home from '@/pages/Home.vue'
import OurStory from '@/pages/OurStory.vue'
import Engagement from '@/pages/Engagement.vue'
import GettingReady from '@/pages/GettingReady.vue'
import Couple from '@/pages/Couple.vue'
import PhotoAlbum from '@/pages/PhotoAlbum.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/our-story', component: OurStory },
  { path: ApiPaths.engagement, component: PhotoAlbum, meta: { title: 'Engagement Photos' } },
  { path: '/getting-ready', component: GettingReady },
  { path: '/couple', component: Couple }
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})