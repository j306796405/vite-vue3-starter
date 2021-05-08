import { createApp } from 'vue';
import router from '/@/base/router';
import { store } from '/@/base/store';
import loadAllPlugins from '/@/base/plugins';
import App from '/@/App.vue';

import 'element-plus/packages/theme-chalk/src/base.scss';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '/@/base/styles/index.scss';

const app: ReturnType<typeof createApp> = createApp(App);
loadAllPlugins(app);

app.use(router).use(store).mount('#app');
