import { Link } from '@/types'

export function useLastPhotoCache() {
  const LAST_PHOTO = 'last-photo'

  function redirectToPhoto(item: Link, index: number) {
    cacheLastPhotoIndex(index)
    window.location.href = item.url
  }

  function getLastPhotoIndex() {
    return localStorage.getItem(LAST_PHOTO)
  }

  function cacheLastPhotoIndex(index: number) {
    localStorage.setItem(LAST_PHOTO, String(index))
  }

  function clearLastPhotoCache() {
    localStorage.removeItem(LAST_PHOTO)
  }

  return { 
    redirectToPhoto, 
    getLastPhotoIndex, 
    clearLastPhotoCache 
  }
}