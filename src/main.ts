/*
 * @Description:
 * @Author: Jeffery
 * @Date: 2021-04-23 15:56:13
 */
import { createApp } from 'vue';
import router from '/@/base/router';
import { store } from '/@/base/store';
import loadAllPlugins from '/@/base/plugins';
import App from '/@/App.vue';
// import ElementPlus from 'element-plus'

import 'element-plus/lib/theme-chalk/index.css';
// import '@/styles/index.scss'

const app: ReturnType<typeof createApp> = createApp(App);

app.use(router).use(store).mount('#app');

loadAllPlugins(app);
