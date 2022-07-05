import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')
