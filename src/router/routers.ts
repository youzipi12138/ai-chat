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
            component: () => import('@/views/application/index.vue'),
          },
          {
            path: 'tool',
            component: () => import('@/views/tool/tool.vue'),
          },
          {
            path: 'model',
            component: () => import('@/views/model/index.vue'),
          },
          {
            path: 'knowledge',
            component: () => import('@/views/knowledge/index.vue'),
          },
        ],
      },
    ],
  },
]

export default routers
