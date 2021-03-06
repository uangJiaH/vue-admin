import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import './style/index.css'
import './permission'
import installIcon from '@/icons/index'

const app = createApp(App)
installIcon(app)
app.use(store).use(router).use(ElementPlus).mount('#app')
