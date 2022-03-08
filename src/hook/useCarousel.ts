import { ref, onUnmounted, computed, unref } from 'vue'

export function useCarousel() {
  const modal = ref()
  const getInstance = () => {
    const instance = unref(modal)
    console.log('🤡 ~~ instance', instance)
    return instance
  }
  // 这里使用的注册的原因，如果你在这里写一个死的ref,那么他的方法值都需要在onMounted中才能获取
  const register = (methods: any) => {
    modal.value = methods
    console.log('🤡 ~~ modal.value', modal.value)
  }
  const methods = {
    next: () => {
      const obj = getInstance().next()
      console.log(obj.index)
    }
  }
  // onUnmounted(() => {
  //   modal.value = null
  // })

  return { register, ...methods }
}
