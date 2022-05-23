/*
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-03-14 08:48:59
 * @LastEditTime: 2022-04-20 11:35:40
 */
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
        meta: { text: '测试组件传值' }
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index.vue'),
        meta: { text: '下载文件' },
        alias: ['/copydem']
      },
      {
        path: 'richTextEditor',
        component: () => import('@/views/richTextEditor/index.vue'),
        meta: { text: '虚拟滚动' }
      },
      {
        path: 'uploadFile',
        component: () => import('@/views/uploadFile/index.vue'),
        meta: { text: '文件上传多种方式' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
