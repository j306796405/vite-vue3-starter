import type { RouteLocationRaw, Router } from 'vue-router';

import PageEnum from '/@enums/pageEnum';
import { isString } from '/@utils/is';
import { unref } from 'vue';
import { useRouter } from 'vue-router';
import { logError } from '/@log';

export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path: PageEnum };

function handleError(e: Error) {
  logError(e.message);
}

// 页面跳转
export function useGo(_router?: Router) {
  let router;
  if (!_router) {
    router = useRouter();
  }
  const { push, replace } = _router || router;
  function go(opt: PageEnum | RouteLocationRawEx | string = PageEnum.HOME, isReplace = false) {
    if (!opt) {
      return;
    }
    if (isString(opt)) {
      isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
    } else {
      const o = opt as RouteLocationRaw;
      isReplace ? replace(o).catch(handleError) : push(o).catch(handleError);
    }
  }
  return go;
}

/**
 * @description: 重定向当前页面
 */
export const useRedo = (_router?: Router) => {
  let router;
  if (!_router) {
    router = useRouter();
  }
  const { push, currentRoute } = _router || router;
  const { query, params } = currentRoute.value;
  function redo(): Promise<boolean> {
    return new Promise((resolve) => {
      push({
        path: '/redirect' + unref(currentRoute).fullPath,
        query,
        params,
      }).then(() => resolve(true));
    });
  }
  return redo;
};
