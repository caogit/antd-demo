import store from '../store'
import router from '../router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { App } from 'vue'

export function regiseterd(app: App) {
  app.use(store).use(router).use(Antd)
}
