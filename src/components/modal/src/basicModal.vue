<template>
  <a-modal v-model:visible="visible" v-bind="getBindValue" @ok="handleOk">
    <template #footer>
      <slot name="footer"></slot>
    </template>
    <slot></slot>
  </a-modal>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  unref,
  getCurrentInstance,
  computed,
  useAttrs
} from 'vue'
import { IModalMethod, IModalProps } from '@/components/modal/index'
import { deepMerge } from '@/utils'

const visible = ref(false)
//前面传递过来的值,通过setModalProps设置
const propsRef = ref<Partial<IModalProps> | null>(null)
const attrs = useAttrs()
console.log('🤡 ~~ attrs', attrs)
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  }
})
const emit = defineEmits(['register'])
const methods: IModalMethod = {
  setVisible: (props: boolean) => {
    visible.value = !!props
  },
  // 1. 将前面传递过来的prop进行合并
  setModalProps: (setprops: Partial<IModalProps>) => {
    propsRef.value = deepMerge(unref(propsRef) || ({} as any), setprops)
  },
  // 确定回调
  setConfirm: () => {
    handleOk()
  }
}
const instance = getCurrentInstance()
if (instance) {
  emit('register', methods)
}

// 2. 通过计算属性，合并propsRef和props
const getMergeProps = computed(() => {
  return {
    ...props,
    ...unref(propsRef as any)
  }
})

// 3. v-bind绑定我们的属性，通过计算属性监听getMergeProps，实时绑定属性
const getBindValue = computed(() => {
  const allAttrs = {
    ...attrs,
    ...unref(getMergeProps),
    visible: unref(visible)
  }
  return allAttrs
})

const handleOk = () => {
  visible.value = false
}

defineExpose({
  ...methods
})
</script>

<style scoped lang="scss"></style>
