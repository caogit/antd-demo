<template>
  <a-layout class="layout-style">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="toMenuItem"
      >
        <CAmenuItem :itemConfig="itemConfig"></CAmenuItem>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <headers v-model:collapsed="collapsed"></headers>
      <a-layout-content class="content-style">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import headers from './header.vue'
import CAmenuItem from '@/base-ui/menuItem'
import router from '@/router/index'

console.log(router.getRoutes())

const routers = router.getRoutes()

const itemConfig = routers[routers.length - 1]?.children

const selectedKeys = ref<string[]>(['1'])
const collapsed = ref(false)
const toMenuItem = (item: any) => {
  router.push(`/main/${item.key}`)
}
</script>
<style lang="scss" scoped>
.content-style {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
}
.layout-style {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
