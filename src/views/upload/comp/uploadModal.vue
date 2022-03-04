<template>
  <basicModal ref="basicModalRef" :width="800" :maskClosable="false">
    <modalHeader>
      <a-upload
        :showUploadList="false"
        :before-upload="beforeUpload"
        v-bind="props?.uploadConfig"
      >
        <a-button type="primary">
          <upload-outlined></upload-outlined>
          选择文件
        </a-button>
      </a-upload>
    </modalHeader>
    <!-- 表格 -->
    <modalTable :fileListData="fileListRef"></modalTable>
    <!-- 页脚 -->
    <template #footer>
      <a-button @click="closeModal">取消</a-button>
      <a-button :disabled="!saveFile" type="primary" @click="statrUpload"
        >开始上传</a-button
      >
      <a-button>保存</a-button>
    </template>
  </basicModal>
</template>

<script lang="ts" setup>
import { ref, reactive, unref, computed } from 'vue'
import basicModal from '@/components/modal'
import modalHeader from './modalHeader.vue'
import modalTable from './modalTable.vue'
import { useModalInner } from '@/hook/useModal'
import { EuploadHandle, EuploadType, ItableItem } from '../types'
import { getBase64WithFile } from '@/utils/helper'
import axios from 'axios'
const { basicModalRef, closeModal } = useModalInner()

const props = defineProps({
  uploadConfig: {
    type: Object
  }
})

const saveFile = computed(() => {
  const type =
    fileListRef.value.length > 0 &&
    fileListRef.value.find((item) => item.uploadType === EuploadType.EMPYT)
  return type
})

//默认表格item的对象
const defaultFileListRef = ref<ItableItem>({
  thumbnail: '',
  fileName: '',
  fileSize: '',
  uploadType: EuploadType.EMPYT,
  fileHandle: EuploadHandle.DELETE,
  progress: 0
})
//处理过后的item数组对象
const fileListRef = ref<ItableItem[]>([])
//保存的formData对象数组
const beforeFormData = ref<any[]>([])

const beforeUpload = (file: any, fileList: any) => {
  beforeFormData.value.push(file)
  const { name: fileName, size: fileSize } = file
  // 生成缩略图
  getBase64WithFile(file).then(({ result: thumbnail }) => {
    // 合并两个对象，后面的对象会和前面的对象(之前存在的)合并，并替换掉默认属性
    fileListRef.value = [
      ...unref(fileListRef),
      { ...defaultFileListRef.value, fileName, fileSize, thumbnail }
    ]
  })
}

// 统一处理fileListRef状态
function handleType(type: EuploadType) {
  fileListRef.value.forEach((item) => {
    item.uploadType = type
  })
}
// 点击开始上传
const statrUpload = () => {
  const formData = new FormData()
  beforeFormData.value.forEach((item) => {
    formData.append('file', item)
  })

  // 设置状态为上传中,loading为true
  handleType(EuploadType.UPLOADING)

  // 开始上传
  uploadFn(formData)
}

// 上传函数
function uploadFn(formData: any) {
  axios({
    method: 'post',
    url: 'http://localhost:5800/upload',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: function (progressEvent) {
      const persent = Math.floor(
        (progressEvent.loaded / progressEvent.total) * 100
      )
      fileListRef.value.forEach((item) => {
        item.progress = persent
      })
    },
    data: formData
  })
    .then((res) => {
      handleType(EuploadType.SUCCESS)
    })
    .catch(() => {
      handleType(EuploadType.ERROR)
      throw new Error('upload error ! 没开端口吧哥哥')
    })
}
</script>

<style scoped lang="scss"></style>
