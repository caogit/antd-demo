<template>
  <basicModalVue ref="basicModalRef">
    <a-form>
      <a-form-item label="姓名">
        <a-input v-model:value="form.name"></a-input>
      </a-form-item>
      <a-form-item label="年龄">
        <a-input v-model:value.number="form.age"></a-input>
      </a-form-item>
    </a-form>
  </basicModalVue>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import basicModalVue from '@/components/modal/index'
import { useModalInner } from '@/hook/useModal'
const form: { [key: string]: any } = reactive({})
const { basicModalRef } = useModalInner((data) => {
  data && onformdata(data)
})

function onformdata(data: any) {
  console.log('🤡 ~~ data', data)
  for (let k in data) {
    form[k] = data[k]
  }
}
</script>

<style scoped lang="scss"></style>
