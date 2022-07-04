<template>
  <div>{{ value1 }}</div>
  <div>{{ value0 }}</div>
  <div>{{ value2 }}</div>
  <a-select ref="select" v-model:value="value1" style="width: 120px">
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="disabled" disabled>Disabled</a-select-option>
    <a-select-option value="Yiminghe">yiminghe</a-select-option>
  </a-select>
</template>

<script lang="ts">
export default {
  name: 'TestHookRef'
}
</script>

<script lang="ts" setup>
import { useTestTab } from '@/hook/useTestTab'
import { useTestTab2 } from '@/hook/useTestTab2'
import { ref, reactive, watchEffect, computed } from 'vue'

const value1 = ref('jace')

const { value0, getNewValue: getNewValue0 } = useTestTab(value1.value)
const { value2, getNewValue } = useTestTab2(value1.value)

watchEffect(() => {
  getNewValue0(value1.value)
  getNewValue(value1.value)
})
</script>

<style scoped lang="scss"></style>
