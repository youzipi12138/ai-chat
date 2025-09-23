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
NProgress.configure({ showSpinner: false, speed: 500, minimum: 0.3 })
//前置路由  Vue Router 的路由守卫有严格规则：一个守卫函数中，next() 只能被调用一次。

router.beforeEach(
  async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    if (to.name === '404') {
      next()
      return
    }
    const notAuthRouteNameList = ['login', 'ForgotPassword', 'ResetPassword', 'Chat', 'UserLogin']
    const { login, user } = useStore()

    // 不在白名单里的
    if (!notAuthRouteNameList.includes(to.name ? to.name.toString() : '')) {
      const token = login.getToken()
      if (!token) {
        next({
          path: '/login',
        })
        return
      }
      if (!user.userInfo) {
        await user.profile()
      }
      next()
      return
    }
    //在白名单里直接放行
    next()

    // const { login, user } = useStore()
    // if (!login.getToken() && to.path !== '/login') {
    //   next({
    //     path: '/login',
    //   })
    //   return
    // }
    // if (login.getToken()) {
    //   await user.profile()
    // }
    // next()
  },
)
router.afterEach(() => {
  NProgress.done()
})

export default router
