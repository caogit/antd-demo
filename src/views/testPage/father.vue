<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-03-14 08:48:59
 * @LastEditTime: 2022-05-07 18:07:56
-->
<template>
  <div style="width: 300px; height: 200px; background-color: aqua">
    我是父亲
    <sonVue :text="text" class="scssStyle"></sonVue>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import sonVue from './son.vue'
const text = 1
</script>

<style scoped lang="scss">
.scssStyle {
  text-shadow: rgb(255, 77, 0) 1px 0 10px;
}
</style>
