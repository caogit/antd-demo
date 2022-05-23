import { IModalMethod, IReturnMethod } from '@/components/modal/index'
import {
  ref,
  reactive,
  watchEffect,
  unref,
  getCurrentInstance,
  onUnmounted
} from 'vue'
import { isFunction } from '@/utils/is'

// 数据传递存储useModal中open传递的数据，并通过watchEffect传递到usModalInner的CallbackOpen中
const dataTransfer = reactive<any>({})

type TCallbackConfirmFn = () => void

type Fn = (T: any) => void

//用于独立的 Modal 内部调用（在我的基座Modal基础上在封装一个组件，在那个组件中使用的hook）

export function useModalInner(
  CallbackOpen?: Fn,
  CallbackConfirmFn?: TCallbackConfirmFn
) {
  // 思考一个问题，这里为什么不用写在onMounted周期里面，是因为他是子组件，估计应该涉及到父子组件的渲染时机的问题
  const basicModalRef = ref<IModalMethod>()
  console.log('🤡 ~~ basicModalRef', basicModalRef)
  const methods: IReturnMethod = {
    openModal: () => {
      basicModalRef.value?.setVisible(true)
    },
    closeModal: () => {
      basicModalRef.value?.setVisible(false)
    },
    changeModal: (props) => {
      basicModalRef.value?.setModalProps(props)
    },
    handleConfirm: () => {
      basicModalRef.value?.setConfirm()
      CallbackConfirmFn && CallbackConfirmFn()
    }
  }

  watchEffect(() => {
    const data = dataTransfer?.data
    // if (!CallbackOpen || !isFunction(CallbackOpen)) return
    if (data) {
      CallbackOpen && CallbackOpen(data)
    }
  })

  return { basicModalRef, ...methods }
}

// 用于外部调用
export function useModal() {
  // 定义一个modal用于接收基座对话框的方法
  const modal = ref()
  console.log('🤡 ~~ modal', modal)

  // 点击open方法的时候，触发返回一个方法实例
  const getInstance = () => {
    const instance = unref(modal)
    return instance
  }
  // register 用于注册 useModal，其实就是 不需要自己在写一个死的ref、不用在单独的Modal组件中手动抛出一个方法了、不需要在onMounted中才能获取
  // 原理其实很简单，就是 vue 的组件子传父通信，内部通过 emit("register",methods) 实现。
  function register(methodss: any) {
    modal.value = methodss
  }

  const open = <T = any>(visible = true, data?: T) => {
    getInstance()?.setVisible(visible)
    if (!data) return
    dataTransfer['data'] = data
  }
  const close = <T = any>(visible = false, data?: T) => {
    getInstance()?.setVisible(visible)
    if (!data) return
    dataTransfer['data'] = data
  }

  return { register, open, close }
}
