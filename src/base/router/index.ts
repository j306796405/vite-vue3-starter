/*
 * @Description:
 * @Author: Jeffery
 * @Date: 2021-04-23 16:19:40
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '/@/base/views/home.vue';
import Vuex from '/@/base/views/vuex.vue';

const routes: Array<RouteRecordRaw> = [
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