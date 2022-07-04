/*
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-03-14 08:48:59
 * @LastEditTime: 2022-07-04 10:48:33
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
        name: 'FuzzySearch',
        component: () => import('@/views/fuzzySearch/index.vue'),
        meta: { text: '模糊搜索' }
      },
      {
        path: 'described',
        name: 'Described',
        component: () => import('@/views/desctibed/index.vue'),
        meta: { text: '详情展示' }
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/upload/index.vue'),
        meta: { text: '上传组件' }
      },
      {
        path: 'modal',
        name: 'Modal',
        component: () => import('@/views/modal/index.vue'),
        meta: { text: '弹窗组件' }
      },
      {
        path: 'carousel',
        name: 'Carousel',
        component: () => import('@/views/carousel/main.vue'),
        meta: { text: '轮播图组件' }
      },
      {
        path: 'testPage',
        name: 'TestPage',
        component: () => import('@/views/testPage/father.vue'),
        meta: { text: '测试组件传值' }
      },
      {
        path: 'demo',
        name: 'Demo',
        component: () => import('@/views/demo/index.vue'),
        meta: { text: '下载文件' },
        alias: ['/copydem']
      },
      {
        path: 'richTextEditor',
        name: 'RichTextEditor',
        component: () => import('@/views/richTextEditor/index.vue'),
        meta: { text: '虚拟滚动' }
      },
      {
        path: 'uploadFile',
        name: 'UploadFile',
        component: () => import('@/views/uploadFile/index.vue'),
        meta: { text: '文件上传多种方式' }
      },
      {
        path: 'testHookRef',
        name: 'TestHookRef',
        component: () => import('@/views/testHookRef/index.vue'),
        meta: { text: 'hook传值与keepAlive缓存', keepAlive: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
