import { createMemoryHistory, createRouter } from 'vue-router'
import { ApiPaths, Titles } from '@/types/enums'
import Home from '@/pages/Home.vue'
import OurStory from '@/pages/OurStory.vue'
import PhotoAlbum from '@/pages/PhotoAlbum.vue'
import WeddingVideos from '@/pages/WeddingVideos.vue'

const routes = [
  { path: '/', component: Home, name: Titles.home },
  { path: '/our-story', component: OurStory, name: Titles.ourStory },
  { path: ApiPaths.engagement, component: PhotoAlbum, 
    name: Titles.engagement, meta: { title: Titles.engagement }},
  { path: ApiPaths.gettingReady, component: PhotoAlbum, 
    name: Titles.gettingReady,
    meta: { title: Titles.gettingReady }},
  { path: ApiPaths.ceremony, component: PhotoAlbum, 
    name: Titles.ceremony,
    meta: { title: Titles.ceremony }},
  { path: ApiPaths.couple, component: PhotoAlbum, 
    name: Titles.couple,
    meta: { title: Titles.couple }},
  { path: ApiPaths.family, component: PhotoAlbum, 
    name: Titles.family,
    meta: { title: Titles.family }},
  { path: ApiPaths.reception, component: PhotoAlbum, 
    name: Titles.reception,
    meta: { title: Titles.reception }},
  { path: ApiPaths.puppies, component: PhotoAlbum, 
    name: Titles.puppies,
    meta: { title: Titles.puppies }},
  { path: ApiPaths.videos, component: WeddingVideos, 
    name: Titles.videos,
    meta: { title: Titles.videos }}
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})