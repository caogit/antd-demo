import { createApp } from 'vue'
import App from './App.vue'
import { regiseterd } from './global'

const app = createApp(App)
app.use(regiseterd)
app.mount('#app')
