import { defineStore } from 'pinia'
import { type Ref } from 'vue'
import userApi from '@/api/user/user'
import type { User } from '@/api/type/user'

export interface userStateTypes {
  userInfo: User | null
  version?: string
  license_is_valid: boolean
  edition: 'CE' | 'PE' | 'EE'
  workspace_id: string
  workspace_list: Array<any>
}

const useUserStore = defineStore('user', {
  state: (): userStateTypes => ({
    userInfo: null,
    version: '',
    license_is_valid: false,
    edition: 'CE',
    workspace_id: '',
    workspace_list: [],
  }),
  actions: {
    async profile(loading?: Ref<boolean>) {
      const res = await userApi.getUserProfile(loading)
      this.userInfo = res.data
    },
  },
})

export default useUserStore
