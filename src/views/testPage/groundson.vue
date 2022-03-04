<template>
  <div style="width: 100px; height: 50px; background-color: yellowgreen">
    我是孙子
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['ee'])

emit('ee', 20)
</script>

<style scoped lang="scss"></style>
