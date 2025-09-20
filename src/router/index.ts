import type { RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import useStore from '@/stores'
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordName,
} from 'vue-router'
import routers from './routers'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers as RouteRecordRaw[],
})
//前置路由

router.beforeEach(
  async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    if (to.name === '404') {
      next()
      return
    }
    const { login, user } = useStore()
    if (!login.getToken() && to.path !== '/login') {
      next({
        path: '/login',
      })
      return
    }
    if (login.getToken()) {
      await user.profile()
    }
    next()
  },
)
router.afterEach(() => {
  NProgress.done()
})

export default router
