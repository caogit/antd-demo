import { ref, computed, unref } from 'vue'
export function usefuzzySearch(arr: string[]) {
  const inputVal = ref()
  const isShowbox = computed(() => {
    return !!unref(laterSearch)?.length && !!inputVal.value
  })

  // 模糊查询input中输入的val和arr去对比后渲染
  const laterSearch = computed(() => {
    return arr.filter((item) => {
      return item.includes(inputVal.value)
    })
  })

  return { inputVal, isShowbox, laterSearch }
}
