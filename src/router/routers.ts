import type { RouteRecordRaw } from 'vue-router'

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main/application',
    children: [
      {
        path: '/main',
        component: () => import('@/layout/layout.vue'),
        children: [
          {
            path: 'application',
            name: 'application',
            component: () => import('@/views/application/index.vue'),
          },
          {
            path: 'tool',
            name: 'tool',
            component: () => import('@/views/tool/tool.vue'),
          },
          {
            path: 'model',
            name: 'model',
            component: () => import('@/views/model/index.vue'),
          },
          {
            path: 'knowledge',
            name: 'knowledge',
            component: () => import('@/views/knowledge/index.vue'),
          },
        ],
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
      },
    ],
  },
]

export default routers
