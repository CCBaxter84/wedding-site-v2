import { defineStore } from 'pinia'

export const useFetchStore = defineStore('fetch', {
  state() {
    return { isLoading: false }
  },
  actions: {
    async fetchPhotosData(fun: Function): Promise<Array<any>> {
      try {
        this.isLoading = true
        return await fun()
      } catch(e) {
        console.error(e)
        return []
      } finally {
        console.log('done')
        this.isLoading = false
      }
    }
  }
})