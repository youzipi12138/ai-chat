import useFolderStore from './modules/folder'

const useStore = () => ({
  folder: useFolderStore(),
})

export default useStore
