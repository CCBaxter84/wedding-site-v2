import http from '@/http'

export async function getHomeVideo() {
  const res = await http.get('/home')
  return res.data[0]
}