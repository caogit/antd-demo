import { ref, isRef } from 'vue'

export function useTestTab2(tabs: String) {
  const value2 = ref(tabs)

  const getNewValue = (val: string) => {
    value2.value = val
  }

  return {
    value2,
    getNewValue
  }
}
