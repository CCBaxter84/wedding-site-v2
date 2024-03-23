import http from '@/http'
import { Link } from '@/types'

export async function getEngagementPhotos(): Promise<Link[]> {
  const res = await http.get('/engagement')
  return res.data
}