<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-03-14 08:48:59
 * @LastEditTime: 2022-03-28 11:51:25
-->
<template>
  <div style="width: 200px; height: 100px; background-color: blue">
    我是儿子
    <groundsonVue v-bind="$attrs"></groundsonVue>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useAttrs } from 'vue'
import groundsonVue from './groundson.vue'
</script>

<style scoped lang="scss"></style>
