import { createMemoryHistory, createRouter } from 'vue-router'
import { ApiPaths } from '@/types/enums'
import Home from '@/pages/Home.vue'
import OurStory from '@/pages/OurStory.vue'
import PhotoAlbum from '@/pages/PhotoAlbum.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/our-story', component: OurStory },
  { path: ApiPaths.engagement, component: PhotoAlbum, meta: { title: 'Engagement Photos' }},
  { path: ApiPaths.gettingReady, component: PhotoAlbum, meta: { title: 'Getting Ready Photos' }},
  { path: ApiPaths.couple, component: PhotoAlbum, meta: { title: "Couple Photos" }}
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})