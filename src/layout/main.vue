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
        <!-- <router-view> 暴露了一个 v-slot API， -->
        <router-view v-slot="{ Component }">
          <!-- 缓存其实是将数据缓存到了keep-alive中的data -->
          <keep-alive :include="includeList">
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect, watch } from 'vue'
import headers from './header.vue'
import CAmenuItem from '@/base-ui/menuItem'
import router from '@/router/index'
import { useRoute } from 'vue-router'

console.log(router.getRoutes())
const routers = router.getRoutes()
const route = useRoute()
console.log('🤡 ~~ route', route)
const itemConfig = routers[routers.length - 1]?.children
const selectedKeys = ref<string[]>(['1'])
const collapsed = ref(false)
const toMenuItem = (item: any) => {
  router.push(`/main/${item.key}`)
}
const includeList = ref([])
// const router = useRouter()
watch(
  () => route,
  (newVal, oldVal) => {
    console.log('🤡 ~~ newVal', newVal)
    // 注意这里获取的是路由的name，而在我们的组件中也需要定义一个组件的name与其对应，才能实现缓存
    if (newVal.meta.keepAlive && !includeList.value.includes(newVal.name)) {
      includeList.value.push(newVal.name)
    }
  },
  { deep: true, immediate: true }
)
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
