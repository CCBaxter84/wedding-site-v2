import { ref } from 'vue'

let isLoading = ref(false)

export async function useFetchDecorator(fun: Function) {
  isLoading.value = true
  try {
    await fun()
  } catch(e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}