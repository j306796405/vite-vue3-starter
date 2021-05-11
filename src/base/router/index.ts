import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { basicRoutes, LoginRoute } from './routes';
import type { App } from 'vue';
import { REDIRECT_NAME } from './constant';

const WHITE_NAME_LIST = [LoginRoute.name, REDIRECT_NAME];

const router = createRouter({
  history: createWebHashHistory(),
  routes: (basicRoutes as unknown) as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
