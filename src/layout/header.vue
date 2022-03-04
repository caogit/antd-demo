<template>
  <a-layout-header style="background: #fff; padding: 0">
    <Component :is="com" @click="changeCom"></Component>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const ps = defineProps({
  collapsed: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:collapsed'])

let com = ref(MenuUnfoldOutlined)
const changeCom = () => {
  com.value =
    com.value == MenuUnfoldOutlined ? MenuFoldOutlined : MenuUnfoldOutlined

  emit('update:collapsed', !ps.collapsed)
}
</script>

<style scoped lang="scss"></style>
