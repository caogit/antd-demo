<template>
  <div>
    <a-input
      v-model:value="inputVal"
      placeholder="Basic usage"
      style="width: 400px"
    />
    <div class="search-box" v-show="isShowbox">
      <p v-for="item in laterSearch" :key="item">{{ item }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { usefuzzySearch } from '@/hook/usefuzzySearch'
import { PropType } from 'vue'
const props = defineProps({
  arr: {
    type: Array as PropType<string[]>,
    required: true
  }
})
const { inputVal, isShowbox, laterSearch } = usefuzzySearch(props.arr)
</script>

<style scoped lang="scss">
.search-box {
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
}
</style>
