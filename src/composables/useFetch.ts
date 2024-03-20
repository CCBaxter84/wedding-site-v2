import { ref, Ref } from 'vue'

export function useFetch() {
  const isLoading = ref(false)
  const error: Ref<any|null> = ref(null)
  
  async function fetchDecorator(fun: Function) {
    isLoading.value = true
    try {
      await fun()
    } catch(e: any) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    fetchDecorator,
    error
  }
}