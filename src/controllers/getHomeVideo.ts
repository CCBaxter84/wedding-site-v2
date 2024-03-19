import http from '@/http'
import { Link } from '@/types'

export async function getHomeVideo(): Promise<Link> {
  const res = await http.get('/home')
  return res.data[0]
}