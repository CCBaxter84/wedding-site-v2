import { ref, Ref, readonly } from 'vue'
import { Link, PhotoLocation } from '@/types'

export function useLastPhotoCache() {
  const LAST_PHOTO = 'last-photo'

  const lastPhoto: Ref<PhotoLocation|null> = ref(null)

  function redirectToPhoto(item: Link, index: number) {
    cacheLastPhoto({ album: item.album, index })
    window.location.href = item.url
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
  }

  return { 
    lastPhoto: readonly(lastPhoto),
    redirectToPhoto, 
    setLastPhoto, 
    clearLastPhotoCache
  }
}