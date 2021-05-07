import { isObject, isString } from '/@/base/utils/is';

export function createNow<T extends boolean>(
  join: boolean,
  restful: T
): T extends true ? string : object;

export function createNow(join: boolean, restful = false): string | object {
  if (!join) {
    return restful ? '' : {};
  }
  const now = new Date().getTime();
  if (restful) {
    return `?_t=${now}`;
  }
  return { _t: now };
}

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
/**
 * @description: Format request parameter time
 */
export function formatRequestDate(params: any) {
  for (const key in params) {
    // 将moment object转换成 'YYYY-MM-DD HH:mm'
    if (params[key] && params[key]._isAMomentObject) {
      params[key] = params[key].format(DATE_TIME_FORMAT);
    }
    // trim 字符串
    if (isString(key)) {
      const value = params[key];
      if (value) {
        try {
          params[key] = isString(value) ? value.trim() : value;
        } catch (error) {
          throw new Error(error);
        }
      }
    }
    // 递归转换
    if (isObject(params[key])) {
      formatRequestDate(params[key]);
    }
  }
}
