import { defineStore } from 'pinia'
import { login, logout } from '@/api/login/login'
import type { loginData } from '@/api/type/user'
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
    clearToken() {
      this.token = ''
      localStorage.removeItem('token')
    },
    async asyncLogin(data: loginData) {
      const res = await login(data) //返回成功的promise执行后续代码 返回失败的promise会throw一个错误，后续代码也不会执行
      this.token = res.data.token
      localStorage.setItem('token', res.data.token)
    },
    // 谁调用谁来来进行错误处理
    async asyncLogout() {
      await logout() //logout 成功了才会执行下面的代码 失败了则抛出错误
      this.clearToken()
    },
  },
})

export default useLoginStore
