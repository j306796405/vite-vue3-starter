/*
 * @Description:
 * @Author: Jeffery
 * @Date: 2021-04-23 15:56:13
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).mount('#app')
