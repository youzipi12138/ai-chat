import { defineStore } from 'pinia'
import { getFolderList } from '@/api/folder'

const useFolderStore = defineStore('folder', {
  state: () => ({
    currentFolder: 'default',
  }),
  actions: {
    setCurrentFolder(folder: any) {
      this.currentFolder = folder
    },
    async asyncGetFolder(source: string, data: any, loading?: Ref<boolean>) {
      return new Promise((resolve, reject) => {
        getFolderList(source, data, loading)
          .then((res) => resolve(res))
          .catch((error) => reject(error))
      })
    },
  },
})
export default useFolderStore
