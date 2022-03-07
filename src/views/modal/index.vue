<template>
  <h2>
    以下是 useModal 方式，其实也可以使用，ref方式如：modalRef.value.closeModal()
  </h2>
  <div>
    <div>1. 内部关闭和内部修改</div>
    <a-button type="primary" @click="open1">Open Modal</a-button>
    <div>2. 外部传值内部</div>
    <a-button type="primary" @click="send">Open Modal</a-button>
  </div>
  <!-- 这里的register直接就到了孙子组件basicModal中去触发，没有经过子组件Modal1 -->
  <Modal1 @register="register1"></Modal1>
  <Modal2 @register="register2"></Modal2>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Modal1 from './Modal1.vue'
import Modal2 from './Modal2.vue'
import { useModal } from '@/hook/useModal'

const send = () => {
  open2(true, {
    name: 'cao',
    age: 200
  })
}
// 这里的主要思想就是一个组件相当于创建了一个hook，你点击了那个方法，就调哪个方法里面的hook
const { register: register1, open: open1 } = useModal()
const { register: register2, open: open2 } = useModal()
</script>
