import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'

const app=createApp(App).use(VueAxios,axios)
app.use(ElementPlus)
app.mount('#app')