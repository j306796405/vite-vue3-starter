import { ElLoading } from 'element-plus';
import { ILoadingInstance, ILoadingOptions } from 'element-plus/lib/el-loading/src/loading.type';

let loadingInstance: ILoadingInstance | null = null;

// 全局loading
export const startFullScreenLoading = (opts: ILoadingOptions = {}) => {
  const { text = '加载中', fullscreen = true } = opts;
  loadingInstance = ElLoading.service({ text, fullscreen, ...opts });
};

export function closeFullScreenLoading() {
  if (loadingInstance) {
    loadingInstance.close();
  }
}
