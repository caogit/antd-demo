import { ref } from 'vue'

export function useTestTab(tabs: String) {
  const value0 = ref(tabs)

  const getNewValue = (val: string) => {
    value0.value = val
  }

  return {
    value0,
    getNewValue
  }
}
