import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '/@/base/views/home.vue';
import Vuex from '/@/base/views/vuex.vue';
import Login from '/@/base/views/login';

console.log(Login);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    // component: () => import('/@/base/views/login'),
    component: Login,
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
