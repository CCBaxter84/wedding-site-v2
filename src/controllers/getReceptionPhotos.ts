import http from '@/http'
import { Link } from '@/types'

export async function getReceptionPhotos(): Promise<Link[]> {
  const res = await http.get('/reception')
  return res.data
}