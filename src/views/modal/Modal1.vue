<template>
  <basicModalVue ref="basicModalRef">
    <a-space>
      <a-button type="primary" @click="closeModal">从内部关闭弹窗</a-button>
      <a-button type="primary" @click="changeModal(changeProp)"
        >从内部修改值</a-button
      >
      <a-button type="ghost" @click="handleConfirm"
        >测试内部确定的回调事件</a-button
      >
    </a-space>
  </basicModalVue>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import basicModalVue from '@/components/modal/index'
import { useModalInner } from '@/hook/useModal'

const changeProp = {
  title: '吃吃'
}

const callbackConsole = () => {
  setTimeout(() => {
    console.log('哈哈哈')
  }, 1000)
}

const { basicModalRef, closeModal, changeModal, handleConfirm } = useModalInner(
  undefined,
  callbackConsole
)
</script>

<style scoped lang="scss"></style>
