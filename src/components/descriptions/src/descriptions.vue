<template>
  <!-- xs	<768px 响应式栅格数或者栅格属性对象
      sm	≥768px 响应式栅格数或者栅格属性对象
      md	≥992px 响应式栅格数或者栅格属性对象
      lg	≥1200px 响应式栅格数或者栅格属性对象
      xl	≥1920px 响应式栅格数或者栅格属性对象
 -->
  <a-descriptions
    :title="descriptionsConfig.title"
    bordered
    layout="horizontal"
    v-bind="descriptionsConfig.otherOptions"
  >
    <template #extra>
      <slot name="extras"> </slot>
    </template>
    <a-descriptions-item
      v-for="item in descriptionsConfig.descriptionItem"
      :label="item.label"
      :key="item.label"
      :contentStyle="item.contentStyle"
      >{{ item.value }}
    </a-descriptions-item>
  </a-descriptions>
</template>
<script lang="ts" setup>
import { ref, reactive, PropType } from 'vue'
import { IDescription } from '../types'

defineProps({
  descriptionsConfig: {
    type: Object as PropType<IDescription>,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>
