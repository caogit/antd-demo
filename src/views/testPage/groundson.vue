<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-03-14 08:48:59
 * @LastEditTime: 2022-03-28 11:50:23
-->
<template>
  <div style="width: 100px; height: 50px; background-color: yellowgreen">
    我是孙子
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs)
</script>

<style scoped lang="scss"></style>
