<template>
  <ul>
    <li>支持内容自适应</li>
    <li>可设置栅格布局</li>
    <li>可单独改变某一行的label和value样式</li>
  </ul>
  <descriptions :descriptions-config="descriptionsConfig"> </descriptions>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import descriptions from '@/components/descriptions'
import { IDescription, IDescriptionItem } from '@/components/descriptions'

// 需要渲染的数据
const descr: IDescriptionItem[] = [
  {
    label: '姓名',
    value: '张三'
  },
  {
    label: '年龄',
    value:
      '28啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
  },
  {
    label: '地址',
    value:
      '浙江省镇中南路17号西北方向100米啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
  },
  {
    label: '联系电话',
    value: '1565615851456'
  },
  {
    label: '昵称',
    value: '放荡不拘',
    contentStyle: {
      color: 'red'
    }
  }
]

// 传递的配置参数
const descriptionsConfig: IDescription = {
  title: '描述1',
  otherOptions: { column: { xs: 1, sm: 2, lg: 3 } },
  descriptionItem: descr
}
</script>

<style scoped lang="scss"></style>
