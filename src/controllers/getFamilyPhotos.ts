import http from '@/http'
import { Link } from '@/types'

export async function getFamilyPhotos(): Promise<Link[]> {
  const res = await http.get('/family')
  return res.data
}