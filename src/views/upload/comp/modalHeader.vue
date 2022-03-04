<template>
  <div class="header">
    <div class="message">
      <a-alert
        message="支持image/*格式，单个文件不超过20MB，最多只能上传10个文件"
        type="info"
        show-icon
      />
    </div>
    <div class="choose-file">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}
</style>
