<template>
  <div>{{ aa.name }}</div>
  <!-- 模糊搜索组件 -->
  <fuzzySearch :arr="arr"></fuzzySearch>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import fuzzySearch from '@/components/fuzzySearch'
const arr = ['来了', '吃饭了', '我没有吃']

const aa = ref({ name: '123' })

let bb = aa.value
bb.name = '22'
</script>

<style scoped lang="scss"></style>
