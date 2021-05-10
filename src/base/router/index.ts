import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '/@/base/views/home.vue';
import Vuex from '/@/base/views/vuex.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/base/views/login'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
