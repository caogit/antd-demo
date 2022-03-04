<template>
  <template v-for="item in props.itemConfig" :key="item.path">
    <a-menu-item>
      <template #icon>
        <component :is="iconArr[getRandom()]"></component>
      </template>
      <span>{{ item.meta.text }}</span>
    </a-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import {
  PieChartOutlined,
  SmileOutlined,
  HomeOutlined,
  TagsOutlined
} from '@ant-design/icons-vue'
const iconArr = [PieChartOutlined, SmileOutlined, HomeOutlined, TagsOutlined]

const getRandom = () => {
  return Math.floor(Math.random() * 4)
}

const props = defineProps({
  itemConfig: {
    type: Array as any,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>
