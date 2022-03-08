import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('@/layout/main.vue'),
    redirect: '/main/fuzzySearch',
    children: [
      {
        path: 'fuzzySearch',
        component: () => import('@/views/fuzzySearch/index.vue'),
        meta: { text: '模糊搜索' }
      },
      {
        path: 'described',
        component: () => import('@/views/desctibed/index.vue'),
        meta: { text: '详情展示' }
      },
      {
        path: 'upload',
        component: () => import('@/views/upload/index.vue'),
        meta: { text: '上传组件' }
      },
      {
        path: 'modal',
        component: () => import('@/views/modal/index.vue'),
        meta: { text: '弹窗组件' }
      },
      {
        path: 'carousel',
        component: () => import('@/views/carousel/main.vue'),
        meta: { text: '轮播图组件' }
      },
      {
        path: 'testPage',
        component: () => import('@/views/testPage/father.vue'),
        meta: { text: 'test' }
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index.vue'),
        meta: { text: 'demo' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
