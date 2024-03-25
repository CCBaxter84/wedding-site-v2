import { createMemoryHistory, createRouter } from 'vue-router'
import { ApiPaths, Titles } from '@/types/enums'
import Home from '@/pages/Home.vue'
import OurStory from '@/pages/OurStory.vue'
import PhotoAlbum from '@/pages/PhotoAlbum.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/our-story', component: OurStory },
  { path: ApiPaths.engagement, component: PhotoAlbum, meta: { title: Titles.engagement }},
  { path: ApiPaths.gettingReady, component: PhotoAlbum, meta: { title: Titles.gettingReady }},
  { path: ApiPaths.ceremony, component: PhotoAlbum, meta: { title: Titles.ceremony }},
  { path: ApiPaths.couple, component: PhotoAlbum, meta: { title: Titles.couple }},
  { path: ApiPaths.family, component: PhotoAlbum, meta: { title: Titles.family }},
  { path: ApiPaths.reception, component: PhotoAlbum, meta: { title: Titles.reception }}
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})