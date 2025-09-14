import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
  }),
  actions: {
    getToken(): string {
      if (this.token) {
        return this.token
      }
      return localStorage.getItem('token') as string
    },
  },
})

export default useLoginStore
