import { onMounted, Ref, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Link } from '@/types'
import { ApiPaths } from '@/types/enums'
import { getPhotoAlbum } from '@/controllers'
import { useFetch } from '@/composables/useFetch'

export function useFetchLinksOnMount() {
  const { fetchDecorator } = useFetch()
  const links: Ref<Link[]|null> = ref(null)
  const route = useRoute()
  const path = computed(() => route.path) 

  async function setLinks() {
    links.value = await getPhotoAlbum(path.value as ApiPaths)
  }

  onMounted(async () => {
    await fetchDecorator(setLinks)
  })

  return {
    links,
    setLinks
  }
}