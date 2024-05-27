import { Link, PhotoLocation } from '@/types'

export function useLastPhotoCache() {
  const LAST_PHOTO = 'last-photo'

  function redirectToPhoto(item: Link, index: number) {
    cacheLastPhoto({ album: item.album, index })
    window.location.href = item.url
  }

  function getLastPhoto(): PhotoLocation|null {
    const localStorageLookup = localStorage.getItem(LAST_PHOTO)
    return (!!localStorageLookup) ? JSON.parse(localStorageLookup)
      : null
  }

  function cacheLastPhoto(dto: PhotoLocation) {
    localStorage.setItem(LAST_PHOTO, JSON.stringify(dto))
  }

  function clearLastPhotoCache() {
    localStorage.removeItem(LAST_PHOTO)
  }

  return { 
    redirectToPhoto, 
    getLastPhoto, 
    clearLastPhotoCache
  }
}