import http from '@/http'
import { Link } from '@/types'

export async function getGettingReadyPhotos(): Promise<Link[]> {
  const res = await http.get('/getting-ready')
  return res.data
}