import http from '@/http'
import { Link } from '@/types'

export async function getCeremonyPhotos(): Promise<Link[]> {
  const res = await http.get('/ceremony')
  return res.data
}