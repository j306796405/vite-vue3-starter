import PageEnum from '/@enums/pageEnum';
import { AppRouteRecordRaw } from '../types';
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from './basic';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

export const LoginRoute: AppRouteRecordRaw = {
  path: PageEnum.LOGIN,
  name: 'Login',
  component: () => import('/@views/login'),
  meta: {
    title: '登录',
  },
};

export const HomeRoute: AppRouteRecordRaw = {
  path: PageEnum.HOME,
  name: 'Home',
  component: () => import('/@views/home'),
  meta: {
    title: '首页',
  },
};

// 基础路由，不受权限控制
export const basicRoutes = [LoginRoute, HomeRoute, REDIRECT_ROUTE];
