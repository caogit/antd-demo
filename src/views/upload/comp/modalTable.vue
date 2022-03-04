<template>
  <a-table
    :rowKey="(record:any, index:any) => index"
    bordered
    :data-source="fileListData"
    :columns="columns"
  >
    <template #bodyCell="{ text, record, column }">
      <template v-if="column.key === '1'">
        <img style="width: 100px; height: 100px" :src="text" alt="" />
      </template>
      <template v-if="column.key === '2'">
        <span>{{ text }}</span>
        <a-progress
          :percent="record.progress"
          :status="changeProgressStatus(record.uploadType)"
        />
      </template>
      <template v-if="column.key === '4'">
        <a-tag :color="getUploadColor(text)">{{ getUploadText(text) }}</a-tag>
      </template>
      <template v-if="column.key === '5'">
        <a-button type="link">{{ text }}</a-button>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { ref, reactive, PropType, computed } from 'vue'
import { EuploadType, ItableItem } from '../types'

defineProps({
  fileListData: {
    type: Array as PropType<ItableItem[]>
  }
})

const columns = [
  {
    key: '1',
    title: '缩略图',
    dataIndex: 'thumbnail',
    width: '30%'
  },
  {
    key: '2',
    title: '文件名',
    dataIndex: 'fileName'
  },
  {
    key: '3',
    title: '文件大小',
    dataIndex: 'fileSize'
  },
  {
    key: '4',
    title: '状态',
    dataIndex: 'uploadType'
  },
  {
    key: '5',
    title: '操作',
    dataIndex: 'fileHandle'
  }
]

// 通过上传的状态返回颜色
function getUploadColor(type: EuploadType) {
  let state = ''
  switch (type) {
    case EuploadType.SUCCESS:
      state = 'success'
      break
    case EuploadType.ERROR:
      state = 'error'
      break
    case EuploadType.UPLOADING:
      state = 'processing'
      break
    case EuploadType.EMPYT:
      state = 'default'
      break
  }
  return state
}
// 通过上传的状态返回文字
function getUploadText(type: EuploadType) {
  let state = ''
  switch (type) {
    case EuploadType.SUCCESS:
      state = '上传成功'
      break
    case EuploadType.ERROR:
      state = '上传失败'
      break
    case EuploadType.UPLOADING:
      state = '上传中'
      break
    case EuploadType.EMPYT:
      state = '等待上传'
      break
  }
  return state
}
// 改变进度条的状态
function changeProgressStatus(type: EuploadType) {
  let state = ''
  switch (type) {
    case EuploadType.SUCCESS:
      state = ''
      break
    case EuploadType.UPLOADING:
      state = 'active'
      break
    case EuploadType.ERROR:
      state = 'exception'
      break
    case EuploadType.EMPYT:
      state = 'active'
      break
  }
  return state
}
</script>

<style scoped lang="scss"></style>
