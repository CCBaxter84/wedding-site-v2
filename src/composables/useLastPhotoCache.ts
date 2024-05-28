import { ref, Ref, readonly } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PhotoLocation } from '@/types'
import { Titles } from '@/types/enums'

const lastPhoto: Ref<PhotoLocation|null> = ref(null)

export function useLastPhotoCache() {
  const route = useRoute()
  const router = useRouter()

  const LAST_PHOTO = 'last-photo'

  function redirectToPhoto(srcUrl: string, index: number) {
    cacheLastPhoto({ routeName: route.name as Titles, index })
    window.location.href = srcUrl
  }

  function setLastPhoto() {
    const localStorageLookup = localStorage.getItem(LAST_PHOTO)
    lastPhoto.value = (!!localStorageLookup) 
      ? JSON.parse(localStorageLookup)
      : null
  }

  function cacheLastPhoto(dto: PhotoLocation) {
    localStorage.setItem(LAST_PHOTO, JSON.stringify(dto))
  }

  function clearLastPhotoCache() {
    localStorage.removeItem(LAST_PHOTO)
    lastPhoto.value = null
  }

  async function navToPhotoInAlbum(dto: PhotoLocation) {
    await router.push({ name: dto.routeName })
  }

  return { 
    lastPhoto: readonly(lastPhoto),
    redirectToPhoto, 
    setLastPhoto, 
    clearLastPhotoCache,
    navToPhotoInAlbum
  }
}