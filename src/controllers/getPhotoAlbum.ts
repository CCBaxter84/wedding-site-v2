import http from '@/http'
import { Link } from '@/types'
import { ApiPaths } from '@/types/enums'

export async function getPhotoAlbum(apiPath: ApiPaths): Promise<Link[]> {
  const res = await http.get(apiPath)
  return res.data
}