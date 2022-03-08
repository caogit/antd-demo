<template>
  <div>
    <carIndex @ee="ee"></carIndex>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import carIndex from './index.vue'

const ee = (a: any) => {
  console.log(a)
}
</script>

<style scoped lang="scss"></style>
