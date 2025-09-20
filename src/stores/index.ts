import useFolderStore from './modules/folder'
import useLoginStore from './modules/login'
import useUserStore from './modules/user'
const useStore = () => ({
  folder: useFolderStore(),
  login: useLoginStore(),
  user: useUserStore(),
})

export default useStore
