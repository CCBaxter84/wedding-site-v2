import http from '@/http'
import { Link } from '@/types'

export async function getCouplePhotos(): Promise<Link[]> {
  const res = await http.get('/couple')
  return res.data
}