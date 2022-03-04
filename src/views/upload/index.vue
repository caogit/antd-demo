<template>
  <div>
    <a-button type="primary" @click="open()">上传</a-button>
  </div>
  <uploadModal @register="register" v-bind="uploadConfig"></uploadModal>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import uploadModal from './comp/uploadModal.vue'
import { useModal } from '@/hook/useModal'

const { register, open } = useModal()

// 静态配置项
const uploadConfig = {
  accept: '.jpg,.jpeg,.png'
}
</script>

<style scoped lang="scss"></style>
