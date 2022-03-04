<template>
  <div style="width: 300px; height: 200px; background-color: aqua">
    我是父亲
    <sonVue @ee="ee"></sonVue>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import sonVue from './son.vue'
import { useEmit } from './useEmit'

const { ee } = useEmit()
</script>

<style scoped lang="scss"></style>
