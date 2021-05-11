export enum ExceptionEnum {
  // 没有权限
  PAGE_NOT_ACCESS = 403,

  // 没有相关页面
  PAGE_NOT_FOUND = 404,

  // 系统错误
  ERROR = 500,

  // 网络错误
  NET_WORK_ERROR = 10000,
}

export enum ErrorTypeEnum {
  VUE = 'vue',
  SCRIPT = 'script',
  RESOURCE = 'resource',
  AJAX = 'ajax',
  PROMISE = 'promise',
}
